import { mkdirSync, writeFileSync } from "node:fs";

// One text from the future self, under 200 characters: the setup sounds
// responsible (finally reading the terms), the payoff is absurd (we owe
// a goat). No context needed, no wasted words, fresh angle.
const LINE =
  "Future you here: I finally read the terms and conditions. Turns out we owe a goat.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
