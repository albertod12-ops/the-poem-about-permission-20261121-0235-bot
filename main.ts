import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const TEXT = `The Keys

Can I drive? I asked.
He put the keys in my hand
and sat beside me,
both feet on the floor,
braking at nothing.

The road was empty.
At the first turn I stalled.
He did not reach over.
His hands stayed in his lap.

I turned the key again
and drove us home, slow.`;

const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) rmSync(OUT + "/" + f, { recursive: true, force: true });
writeFileSync(OUT + "/entry.txt", TEXT, "utf8");
