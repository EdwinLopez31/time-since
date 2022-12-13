/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        script: ["Great Vibes", "cursive"],
      },
      colors: {
        "time-since": {
          black: "#1A1A1A",
          white: "#EAEAEA",
          "dark-brown": "#1E1C1B",
        },
      },
    },
  },
  plugins: [],
};
