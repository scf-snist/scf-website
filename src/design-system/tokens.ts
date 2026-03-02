export const designSystem = {
  colors: {
    primary: "#1E3A8A",
    secondary: "#EAB308",
    accent: "#22C55E",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#1E293B",
  },
  shadows: {
    soft: "0 8px 30px rgba(30, 58, 138, 0.18)",
    card: "0 14px 45px rgba(0, 0, 0, 0.08)",
    float: "0 24px 70px rgba(0, 0, 0, 0.18)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4.5rem",
  },
  radius: {
    sm: "0.4rem",
    md: "0.65rem",
    lg: "1rem",
    xl: "1.4rem",
    pill: "999px",
  },
  typography: {
    display: "clamp(2.2rem, 5vw, 4.4rem)",
    h1: "clamp(1.8rem, 4vw, 3rem)",
    h2: "clamp(1.55rem, 3vw, 2.3rem)",
    body: "clamp(1rem, 1.4vw, 1.08rem)",
    caption: "0.875rem",
  },
} as const
