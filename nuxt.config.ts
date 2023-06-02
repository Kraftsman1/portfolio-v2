// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "iamdeen",
      titleTemplate: "Asigri Shamsu-Deen Al-Heyr | Portfolio",
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

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/sanity"],
  plugins: [],
  // ssr: false,
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    // withCredentials: true,
    apiVersion: "2021-10-21",
  },

  devtools: {
    enabled: true,
  },
});