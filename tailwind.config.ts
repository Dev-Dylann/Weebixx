import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#131316",
        },
        accent: "#e3b3ff",
        overlay: {
          light: "rgba(255, 255, 255, 0.6)",
          dark: "rgba(0, 0, 0, 0.6)",
        },
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
