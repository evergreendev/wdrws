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
        'dark-gray': '#231f20',
        'primary-500': '#fecc40',
        'secondary-100': '#e5ecf7',
        'secondary-500': '#178acb',
        'green-500': '#799d4f'
      },
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
