module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        mainbgColor: '#cbe9ff',
        mainColor: '#027be9',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
