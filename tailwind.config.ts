import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Version-specific colours are added here as each design brief is built.
        // Use a two-letter prefix per version to avoid conflicts.
        //
        // Example (added when Version A brief is applied):
        //   "va-accent": "#C75B2A",
        //   "va-accent-hover": "#A84D24",
        //   "va-bg": "#FFFFFF",
        //   "va-bg-alt": "#F9F8F6",
        //   "va-border": "#E8E4DE",
      },
    },
  },
  plugins: [],
};

export default config;
