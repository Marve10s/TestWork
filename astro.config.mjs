// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@assets': path.resolve('./src/assets'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@data': path.resolve('./src/data'),
        '@types': path.resolve('./src/types')
      }
    }
  }
});