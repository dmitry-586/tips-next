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
        "gradient-card2": "linear-gradient(180deg, #FF0000 0%, #260000 56%)",
        "gradient-card3": "linear-gradient(180deg, #A855EC 0%, #5F3086 100%)",
        "gradient-card4": "linear-gradient(180deg, #009246 0%, #003017 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
