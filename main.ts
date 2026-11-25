import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fridge Roast: one line, 115 characters, no trailing newline.
const text =
  "My smart fridge updated its firmware at 3 a.m. and now it needs a restart before it will admit where the butter is.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
