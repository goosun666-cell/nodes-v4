import https from 'https';

https.get('https://www.7861618.xyz/assets/images/twitter-cover.jpg', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});
