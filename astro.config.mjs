// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://techhilfepro.de',
  output: 'static',
  build: { format: 'file' }, // genera /index.html, /senioren/index.html, etc.
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
