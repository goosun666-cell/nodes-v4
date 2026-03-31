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

  // Extract description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const description = descMatch ? descMatch[1] : 'GOSUN Omnichain Matrix';

  let changed = false;

  // Add og:title if missing
  if (!content.includes('<meta property="og:title"')) {
    content = content.replace('</head>', `    <meta property="og:title" content="${title}">\n</head>`);
    changed = true;
  }

  // Add og:description if missing
  if (!content.includes('<meta property="og:description"')) {
    content = content.replace('</head>', `    <meta property="og:description" content="${description}">\n</head>`);
    changed = true;
  }

  // Add twitter:title if missing
  if (!content.includes('<meta name="twitter:title"')) {
    content = content.replace('</head>', `    <meta name="twitter:title" content="${title}">\n</head>`);
    changed = true;
  }

  // Add twitter:description if missing
  if (!content.includes('<meta name="twitter:description"')) {
    content = content.replace('</head>', `    <meta name="twitter:description" content="${description}">\n</head>`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Enhanced ${file} with full OG/Twitter tags.`);
  }
}
