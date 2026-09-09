import { defineConfig, type PluginOption } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Standalone TanStack Start config.
// The TanStack Start server entry is src/server.ts (our SSR error wrapper).
export default defineConfig(async (env) => {
  const plugins: PluginOption[] = [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })];

  // Package the server build with Nitro. Choose the target preset from the
  // environment so the same repo deploys to either host:
  //   - Vercel builds set VERCEL=1 → Nitro's "vercel" serverless preset.
  //   - Everything else defaults to Cloudflare Workers.
  if (env.command === "build") {
    const { nitro } = await import("nitro/vite");
    const deployPreset = process.env.VERCEL === "1" ? "vercel" : "cloudflare-module";
    plugins.push(nitro({ defaultPreset: deployPreset }));
  }

  plugins.push(
    ...tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
  );
  plugins.push(react());

  return {
    server: { host: "::", port: 8080 },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins,
  };
});
