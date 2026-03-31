const fs = require('fs');
const path = require('path');

const files = [
  'privacy.html',
  'matrix.html',
  'rate-radar.html',
  'terms.html',
  'index.html',
  'disclaimer.html',
  'web3.html'
];

const oldLink = 'https://x.com/goosun666';
const newLink = 'https://x.com/Gosun_Capital';

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace old link with new link
  content = content.replace(new RegExp(oldLink, 'g'), newLink);
  
  fs.writeFileSync(filePath, content);
});

console.log('X links updated successfully.');
