module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
         'light':{
          '50': ' #f6faf3',
          '100': ' #e1f0d7',
          '200': ' #c2e1ae',
          '300': ' #99ca7e',
          '400': ' #71ad54',
         },
        'dark': {
          '50': ' #9290C3',
          '100': ' #535C91',
          '200': ' #1B1A55',
          '300': ' #070F2B',
        },
        },
      },
    },
    darkMode: "media", // Enable dark mode based on system preference
    plugins: [],
  };
  