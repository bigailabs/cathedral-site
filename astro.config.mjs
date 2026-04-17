import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://cathedral.computer',
  integrations: [tailwind()],
  output: 'static',

  vite: {
    server: { port: 4321 },
  },

  adapter: cloudflare()
})