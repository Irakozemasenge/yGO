/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        sans: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow-yellow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "glow-yellow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(250,204,21,0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(250,204,21,0.5)" },
        },
      },
    },
  },
  plugins: [],
};
