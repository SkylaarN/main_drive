/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#3DD9B3",
          DEFAULT: "#3DD9B3",
        },
        red: "#FF7474",
        error: "#b80000",
        green: "#3DD9B3",
        blue: "#56B8FF",
        pink: "#EEA8FD",
        orange: "#F9AB72",
        light: {
          100: "#333F4E",
          200: "#A3B2C7",
          300: "#F2F5F9",
          400: "#F2F4F8",
        },
        dark: {
          100: "#04050C",
          200: "#131524",
        },
        primary: {
          DEFAULT: "#1C1C1E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E5E5E5",
          foreground: "#1C1C1E",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#737373",
        },
        accent: {
          DEFAULT: "#F5F5F5",
          foreground: "#1C1C1E",
        },
        destructive: {
          DEFAULT: "#FF3333",
          foreground: "#FFFFFF",
        },
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#1C1C1E",
        chart: {
          1: "#FFB86C",
          2: "#3DD9B3",
          3: "#1E3A8A",
          4: "#F59E0B",
          5: "#F43F5E",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",
        "drop-2": "0 8px 30px 0 rgba(65, 89, 214, 0.3)",
        "drop-3": "0 8px 30px 0 rgba(65, 89, 214, 0.1)",
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
};

module.exports = config;
