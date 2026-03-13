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

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace old link with new link
  content = content.replace(/href="\/download-confirm"/g, 'href="#" onclick="event.preventDefault(); openModal();"');
  
  // Add script tag if not present
  if (!content.includes('download-modal.js')) {
    content = content.replace('</body>', '<script src="/download-modal.js"></script>\n</body>');
  }
  
  fs.writeFileSync(filePath, content);
});

console.log('Whitepaper links updated to use modal.');
