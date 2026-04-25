import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'hhttps://roby-dev.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
