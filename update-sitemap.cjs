const fs = require('fs');

const sitemapPath = './public/sitemap.xml';
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const newUrls = [
  '/about',
  '/article-hqc',
  '/article-poe',
  '/article-aea-zkvc',
  '/article-omnichain-future',
  '/article-aea',
  '/article-zkvc',
  '/insights',
  '/openclaw-ai-node-guide',
  '/technical-documentation'
];

const today = new Date().toISOString().split('T')[0];

let urlEntries = newUrls.map(url => `  <url>
    <loc>https://7861618.xyz${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n');

sitemap = sitemap.replace('</urlset>', `${urlEntries}\n</urlset>`);

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap updated.');
