import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'avenir': ['var(--font-lato)'],
      'newsreader': ['var(--font-newsreader)','serif'],
      'pt_sans': ['var(--font-ptsans)']
    },
    extend: {
      colors: {
        'gray': '#817466',
        'light-gray': "#7c7978",
        'dark-gray': '#231f20',
        'primary-300': '#ecc657',
        'primary-500': '#fecc40',
        'primary-700': '#e0b33b',
        'secondary-100': '#e5ecf7',
        'secondary-500': '#178acb',
        'green-200': '#eff9e8',
        'green-400': "#b4ca9e",
        'green-500': '#799d4f'
      },
      backgroundImage: {
        "hero": "url('../public/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
