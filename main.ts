import { mkdirSync, writeFileSync } from "node:fs";

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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
