import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#c7fff3",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2E7D32", // Forest Green
          foreground: "#ffffff",
          hover: "#1B5E20", // Darker green for hover
        },
        secondary: {
          DEFAULT: "#64B5F6", // Sky Blue
          foreground: "#ffffff",
          hover: "#42A5F5", // Darker blue for hover
        },
        // Change to use our new colors
        green: {
          light: "#c7fff3", // Light Green - updated to match background
          DEFAULT: "#2E7D32", // Forest Green
          dark: "#1B5E20", // Darker green
        },
        blue: {
          DEFAULT: "#64B5F6", // Sky Blue
          dark: "#42A5F5", // Darker blue
        },
        gray: {
          light: "#E0E0E0", // Soft Gray
          DEFAULT: "#9E9E9E",
          dark: "#616161",
        },
        warning: "#E53935", // Red Orange
        text: "#4E342E", // Dark Brown
        destructive: {
          DEFAULT: "#E53935", // Red Orange
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#9E9E9E", // Medium Gray
          foreground: "#4E342E", // Dark Brown
        },
        accent: {
          DEFAULT: "#C8E6C9", // Light Green
          foreground: "#4E342E", // Dark Brown
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#4E342E", // Dark Brown
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#4E342E", // Dark Brown
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

