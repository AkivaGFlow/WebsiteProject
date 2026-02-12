import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        sm: "1200px",
        md: "1200px",
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "primary-text": "#1A1A2E",
        "secondary-text": "#4A4A68",
        "tertiary-text": "#6B6B82",
        "action-primary": "#1B6B4A",
        "action-primary-hover": "#155A3E",
        "bg-default": "#FFFFFF",
        "bg-contrast": "#F5F6F8",
        "bg-emphasis": "#F0F4F2",
        border: "#E2E4E9",
        "status-handled": "#1B6B4A",
        "status-transferred": "#5A6070",
        "trust-badge-bg": "#F8F9FA",
        "dark-bg": "#1A1A2E",
        "dark-bg-footer": "#141428",
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        xxl: "120px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "h1-mobile": ["32px", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.25", fontWeight: "600" }],
        "h2-mobile": ["24px", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3-mobile": ["18px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-mobile": ["16px", { lineHeight: "1.65", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1.5", fontWeight: "600" }],
        "button-mobile": ["15px", { lineHeight: "1.5", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
