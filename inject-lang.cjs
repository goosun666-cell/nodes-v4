const fs = require('fs');
const path = require('path');

const dir = __dirname;
const scriptTag = '<script src="/lang-switcher.js"></script>';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if already injected
        if (!content.includes('lang-switcher.js')) {
            // Inject before </body>
            content = content.replace('</body>', `    ${scriptTag}\n</body>`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Injected into ${file}`);
        } else {
            console.log(`Already injected in ${file}`);
        }
    }
});
