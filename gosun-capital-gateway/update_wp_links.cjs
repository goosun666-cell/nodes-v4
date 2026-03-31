const fs = require('fs');
const path = require('path');

const files = [
  'disclaimer.html',
  'index.html',
  'litepaper.html',
  'matrix.html',
  'privacy.html',
  'rate-radar.html',
  'web3.html'
];

const oldLink = 'href="/GOSUN_Whitepaper_V1.0.pdf"';
const newLink = 'href="/public/GOSUN_Whitepaper_V1.0.pdf"';

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace old link with new link
  content = content.replace(new RegExp(oldLink, 'g'), newLink);
  
  fs.writeFileSync(filePath, content);
});

console.log('Whitepaper links updated successfully.');
