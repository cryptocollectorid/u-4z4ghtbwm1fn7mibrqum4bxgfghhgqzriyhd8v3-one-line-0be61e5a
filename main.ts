import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, at most 140 characters.
// The gate requires /output/entry.txt to be UTF-8 text of 1-140 chars.
const line =
  "I asked ChatGPT to write my resignation letter. It quit first.";

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
