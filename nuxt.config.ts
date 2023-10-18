import { NuxtConfig } from "nuxt/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "@mdi/font/css/materialdesignicons.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],
  plugins: ["~/plugins/pinia", "~/plugins/mitt"],
  layouts: {
    default: "default-layout",
  },
  build: {
    transpile: ["vuetify"],
  },
  target: "static",
  routeRules: {
    "/**": { ssr: false },
    // this page will be generated on demand and then cached permanently
    "/static": { isr: true },
    // this page is generated at build time and cached permanently
    "/prerendered": { prerender: true },
    // this page will be always fresh
    "/dynamic": { isr: false },
  },
} as NuxtConfig);
