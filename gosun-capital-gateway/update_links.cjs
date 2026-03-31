const fs = require('fs');
const path = require('path');

const files = [
  'privacy.html',
  'matrix.html',
  'rate-radar.html',
  'terms.html',
  'disclaimer.html',
  'web3.html',
  'index.html',
  'awakening.html',
  'experts.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace href="litepaper.html" with href="web3.html"
  content = content.replace(/href="litepaper\.html"/g, 'href="web3.html"');
  
  fs.writeFileSync(filePath, content);
});

console.log('Links updated successfully.');
