import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#020103",
          900: "#020103",
          800: "#0a0810",
          700: "#14111c",
          600: "#1c1828",
          500: "#271C32",
        },
        accent: {
          DEFAULT: "#504DFF",
          blue: "#504DFF",
          purple: "#854CFF",
        },
        surface: {
          DEFAULT: "#FAFAFA",
          muted: "#EEEEEE",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Power Grotesk", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Nunito", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw + 1rem, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw + 1rem, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2.2vw + 1rem, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        glow: "0 20px 80px -20px rgba(80, 77, 255, 0.35)",
        soft: "0 10px 40px -12px rgba(2, 1, 3, 0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(80,77,255,0.18), transparent)",
        "accent-gradient":
          "linear-gradient(135deg, #504DFF 0%, #854CFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "float-slow": "floatSlow 14s ease-in-out infinite",
        "float-slower": "floatSlow 22s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)", filter: "blur(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
