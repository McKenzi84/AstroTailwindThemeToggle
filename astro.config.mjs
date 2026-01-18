// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://mckenzi84.github.io/AstroTailwindThemeToggle",
  vite: {
    plugins: [tailwindcss()],
  },
});
