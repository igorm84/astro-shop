import { defineConfig } from "astro/config";

import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({ include: { mdi: ["github", "chevron-left"] } })],
  vite: {
    plugins: [tailwindcss()],
  },
});
