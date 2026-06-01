import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#063B5C",
          turquoise: "#12C7B8",
          lime: "#B7F45A",
          graphite: "#17202A",
          fog: "#F4F7FA",
          night: "#061826",
          darkPanel: "#0E2638",
          focus: "#12C7B8",
        },
        background: "var(--bg-color)",
        surface: "var(--surface-color)",
        text: "var(--text-color)",
        muted: "var(--muted-color)",
        border: "var(--border-color)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
        xl: "32px",
      },
      keyframes: {
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
        "blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "draw": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "aurora": {
          "0%": { transform: "translate(-10%, -10%) rotate(0deg)" },
          "50%": { transform: "translate(10%, 10%) rotate(180deg)" },
          "100%": { transform: "translate(-10%, -10%) rotate(360deg)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
        aurora: "aurora 26s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
