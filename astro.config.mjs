import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: [
          "github",
          "chevron-left",
          "chevron-right",
          "chevron-down",
          "arrow-right",
          "shopping-outline",
          "close",
          "plus",
          "minus",
          "trash-can-outline",
          "truck-fast-outline",
          "autorenew",
          "shield-check-outline",
          "leaf",
          "check",
          "camera-outline",
        ],
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["300 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Serif",
      cssVariable: "--font-instrument",
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
