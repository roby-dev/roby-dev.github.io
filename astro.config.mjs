import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // site: 'https://roby-dev.github.io', // Actualiza esto con tu dominio de Railway cuando lo tengas
  vite: {
    plugins: [tailwindcss()],
  },
});
