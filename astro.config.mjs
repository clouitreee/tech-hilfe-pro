// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://techhilfepro.de",
  output: "static",
  build: { format: "file" },
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs", // <— nombre correcto
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap(),
  ],
});
