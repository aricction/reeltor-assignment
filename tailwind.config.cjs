/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enable dark mode via class
    theme: {
      extend: {
        colors: {
          light50: "#FBFBFB",
          light100: "#E8F9FF",
          light200: "#C4D9FF",
          dark50: "#9290C3",
          dark100: "#535C91",
          dark200: "#1B1A55",
          dark300: "#070F2B",
        },
      },
    },
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [],
  };
  