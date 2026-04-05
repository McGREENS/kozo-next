import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, basename } from "path";

const publicDir = "./public";
const extensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

const files = readdirSync(publicDir).filter((f) =>
  extensions.includes(extname(f))
);

for (const file of files) {
  const input = join(publicDir, file);
  const name = basename(file, extname(file));
  const output = join(publicDir, `${name}.webp`);
  const before = statSync(input).size;

  try {
    await sharp(input).webp({ quality: 82 }).toFile(output);
    const after = statSync(output).size;
    const saving = (((before - after) / before) * 100).toFixed(0);
    console.log(`✓ ${file} → ${name}.webp  (${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB, -${saving}%)`);
  } catch (e) {
    console.log(`✗ skipped ${file} — ${e.message}`);
  }
}
