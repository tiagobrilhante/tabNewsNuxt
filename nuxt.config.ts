// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    modules: [
      '@nuxt/eslint',
      '@nuxt/fonts',
      '@nuxt/icon',
      '@nuxt/image',
      '@nuxt/scripts',
      '@nuxt/test-utils',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/i18n',
      '@vueuse/nuxt',
      'vuetify-nuxt-module'
    ],
    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'pt-br', language: 'pt-BR' }
        ],
        defaultLocale: 'pt-br',
    },
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions: {
            /* vuetify options */
        }
    }
})