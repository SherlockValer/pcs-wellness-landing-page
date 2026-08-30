import { defineConfig, type PluginOption } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Standalone TanStack Start config.
// The TanStack Start server entry is src/server.ts (our SSR error wrapper).
export default defineConfig(async (env) => {
  const plugins: PluginOption[] = [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })];

  // Package the server build with Nitro (Cloudflare Workers target by default;
  // set an explicit preset to deploy elsewhere, e.g. nitro({ preset: "node-server" })).
  if (env.command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ defaultPreset: "cloudflare-module" }));
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
