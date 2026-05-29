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
        },
        background: "var(--bg-color)",
        surface: "var(--surface-color)",
        text: "var(--text-color)",
        muted: "var(--muted-color)",
        border: "var(--border-color)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
      }
    },
  },
  plugins: [],
};
export default config;