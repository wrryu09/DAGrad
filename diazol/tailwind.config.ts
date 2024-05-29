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
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translate(-1000%)" },
          "100%": { transform: "translate(500%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        moveMorse: "moveRight 3s linear 1",
        rotateSpinner: "rotate 3s linear infinite",
      },
      colors: {
        diazolRed: "#ff0000",
        lightGrey: "#E8E8E8",
        midGrey: "#929292",
        darkGrey: "#3C3C3C",
      },
    },
  },
  plugins: [],
};
export default config;
