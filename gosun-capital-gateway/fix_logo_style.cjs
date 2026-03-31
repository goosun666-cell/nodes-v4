const fs = require('fs');
let html = fs.readFileSync('matrix.html', 'utf8');
html = html.replace(/<img src="\/token-logo\.svg" alt="([^"]+)" style="width: 24px; height: 24px; border-radius: 50%; background: #fff; padding: 2px; object-fit: contain;">/g, '<img src="/token-logo.svg" alt="$1" style="width: 24px; height: 24px; border-radius: 50%; object-fit: contain;">');
fs.writeFileSync('matrix.html', html);
console.log('Fixed token-logo styles');
