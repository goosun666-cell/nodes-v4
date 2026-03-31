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

const ogImageTags = `
    <meta property="og:image" content="https://www.7861618.xyz/assets/images/og-cover.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://www.7861618.xyz/assets/images/twitter-cover.jpg">
`;

for (const file of htmlFiles) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  
  // If it already has the new tags, skip
  if (content.includes('https://www.7861618.xyz/assets/images/og-cover.jpg') && !file.includes('index.html') && !file.includes('terms.html') && !file.includes('privacy.html')) {
    continue;
  }

  // If it has old og:image, replace it
  if (content.includes('<meta property="og:image"')) {
    // We already updated index, terms, privacy manually, but just in case, let's skip them if they are fine
    if (file === 'index.html' || file === 'terms.html' || file === 'privacy.html') continue;
    
    // For others, we might need to replace or just inject if they don't have it
  }

  // If it doesn't have og:image, inject before </head>
  if (!content.includes('og:image')) {
    content = content.replace('</head>', `${ogImageTags}</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
