import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
  },
  publicRuntimeConfig: {
    WP_REST_API_BASE_URL: process.env.WP_REST_API_BASE_URL,
    WP_USER_NAME: process.env.WP_USER_NAME,
    WP_USER_PASSWORD: process.env.WP_USER_PASSWORD
  }
})
