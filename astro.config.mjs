import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://cathedral.computer',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    server: { port: 4321 },
  },
})
