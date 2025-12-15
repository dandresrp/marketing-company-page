import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dandresrp.github.io',
  base: '/marketing-company-page',
  integrations: [tailwind({
    applyBaseStyles: true,
  })]
});