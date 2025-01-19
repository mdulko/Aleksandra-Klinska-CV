import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#120F0C",
        brown: "#746A69",
        red: "#EC3737",
        gray: "#B8B8B8",
        white: "#F0ECEC",
        pureWhite: "#ffffff",
      },
    },
  },
  plugins: [],
} satisfies Config;
