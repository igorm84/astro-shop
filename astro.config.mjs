import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ["github", "arrow-left", "chevron-down", "close", "plus", "minus"],
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 600"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
