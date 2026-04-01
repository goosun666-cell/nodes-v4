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
const requiredTags = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'];

htmlFiles.forEach(file => {
  if (file.includes('baidu_verify_code')) return;
  
  const content = fs.readFileSync(file, 'utf8');
  const missing = [];
  
  requiredTags.forEach(tag => {
    if (!content.includes(`property="${tag}"`)) {
      missing.push(tag);
    }
  });
  
  if (missing.length > 0) {
    console.log(`${file} is missing: ${missing.join(', ')}`);
  }
});
