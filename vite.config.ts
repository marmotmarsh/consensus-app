import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVue3Resolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVue3Resolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5273',
        changeOrigin: true,
        secure: false,
        // ws: true,
        // rewrite: (path) => {
        //   console.log('What is', path);
        //   return path.replace(/^\/api/, '');
        // },
      },
    },
  },
});
