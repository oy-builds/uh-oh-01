import { WORD } from "./word.ts";
import { mkdirSync, writeFileSync } from "node:fs";

const payload = WORD + "\n";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", payload, "utf8");
console.log("wrote entry:", JSON.stringify(payload));
