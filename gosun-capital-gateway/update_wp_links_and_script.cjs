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
  
  // Replace script tag if present
  content = content.replace(/<script src="\/download-modal.js"><\/script>/g, '<script src="/download-modal.js"></script>');
  
  // Add script tag if not present
  if (!content.includes('download-modal.js')) {
    content = content.replace('</body>', '<script src="/download-modal.js"></script>\n</body>');
  }
  
  fs.writeFileSync(filePath, content);
});

console.log('Whitepaper links and modal script updated.');
