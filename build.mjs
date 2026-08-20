import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

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

const viteBin = fileURLToPath(
  new URL(`./node_modules/.bin/vite${process.platform === "win32" ? ".cmd" : ""}`, import.meta.url),
);

await run(process.execPath, ["clean.mjs"]);
await run(process.execPath, ["generate.mjs"]);
await run(viteBin, ["build", ...process.argv.slice(2)]);
