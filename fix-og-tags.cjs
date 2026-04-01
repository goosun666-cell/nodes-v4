const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        findHtmlFiles(filePath, fileList);
      }
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles('.');

htmlFiles.forEach(file => {
  if (file.includes('baidu_verify_code')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Determine URL path
  let urlPath = file.replace(/\\/g, '/').replace(/^\.\//, '');
  if (urlPath === 'index.html') {
    urlPath = '';
  } else if (urlPath.startsWith('public/')) {
    urlPath = urlPath.replace('public/', '');
    urlPath = urlPath.replace('.html', '');
  } else {
    urlPath = urlPath.replace('.html', '');
  }
  
  const fullUrl = `https://7861618.xyz/${urlPath}`;
  
  // Determine type
  let type = 'website';
  if (file.includes('article') || file.includes('guide') || file.includes('tutorial')) {
    type = 'article';
  }
  
  // Add og:url
  if (!content.includes('property="og:url"')) {
    content = content.replace('</head>', `    <meta property="og:url" content="${fullUrl}">\n</head>`);
    changed = true;
  }
  
  // Add og:type
  if (!content.includes('property="og:type"')) {
    content = content.replace('</head>', `    <meta property="og:type" content="${type}">\n</head>`);
    changed = true;
  }
  
  // Add og:image if missing
  if (!content.includes('property="og:image"')) {
    content = content.replace('</head>', `    <meta property="og:image" content="https://www.7861618.xyz/assets/images/og-cover.jpg">\n    <meta property="og:image:type" content="image/jpeg">\n    <meta property="og:image:width" content="1200">\n    <meta property="og:image:height" content="630">\n</head>`);
    changed = true;
  }
  
  // Add og:title if missing
  if (!content.includes('property="og:title"')) {
    const titleMatch = content.match(/<title>([^<]*)<\/title>/);
    const title = titleMatch ? titleMatch[1] : 'GOSUN Omnichain Matrix';
    content = content.replace('</head>', `    <meta property="og:title" content="${title}">\n</head>`);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated OG tags for ${file}`);
  }
});
