import fs from 'fs';

let content = fs.readFileSync('index.html', 'utf8');

// Replace category-title
content = content.replace(/<div class="category-title">(.*?)<\/div>/g, '<h2 class="category-title">$1</h2>');

// Replace tool-name
content = content.replace(/<div class="tool-name">(.*?)<\/div>/g, '<h3 class="tool-name">$1</h3>');

// Replace img with loading="lazy" where appropriate
// We only want to add loading="lazy" if it doesn't already have it
content = content.replace(/<img class="official-logo"([^>]*?)>/g, (match, p1) => {
  if (p1.includes('loading="lazy"')) return match;
  return `<img class="official-logo" loading="lazy"${p1}>`;
});

fs.writeFileSync('index.html', content);
console.log('Done replacing tags');
