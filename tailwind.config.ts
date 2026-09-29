import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d12",
        panel: "#111827",
        ink: "#f3f4f6",
        accent: "#ff9f43",
        mint: "#7ef9a6",
        violet: "#8b5cf6",
        rose: "#ff5ea8",
        warning: "#facc15",
      },
      boxShadow: {
        pixel: "4px 4px 0 rgba(0,0,0,0.45)",
      },
      fontFamily: {
        display: ["'Press Start 2P'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(255,159,67,0.32), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
