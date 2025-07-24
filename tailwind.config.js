/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandcolor1: "#12F7D6",
        brandcolor2: "#98FAEC",
        colorwhite: " #FFFFFF",
        bg1color: "#292F36",
        bg2color: "#1A1E23",
        csscolor: "#0C73B8",
        graycolor: "#43454D",
        textColor: "#ddd"
      }
    },
  },
  plugins: [],
}

