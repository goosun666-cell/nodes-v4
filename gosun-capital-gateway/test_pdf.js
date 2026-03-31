import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('public/test.pdf'));
doc.text('Hello World!');
doc.end();
console.log('test.pdf generated.');
