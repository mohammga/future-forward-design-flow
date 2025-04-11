
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Black and white color palette
        background: '#FFFFFF',
        foreground: '#000000',
        primary: {
          DEFAULT: '#000000',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          foreground: '#000000'
        },
        accent: {
          DEFAULT: '#E0E0E0',
          foreground: '#000000'
        },
        border: '#D3D3D3',
        input: '#F0F0F0'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
