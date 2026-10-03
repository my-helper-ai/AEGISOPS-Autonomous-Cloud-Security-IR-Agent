/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aegis: {
          bg: '#070b14',
          panel: '#0d1424',
          panel2: '#111a2e',
          border: '#1e293b',
          accent: '#22d3ee',
          good: '#34d399',
          warn: '#fbbf24',
          bad: '#f87171',
          crit: '#ef4444',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}
