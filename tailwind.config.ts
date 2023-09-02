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
        "hot-pink": "#FF10F0",
      },
      fontFamily: {
        poe: ["Poetsen One", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "bg-fire": "url('/fire.png')",
      },
    },
  },
  plugins: [],
};
export default config;
