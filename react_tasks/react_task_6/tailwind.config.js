/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   colors: {
  //     'back_portfolio':'rgb(84, 121, 149)',
  //   },
  // },
  theme: {
    extend: {
      colors: {
        back_portfolio: {
          DEFAULT: "#2F4050",
          light_text: "#E5E7E1",
          pink: "#DA7B93",
          green: "#376F70",
          light_green: "hsl(181, 46%, 55%)",
          dark_pink: "#2E151B",
        },
        pot_green: {
          DEFAULT: "#112D32"
        }
      },
    },
  },
  plugins: [],
};
