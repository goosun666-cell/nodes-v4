import fs from 'fs';
import vm from 'vm';
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g);
let i = 0;
for (const match of scriptMatches) {
  i++;
  const script = match[1];
  console.log(`Script ${i} length: ${script.length}`);
  if (script.trim() === '') continue;
  try {
    new vm.Script(script);
    console.log(`Script ${i} Syntax OK`);
  } catch (e) {
    console.error(`Script ${i} Syntax Error:`, e.message);
  }
}
