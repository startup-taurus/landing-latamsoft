const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright");

async function main() {
  const root = path.resolve(__dirname, "..");
  const htmlPath = path.join(root, "latamsoft-brand-guide.html");
  const pdfPath = path.join(root, "latamsoft-brand-guide.pdf");
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  const executablePath = candidates.find((file) => fs.existsSync(file));

  const browser = await chromium.launch({
    headless: true,
    executablePath
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", right: "10mm", bottom: "12mm", left: "10mm" }
  });
  await page.screenshot({
    path: path.join(root, "latamsoft-brand-guide-preview.png"),
    fullPage: true
  });
  await browser.close();
  console.log(path.relative(root, pdfPath));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
