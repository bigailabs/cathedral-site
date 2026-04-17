/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#0f0f10',
        border: '#1a1a1c',
        fg: '#e4e4e7',
        muted: '#8a8a93',
        dim: '#52525b',
        accent: '#0A84FF',
        accentDim: '#0A84FF33',
        warn: '#f59e0b',
        err: '#ef4444',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
