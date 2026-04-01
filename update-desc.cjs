const fs = require('fs');
const path = require('path');

const updates = {
  'disclaimer.html': 'Risk Disclaimer for GOSUN CAPITAL Node Matrix. Read our comprehensive risk disclosure regarding cryptocurrency trading, node operation, and decentralized protocol interactions.',
  'privacy.html': 'Privacy Policy for GOSUN CAPITAL Node Matrix. Learn how we collect, use, and protect your personal information and data within the GOSUN Omnichain ecosystem.',
  'terms.html': 'Terms of Service for GOSUN CAPITAL Node Matrix. Review the rules, guidelines, and agreements for using the GOSUN Omnichain infrastructure and services.',
  'download-confirm.html': 'Download Confirmation for GOSUN Omnichain Matrix resources. Your download will begin shortly. Thank you for exploring the GOSUN ecosystem.',
  'technical-documentation.html': 'Technical Documentation for the GOSUN Protocol. Explore in-depth guides, API references, and architectural details of the GOSUN Omnichain Matrix.',
  'public/tutorials/grass-node-2026.html': '2026 Ultimate Guide to Deploying a Grass Node. Learn how to monetize your unused bandwidth and participate in the decentralized AI data layer with GOSUN.',
  'public/tutorials/megaeth-testnet-guide.html': 'MegaETH Testnet Interactive Guide. Step-by-step tutorial on how to participate in the MegaETH testnet, interact with dApps, and position yourself for future airdrops.'
};

for (const [file, desc] of Object.entries(updates)) {
  const filePath = path.join('.', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if meta description exists
    if (content.includes('<meta name="description"')) {
      content = content.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc}">`);
    } else {
      // Inject meta description before </head>
      content = content.replace('</head>', `    <meta name="description" content="${desc}">\n</head>`);
    }
    
    // Also update og:description
    if (content.includes('<meta property="og:description"')) {
      content = content.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${desc}">`);
    } else {
      content = content.replace('</head>', `    <meta property="og:description" content="${desc}">\n</head>`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
