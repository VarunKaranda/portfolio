import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../public/Varun_Karanda_Resume.html');
const pdfPath = path.resolve(__dirname, '../public/Varun_Karanda_Resume.pdf');

const htmlUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

console.log('Launching browser...');
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

console.log('Loading resume HTML...');
await page.goto(htmlUrl, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait a bit for Google Fonts to load
await new Promise(r => setTimeout(r, 2000));

console.log('Generating PDF...');
await page.pdf({
  path: pdfPath,
  format: 'A4',
  margin: { top: '14mm', right: '16mm', bottom: '14mm', left: '16mm' },
  printBackground: true,
});

await browser.close();
console.log('✅ PDF saved to:', pdfPath);
