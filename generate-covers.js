import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt, filename, aspectRatio) {
  console.log(`Generating ${filename}...`);
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: "1K"
        }
      }
    });

    let base64Data = null;
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        base64Data = part.inlineData.data;
        break;
      }
    }

    if (base64Data) {
      const buffer = Buffer.from(base64Data, 'base64');
      const dir = path.dirname(filename);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filename, buffer);
      console.log(`Saved ${filename}`);
    } else {
      console.error(`Failed to get image data for ${filename}`);
    }
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
}

async function main() {
  const prompt = "A world-class Web3 technology background, dark mode, futuristic, glowing golden and cyan nodes connecting in a decentralized network, AI-driven omnichain matrix, institutional grade, abstract, high quality, 8k resolution, cinematic lighting, clean abstract tech.";
  
  await generateImage(prompt, './public/assets/images/og-cover.jpg', '16:9');
  await generateImage(prompt, './public/assets/images/twitter-cover.jpg', '16:9'); // Twitter card is also 16:9 or 2:1, 16:9 works well for summary_large_image
}

main();
