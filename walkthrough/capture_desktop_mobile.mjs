import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('walkthrough/desktop-mobile-recording');
await fs.mkdir(outDir, { recursive: true });
const url = process.env.SITE_URL || 'https://srv1522777.tail72f980.ts.net/';

async function capture(browser, name, viewport, options = {}) {
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: options.deviceScaleFactor || 1,
    isMobile: options.isMobile || false,
    hasTouch: options.hasTouch || false,
    userAgent: options.userAgent,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.addStyleTag({ content: `
    * { scroll-behavior: auto !important; }
    body { caret-color: transparent !important; }
  `});
  await page.screenshot({ path: path.join(outDir, `${name}-full.png`), fullPage: true });
  const meta = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector('h1')?.textContent?.trim() || '',
    width: window.innerWidth,
    height: window.innerHeight,
    scrollHeight: document.documentElement.scrollHeight,
    bodyText: document.body.innerText.slice(0, 500),
  }));
  await fs.writeFile(path.join(outDir, `${name}-meta.json`), JSON.stringify(meta, null, 2));
  await context.close();
  return meta;
}

const browser = await chromium.launch({ headless: true });
try {
  const desktop = await capture(browser, 'desktop', { width: 1440, height: 900 });
  const iphone = devices['iPhone 14'];
  const mobile = await capture(browser, 'mobile', iphone.viewport, {
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
    userAgent: iphone.userAgent,
  });
  console.log(JSON.stringify({ ok: true, url, desktop, mobile }, null, 2));
} finally {
  await browser.close();
}
