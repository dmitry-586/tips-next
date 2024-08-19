import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my-gradient": "linear-gradient(180deg, #990000 0%, #FFB800 100%)",
        "my-gradient2":
          "linear-gradient(270.02deg, #ff9900 0.02%, #ee5600 99.98%)",
        "gradient-card2": "linear-gradient(180deg, #FF0000 0%, #260000 56%)",
        "gradient-card3": "linear-gradient(180deg, #A855EC 0%, #5F3086 100%)",
        "gradient-card4": "linear-gradient(180deg, #009246 0%, #003017 100%)",
      },
    },
    screens: {
      sm: { max: "560px" },
      md: { max: "767px" },
      lg: { max: "960px" },
      xl: { max: "1440px" },
      xxl: { max: "1880px" },
    },
  },
  plugins: [],
};

export default config;
