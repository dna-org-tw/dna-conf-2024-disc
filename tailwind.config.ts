import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        figureMoveUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        figureMoveDownUp: {
          "0%, 100%": { transform: "translateY(-12px)" },
          "50%": { transform: "translateY(0)" },
        },
        messageBubbleMoveDownUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        weaponFadeInOut: {
          "0%, 100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "25%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "75%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
