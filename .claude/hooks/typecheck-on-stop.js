// Stop hook: run `npm run typecheck`; on failure exit 2 with the output on
// stderr so Claude keeps working and fixes the errors.
// Skips when stop_hook_active is true to avoid an infinite stop loop.
const { spawnSync } = require("child_process");
const path = require("path");

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (raw += chunk));
process.stdin.on("end", () => {
  let input = {};
  try {
    input = raw.trim() ? JSON.parse(raw) : {};
  } catch {
    // Unparseable input: don't block Claude.
    process.exit(0);
  }
  if (input.stop_hook_active) process.exit(0);

  const cwd =
    process.env.CLAUDE_PROJECT_DIR || path.resolve(__dirname, "..", "..");
  const result = spawnSync("npm run typecheck", {
    cwd,
    shell: true, // npm is npm.cmd on Windows
    encoding: "utf8",
  });

  if (result.status === 0) process.exit(0);

  process.stderr.write(
    "npm run typecheck failed. Fix these TypeScript errors:\n" +
      (result.stdout || "") +
      (result.stderr || "") +
      (result.error ? String(result.error) : "")
  );
  process.exit(2);
});
