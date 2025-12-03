/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "axionchat": {
          primary: "#63a8f1ff",      // Modern indigo-blue
          secondary: "#5c9cf6ff",    // Purple accent
          accent: "#06b6d4",       // Cyan highlight
          dark: "#0f172a",         // Deep slate
        },
      },
      backgroundImage: {
        'axionchat-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'axionchat-gradient-radial': 'radial-gradient(circle at top right, #6366f1, #8b5cf6)',
      },
    },
  },
  plugins: [],
};
