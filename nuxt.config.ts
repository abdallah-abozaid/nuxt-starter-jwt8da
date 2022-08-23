import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,

    target: 'static',

    css: ['~/assets/scss/_variables.scss'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        exposeConfig: true,
    },
});
