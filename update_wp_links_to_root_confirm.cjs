const fs = require('fs');
const path = require('path');

const files = [
  'disclaimer.html',
  'index.html',
  'litepaper.html',
  'matrix.html',
  'privacy.html',
  'rate-radar.html',
  'terms.html',
  'web3.html'
];

// Replace link to /public/download-confirm.html with /download-confirm.html

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace old link with new link
  content = content.replace(/href="\/public\/download-confirm.html"/g, 'href="/download-confirm.html"');
  
  fs.writeFileSync(filePath, content);
});

console.log('Whitepaper links updated back to /download-confirm.html.');
