import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://radiochi.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ca", "fr", "it", "de"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});