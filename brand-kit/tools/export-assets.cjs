const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const assets = path.join(root, "assets");
const reference = path.join(root, "reference", "latamsoft-original-generated.png");

async function renderSvg(name, width, height = null) {
  const input = path.join(assets, `${name}.svg`);
  const output = path.join(assets, `${name}.png`);
  const image = sharp(input, { density: 220 }).resize({
    width,
    height,
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  });
  await image.png().toFile(output);
  return output;
}

async function removeWhiteBackground() {
  if (!fs.existsSync(reference)) return null;

  const { data, info } = await sharp(reference)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const distanceFromWhite = Math.sqrt(
      (255 - r) * (255 - r) +
      (255 - g) * (255 - g) +
      (255 - b) * (255 - b)
    );

    if (distanceFromWhite < 58) {
      data[i + 3] = 0;
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
    } else if (distanceFromWhite < 96) {
      const alpha = Math.round(((distanceFromWhite - 58) / 38) * 255);
      data[i + 3] = Math.max(0, Math.min(255, alpha));
    }
  }

  const output = path.join(assets, "latamsoft-original-transparent.png");
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
    .extend({
      top: 80,
      bottom: 80,
      left: 80,
      right: 80,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(output);
  return output;
}

async function main() {
  const jobs = [
    ["latamsoft-symbol-light", 1024, 1024],
    ["latamsoft-symbol-dark", 1024, 1024],
    ["latamsoft-isologo-light", 2400, null],
    ["latamsoft-isologo-dark", 2400, null],
    ["latamsoft-isologo-stacked-light", 1600, null],
    ["latamsoft-isologo-stacked-dark", 1600, null],
    ["latamsoft-favicon", 512, 512],
    ["latamsoft-avatar-light", 1024, 1024],
    ["latamsoft-avatar-dark", 1024, 1024],
    ["latamsoft-social-card-dark", 1200, 630],
    ["latamsoft-linkedin-cover-dark", 1584, 396],
    ["latamsoft-post-template-dark", 1080, 1080]
  ];

  const rendered = [];
  for (const [name, width, height] of jobs) {
    rendered.push(await renderSvg(name, width, height));
  }
  const transparent = await removeWhiteBackground();
  if (transparent) rendered.push(transparent);

  console.log(rendered.map((file) => path.relative(root, file)).join("\n"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
