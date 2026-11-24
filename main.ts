import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of memory: someone loaded the entire customer database into a dropdown. Please restart the app and have a word with them.";

mkdirSync("/output", { recursive: true });
// Write through a temp file and rename, so a concurrent reader never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
