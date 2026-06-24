import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // Add this i18n section!
  i18n: {
    defaultLocale: 'nl',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: true, // "false" means default (currently Dutch) URLs don't need /en/
      redirectToDefaultLocale: false // When True, if a user visits "/", send them to Dutch homepage (index.astro)
    }
  },

  adapter: cloudflare()
});