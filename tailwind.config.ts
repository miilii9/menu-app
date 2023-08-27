import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        mxs: "355px",
        msm: "480px",
        mmd: "768px",
        mlg: "1024px",
        temp: "1300px",
        "2xl": "1600px",
        // ...defaultTheme.screens,
      },
    },
    screens: {
      mxs: { max: "480px" },
      msm: { min: "481px", max: "768px" },
      mmd: { min: "769px", max: "1024px" },
      mlg: { min: "1025px", max: "1200px" },
      temp: { min: "1200px", max: "1440px" },
      "2xl": "1441px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
