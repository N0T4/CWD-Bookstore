import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    format: 'directory',
    rollupOptions: {
      external: ['svelte'],
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'assets/[name].js',
          entryFileNames: 'assets/[name].js',
        },
      },
    },
  },
  base: './', 
});
