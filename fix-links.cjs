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
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Replace href="something.html" with href="something"
  // But ignore external links, and ignore index.html (replace with /)
  
  const newContent = content.replace(/href="([^"]+)\.html(#?[^"]*)"/g, (match, p1, p2) => {
    if (p1.startsWith('http')) return match;
    if (p1 === 'index' || p1 === '/index') return `href="/${p2}"`;
    return `href="${p1}${p2}"`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated links in ${file}`);
  }
});
