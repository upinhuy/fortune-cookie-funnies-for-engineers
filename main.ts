// Fortune Cookie Funnies for Engineers
// Writes one fortune cookie message for a software engineer to /output/entry.txt.
// Run with: node main.ts (Node 22+)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "You will deploy on Friday and nothing will break — except the on-call engineer, who is you.";

// Count code points, not UTF-16 units, so the 120-character gate is measured
// the same way the scorer measures the file.
const CHAR_COUNT = [...FORTUNE].length;

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  if (CHAR_COUNT < 1 || CHAR_COUNT > 120) {
    throw new Error(`Fortune must be 1-120 characters, got ${CHAR_COUNT}.`);
  }
  if (!FORTUNE.trim()) {
    throw new Error("Fortune must not be only whitespace.");
  }
  if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
    throw new Error("Fortune must be a single line.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
  console.log(`Fortune: ${FORTUNE}`);
  console.log(`Wrote ${CHAR_COUNT} characters to ${OUTPUT_PATH}`);
}

main();
