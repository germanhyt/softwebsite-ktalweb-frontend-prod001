// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
// Vercel: no pongas "Output Directory" = dist en el panel; Astro usa Build Output API (.vercel/output).
export default defineConfig({
  base: "/",
  site: "https://ktalweb.com.pe",
  // Rutas /api/* en serverless; las páginas marcan prerender = true
  output: "server",
  adapter: vercel({
    // Evita empaquetados incompletos del serverless (entry.mjs faltante en /var/task) reportados con SSR en Vercel.
    imageService: true,
    // Límite real depende del plan Vercel (Hobby ~10s). Ajusta en el panel si aplica.
    maxDuration: 60,
  }),
  
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.pdf'],
  },

  integrations: [
    react(),
    sitemap({
      // filter: (page) => !page.includes("/admin/"), // Excluir
      // customPages: [
      //   "https://innovabcp2025.com/",
      //   "https://innovabcp2025.com/preguntas-frecuentes",
      // ],
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-06-27"),
    }),
  ],
});
