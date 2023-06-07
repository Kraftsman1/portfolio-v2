// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "Asigri Shamsu-Deen Al-Heyr | %s",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "MisFyts 3D" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: ["nuxt-icon", "@nuxtjs/sanity", "nuxt-typed-router", "@vueuse/motion/nuxt", "@nuxthq/ui"],
  plugins: [],
  // ssr: false,

  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2021-03-25",
  },

  devtools: {
    enabled: true,
  },
});
