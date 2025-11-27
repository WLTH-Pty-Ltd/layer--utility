// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],
  runtimeConfig: {
    name: 'layer--utility',
    version: {
      version: 'v2.0.0',
      fatal: true,
      breakingChanges: true,
    }
  }
})