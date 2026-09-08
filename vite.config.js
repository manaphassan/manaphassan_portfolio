import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  // Relative base allows seamless hosting on GitHub pages under any subdirectory
  base: './',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'mywork',
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: false
  }
});
