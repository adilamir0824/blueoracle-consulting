import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#F0FBFC",
          100: "#D6F5F9",
          200: "#AEECF3",
          300: "#7EE8F2",
          400: "#5DDDEB",
          500: "#4DD6E7", // logo bars
          600: "#2BB8C9",
          700: "#2294A3",
        },
        teal: {
          400: "#6A9AA2",
          500: "#4F868E", // logo "CONSULTING"
          600: "#3D6B72",
          700: "#2F5459",
          800: "#1E3A40",
          900: "#142A30",
          950: "#0B1A1E",
        },
        // gold-* classes map to logo cyan
        gold: {
          400: "#5DDDEB",
          500: "#4DD6E7",
          600: "#2BB8C9",
        },
        // navy-* classes map to deep teal for dark sections
        navy: {
          950: "#0B1A1E",
          900: "#142A30",
          800: "#1E3A40",
          700: "#2F5459",
          600: "#3D6B72",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
