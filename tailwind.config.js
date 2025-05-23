/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./routes/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#32465a',    // Ton bleu personnalisé
        secondary: '#1e3a8a',  // Un autre exemple
        navColor:'#5C5D8F',
      },
      fontFamily: {
    inter: ["Inter_400Regular", "sans-serif"],
    'inter-semibold': ["Inter_600SemiBold", "sans-serif"],
  },
    },
  },
  plugins: [],
}