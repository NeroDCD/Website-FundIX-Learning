/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00df9a",
        primarydark: "#00c47a",
        background: "#000300",
        scrollbarThumb: "#00df9a", // Custom scrollbar thumb color
        scrollbarTrack: "#000300" // Custom scrollbar track color (black)
      },
      animation: {
        glow: "glowAnimation 5s ease-in-out infinite"
      },
      keyframes: {
        glowAnimation: {
          "0%": { textShadow: "0 0 10px rgba(0, 223, 154, 0.8)" },
          "50%": { textShadow: "0 0 20px rgba(0, 223, 154, 0.5)" },
          "100%": { textShadow: "0 0 10px rgba(0, 223, 154, 0.8)" }
        }
      },
      width: {
        button: "200px"
      },
      maxWidth: {
        custom: "1240px"
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".scrollbar": {
          scrollbarWidth: "thin",
          scrollbarColor: "#00df9a #000300"
        },
        ".scrollbar::-webkit-scrollbar": {
          width: "15px"
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "#000300"
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          background: "#00df9a",
          borderRadius: "10px"
        },
        ".scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#00c47a"
        }
      });
    }
  ]
};
