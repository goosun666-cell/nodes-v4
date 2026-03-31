import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'www.7861618.xyz';
const KEY = 'gosun-7861618-xyz-indexnow-key';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Find all html files in the root directory
const htmlFiles = fs.readdirSync(process.cwd()).filter(file => file.endsWith('.html'));

// Construct full URLs
const urlList = htmlFiles.map(file => {
  if (file === 'index.html') {
    return `https://${HOST}/`;
  }
  return `https://${HOST}/${file}`;
});

console.log(`Found ${urlList.length} URLs to submit to IndexNow.`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow API Response Status: ${res.statusCode}`);
  res.on('data', (d) => {
    const responseBody = d.toString();
    if (responseBody) {
      console.log(`Response Body: ${responseBody}`);
    }
  });
  
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('✅ Successfully submitted URLs to IndexNow (Bing, Yandex, Seznam, etc.)');
  } else {
    console.log('❌ Failed to submit URLs to IndexNow.');
  }
});

req.on('error', (error) => {
  console.error('Error connecting to IndexNow API:', error);
});

req.write(payload);
req.end();
