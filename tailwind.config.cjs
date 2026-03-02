/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ngo: {
          blue: "#1E3A8A",
          gold: "#EAB308",
          green: "#22C55E",
          ink: "#1E293B",
          mist: "#F8FAFC",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        "ngo-soft": "0 8px 30px rgba(30, 58, 138, 0.18)",
        "ngo-card": "0 14px 45px rgba(0, 0, 0, 0.08)",
        "ngo-float": "0 24px 70px rgba(0, 0, 0, 0.18)",
        glass: "0 10px 40px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(5,18,44,0.82) 8%, rgba(30,58,138,0.5) 58%, rgba(234,179,8,0.24) 100%)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
