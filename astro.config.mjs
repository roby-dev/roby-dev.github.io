import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://roby-dev.up.railway.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
