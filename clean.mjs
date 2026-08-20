import { rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

const targets = [".output", ".wrangler/deploy", "node_modules/.nitro/vite"];

await Promise.all(
  targets.map((target) =>
    rm(join(rootDir, target), {
      force: true,
      recursive: true,
    }),
  ),
);

console.log(`Cleaned build artifacts: ${targets.join(", ")}`);
