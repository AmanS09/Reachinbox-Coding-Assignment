/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
            ".no-scrollbar::-webkit-scrollbar": {
                display: "none",
            },
            ".no-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
            },
        };
        addUtilities(newUtilities);
    },
],
}

