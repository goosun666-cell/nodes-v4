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

// Replace direct download with link to confirmation page
// <a href="/public/GOSUN_Whitepaper_V1.0.pdf" download>Whitepaper</a>
// -> <a href="/download-confirm.html" target="_blank">Whitepaper</a>

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace old link with new link
  content = content.replace(/href="\/public\/GOSUN_Whitepaper_V1.0.pdf" download/g, 'href="/download-confirm.html" target="_blank"');
  
  fs.writeFileSync(filePath, content);
});

console.log('Whitepaper links updated to confirmation page.');
