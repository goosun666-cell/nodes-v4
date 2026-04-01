const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
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
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<meta name="description" content="([^"]*)">/);
  if (match) {
    const desc = match[1];
    if (desc.length < 50) {
      console.log(`${file}: ${desc.length} chars - ${desc}`);
    }
  } else {
    console.log(`${file}: NO META DESCRIPTION`);
  }
});
