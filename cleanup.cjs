const fs = require('fs');
const path = require('path');

const files = [
  'experts.html',
  'awakening.html',
  'privacy.html',
  'terms.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove the old variables
  content = content.replace(/--font-tech:.*?\n/g, '');
  content = content.replace(/--font-display:\s*'Space Grotesk',\s*'PingFang SC',\s*'Hiragino Sans GB',\s*'Noto Sans SC',\s*sans-serif;\s*\n/g, '');
  
  // Replace any remaining monospace
  content = content.replace(/font-family:\s*monospace;/g, 'font-family: var(--font-mono);');
  
  fs.writeFileSync(filePath, content);
});
console.log('Cleanup successful.');
