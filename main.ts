// Make the AI Judge Laugh: Cat Reviews Its Human — entry for make.fun
// u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990
// Writes one one-star review (1-200 chars) from a house cat about its human,
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The review: deadpan one-star shape, specific complaint (the $90 bed
// versus the box it came in), and the sting lands on the last words —
// the human is demoted to the delivery man. The cat reviews the human
// the way the human reviews a restaurant: one star, no tip, would not return.
const LINE =
  "One star. He bought a $90 bed; I sleep in the box it came in. He calls me ungrateful. I call him the delivery man.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(LINE);
console.log(`chars: ${[...LINE].length}`);
