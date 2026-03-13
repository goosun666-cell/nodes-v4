const fs = require('fs');
const path = require('path');

const files = [
  'privacy.html',
  'matrix.html',
  'rate-radar.html',
  'terms.html',
  'disclaimer.html',
  'litepaper.html',
  'index.html',
  'awakening.html',
  'experts.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace /LITEPAPER with /WEB3
  content = content.replace(/\/LITEPAPER/g, '/WEB3');
  
  // Replace GOSUN_LITEPAPER with GOSUN_WEB3
  content = content.replace(/GOSUN_LITEPAPER/g, 'GOSUN_WEB3');
  
  fs.writeFileSync(filePath, content);
});

// Rename litepaper.html to web3.html
if (fs.existsSync(path.join(__dirname, 'litepaper.html'))) {
  fs.renameSync(path.join(__dirname, 'litepaper.html'), path.join(__dirname, 'web3.html'));
}

console.log('Renamed and replaced successfully.');
