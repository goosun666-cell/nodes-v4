const fs = require('fs');
let html = fs.readFileSync('matrix.html', 'utf8');
html = html.replace(/<img src="\/full-logo\.svg"\s+alt="/g, '<img src="/token-logo.svg" alt="');
fs.writeFileSync('matrix.html', html);
console.log('Replaced small logos');
