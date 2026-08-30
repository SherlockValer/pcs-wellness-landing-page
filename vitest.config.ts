import { defineConfig } from "vitest/config";

// Kept separate from vite.config.ts so the TanStack build plugins
// (which are not needed for pure-logic unit tests) never get involved.
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
