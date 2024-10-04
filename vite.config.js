import { defineConfig } from 'vite';

export default defineConfig({
    base: '/portfolio/',
    build: {
        rollupOptions: {
        input: {
            main: './index.html',
            projects: './src/projects.html',  // Make sure to include this
        },
      },
    },
  });

