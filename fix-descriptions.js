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
  const title = titleMatch ? titleMatch[1] : 'GOSUN Omnichain';

  // Extract description (better regex to handle single quotes)
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const description = descMatch ? descMatch[1] : 'GOSUN Omnichain Matrix';

  // Replace truncated descriptions
  content = content.replace(/<meta property="og:description" content="[^"]*">/g, `<meta property="og:description" content="${description}">`);
  content = content.replace(/<meta name="twitter:description" content="[^"]*">/g, `<meta name="twitter:description" content="${description}">`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed description in ${file}`);
}
