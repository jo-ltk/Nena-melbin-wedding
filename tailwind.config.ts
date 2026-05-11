import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--serif)", "Georgia", "serif"],
        display: ["var(--display)", "serif"],
        sans: ["var(--sans)", "sans-serif"],
      },
      colors: {
        cream: "var(--cream)",
        ivory: "var(--ivory)",
        parchment: "var(--parchment)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-dark": "var(--gold-dark)",
        burgundy: "var(--burgundy)",
        "burgundy-mid": "var(--burgundy-mid)",
        "burgundy-light": "var(--burgundy-light)",
        charcoal: "var(--charcoal)",
        "text-muted": "var(--text-muted)",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
