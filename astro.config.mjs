import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "url";

export default defineConfig({
  site: "https://techhilfepro.de",
  output: "static",
  build: { format: "file" },
  integrations: [
    tailwind({ configFile: "./tailwind.config.mjs", applyBaseStyles: true }),
    mdx(),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});
