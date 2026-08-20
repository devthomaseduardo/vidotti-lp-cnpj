import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateSiteConfig } from "./config.mjs";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      env: process.env,
      shell: false,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

validateSiteConfig();

const tscBin = fileURLToPath(new URL("./node_modules/typescript/bin/tsc", import.meta.url));
const viteBin = fileURLToPath(new URL("./node_modules/vite/bin/vite.js", import.meta.url));

await run(process.execPath, ["clean.mjs"]);
await run(process.execPath, ["generate.mjs"]);
await run(process.execPath, [tscBin, "--noEmit"]);
await run(process.execPath, [viteBin, "build", ...process.argv.slice(2)]);
