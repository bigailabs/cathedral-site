/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        border: 'var(--border)',
        borderSoft: 'var(--border-soft)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        dim: 'var(--dim)',
        accent: 'var(--accent)',
        accentDim: 'var(--accent-dim)',
        warn: 'var(--warn)',
        warnDim: 'var(--warn-dim)',
        err: 'var(--err)',
        errDim: 'var(--err-dim)',
        ok: 'var(--ok)',
        okDim: 'var(--ok-dim)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
