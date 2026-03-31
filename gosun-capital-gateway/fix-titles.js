import fs from 'fs';
import path from 'path';

const htmlFiles = [
  'about.html',
  'article-aea-zkvc.html',
  'article-aea.html',
  'article-hqc.html',
  'article-omnichain-future.html',
  'article-poe.html',
  'article-zkvc.html',
  'awakening.html',
  'disclaimer.html',
  'download-confirm.html',
  'experts.html',
  'index.html',
  'insights.html',
  'litepaper.html',
  'matrix.html',
  'privacy.html',
  'radar-share.html',
  'rate-radar.html',
  'technical-documentation.html',
  'terms.html',
  'web3.html'
];

for (const file of htmlFiles) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (titleMatch) {
    const originalTitle = titleMatch[1];
    let newTitle = originalTitle;
    
    // Check if title is too short (less than 30 chars usually triggers this warning)
    // Bing recommends 50-60 characters
    if (originalTitle.length < 40) {
      if (!originalTitle.includes('GOSUN')) {
        newTitle = `${originalTitle} | GOSUN Omnichain Matrix`;
      } else if (!originalTitle.includes('Omnichain')) {
        newTitle = `${originalTitle} | Omnichain Matrix Infrastructure`;
      } else {
        newTitle = `${originalTitle} | Web3 Infrastructure`;
      }
      
      // Ensure it doesn't get too long
      if (newTitle.length > 65) {
        newTitle = newTitle.substring(0, 62) + '...';
      }
      
      content = content.replace(/<title>.*?<\/title>/i, `<title>${newTitle}</title>`);
      
      // Also update og:title and twitter:title if they exist
      content = content.replace(new RegExp(`<meta property="og:title" content="${originalTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`, 'g'), `<meta property="og:title" content="${newTitle}">`);
      content = content.replace(new RegExp(`<meta name="twitter:title" content="${originalTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`, 'g'), `<meta name="twitter:title" content="${newTitle}">`);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated title in ${file} from [${originalTitle.length} chars] to [${newTitle.length} chars]: ${newTitle}`);
    } else {
      console.log(`Title in ${file} is already good length [${originalTitle.length} chars]`);
    }
  }
}
