import fs from 'fs';
import path from 'path';
import https from 'https';

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log("Downloading high-quality tech background...");
  // Use a specific high-quality abstract tech/blockchain image from Unsplash
  // Keywords: abstract, network, dark, gold, technology
  const imageUrl = 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&h=630&fit=crop';
  
  try {
    await downloadImage(imageUrl, './public/assets/images/og-cover.jpg');
    console.log("Saved og-cover.jpg");
    
    // For twitter cover, use a slightly different crop or the same one
    const twitterImageUrl = 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&h=600&fit=crop';
    await downloadImage(twitterImageUrl, './public/assets/images/twitter-cover.jpg');
    console.log("Saved twitter-cover.jpg");
  } catch (e) {
    console.error("Failed to download:", e);
  }
}

main();
