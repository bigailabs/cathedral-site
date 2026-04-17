/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        dim: 'var(--dim)',
        accent: 'var(--accent)',
        accentDim: 'var(--accent-dim)',
        warn: 'var(--warn)',
        err: 'var(--err)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
