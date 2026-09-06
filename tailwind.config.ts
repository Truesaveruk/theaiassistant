import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paper and ink. Cool, slightly green — a rating sheet, not a mood board.
        paper: "#FFFFFF",
        panel: "#EFF1EC",
        rule: "#D6DAD1",
        ink: "#14201C",
        muted: "#5C6660",
        pine: "#1F4034",

        // Signal colours. These are NOT decoration — they encode the ratings
        // (Low / Medium / High, Beginner / Intermediate / Advanced) consistently
        // everywhere they appear on the site.
        signalHigh: "#2D6A4F",
        signalMid: "#9A6212",
        signalLow: "#9B2C2C",
        signalHighBg: "#E3EEE7",
        signalMidBg: "#F5EDDC",
        signalLowBg: "#F4E3E3",
      },
      fontFamily: {
        sans: ["'Archivo Variable'", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1080px" },
      letterSpacing: { tightest: "-0.035em" },
    },
  },
  plugins: [],
};
export default config;
