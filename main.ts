import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `The Wind

He wound it every morning,
thirty years, thumb and finger,
before the kettle.

Now his hands shake.
Wind it for me, he says,
and holds the watch out.

I turn the crown till it stops,
then set it back on his wrist.
It ticks on his pulse.
He is the one keeping time.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
