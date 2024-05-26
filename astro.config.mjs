import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['svelte']
    }
  },
  base: '/',
});
