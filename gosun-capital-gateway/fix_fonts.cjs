const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'matrix.html',
  'litepaper.html',
  'rate-radar.html',
  'disclaimer.html',
  'experts.html',
  'awakening.html',
  'privacy.html',
  'terms.html'
];

const googleFontsLink = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700;900&family=Noto+Sans+SC:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
`;

const rootVars = `
            --font-sans: 'Inter', 'PingFang SC', 'Noto Sans SC', sans-serif;
            --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
            --font-display: 'Space Grotesk', 'PingFang SC', 'Noto Sans SC', sans-serif;
`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace var(--mono) with var(--font-mono)
  content = content.replace(/var\(--mono\)/g, 'var(--font-mono)');
  content = content.replace(/var\(--mono, 'Courier New', monospace\)/g, 'var(--font-mono)');
  content = content.replace(/var\(--font-tech\)/g, 'var(--font-sans)');
  
  // Replace font-family: 'Inter', -apple-system, sans-serif; with var(--font-sans)
  content = content.replace(/font-family:\s*'Inter',\s*-apple-system,\s*sans-serif;/g, 'font-family: var(--font-sans);');
  content = content.replace(/font-family:\s*'Inter',\s*sans-serif;/g, 'font-family: var(--font-sans);');
  content = content.replace(/font-family:\s*'Courier New',\s*Courier,\s*monospace;/g, 'font-family: var(--font-mono);');
  content = content.replace(/font-family:\s*'Courier New',\s*monospace;/g, 'font-family: var(--font-mono);');
  
  // Add Google Fonts if not present
  if (!content.includes('fonts.googleapis.com')) {
    content = content.replace(/<title>(.*?)<\/title>/, `<title>$1</title>${googleFontsLink}`);
  }
  
  // Add CSS vars if not present
  if (!content.includes('--font-sans:')) {
    content = content.replace(/:root\s*{/, `:root {${rootVars}`);
  }
  
  fs.writeFileSync(filePath, content);
});
console.log('Fonts unified successfully.');
