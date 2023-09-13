/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-pastel': '#F2C4BC',
        'green-pastel': '#99D4B4',
        'green-pastel-accent': '#7AC8A0',
        pink: '#FF1493',
        'pink-pastel': '#F8BCD6',
        'pink-pastel-accent': '#F9A7CB',
        skyblue: '#00BFFF',
        'skyblue-pastel': '#B5D9F1',
        'skyblue-pastel-accent': '#9FCDE7',
        violet: '#646cff',
        'cloudy-white': '#F0F0F0',
      },
    },
  },
  plugins: [],
};
