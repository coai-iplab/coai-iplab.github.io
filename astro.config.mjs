// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import rehypeBaseLinks from './src/lib/rehype-base-links.mjs';

const basePath = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://coai-iplab.github.io',
  base: basePath,
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [[rehypeBaseLinks, basePath]]
  },

  integrations: [react()]
});