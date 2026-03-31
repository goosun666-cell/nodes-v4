const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git') {
        walkDir(dirPath, callback);
      }
    } else {
      if (dirPath.endsWith('.html')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('.', function(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = content.replace(/<img[^>]*src="\/full-logo\.svg"[^>]*>/g, (match) => {
    let newMatch = match.replace(/src="\/full-logo\.svg"/, 'src="gosun-logo.png"');
    if (newMatch.includes('alt="GOSUN"')) {
      newMatch = newMatch.replace(/alt="GOSUN"/, 'alt="GOSUN Omnichain Logo"');
    } else if (!newMatch.includes('alt=')) {
      newMatch = newMatch.replace('src="gosun-logo.png"', 'src="gosun-logo.png" alt="GOSUN Omnichain Logo"');
    }
    return newMatch;
  });
  
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated:', filePath);
  }
});
