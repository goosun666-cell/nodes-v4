import fs from 'fs';

let content = fs.readFileSync('index.html', 'utf8');

// Replace category-title span with h2
content = content.replace(/<span class="category-title">(.*?)<\/span>/g, '<h2 class="category-title">$1</h2>');

fs.writeFileSync('index.html', content);
console.log('Done replacing category titles');
