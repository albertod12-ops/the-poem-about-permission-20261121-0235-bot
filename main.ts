import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const TEXT = `The Keys

Can I drive? I asked.
He pressed the keys in my hand
and sat beside me,
both feet on the floor,
braking at nothing.

My hands shook on the wheel.
At the first light I stalled.
A car waited behind.
He did not reach over.

I turned the key again
and drove home in first.`;

const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT, { recursive: true });
for (const f of readdirSync(OUT)) rmSync(OUT + "/" + f, { recursive: true, force: true });
writeFileSync(OUT + "/entry.txt", TEXT, "utf8");
