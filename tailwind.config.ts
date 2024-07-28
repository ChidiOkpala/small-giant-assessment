import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "app-header": "0px 2px 16px 0px #0000001F"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-bg": "url('/banner-bg.png')",
        "mobile-banner-bg": "url('/mobile-banner-bg.png')"
      },
      colors: {
        primary: "#4C1D95",
      }
    },
  },
  plugins: [],
};
export default config;
