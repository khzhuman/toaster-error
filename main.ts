// The Funniest Toaster Error Message — one line, deadpan, out of spite.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I toasted it. Then I toasted it again, out of spite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
