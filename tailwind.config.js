/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        lab: {
          bg: '#050a0f',
          surface: '#0a1520',
          panel: '#0d1e2e',
          border: '#1a3a5c',
          accent: '#00d4ff',
          glow: '#0099cc',
          volt: '#f0c040',
          amp: '#40e0a0',
          ohm: '#ff6060',
          muted: '#4a7a9b',
          text: '#c8e8f8',
        }
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-volt': '0 0 20px rgba(240, 192, 64, 0.4)',
        'glow-amp': '0 0 20px rgba(64, 224, 160, 0.4)',
        'panel': '0 4px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 212, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 4s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.9' },
          '97%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
