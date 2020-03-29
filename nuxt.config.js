require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fitness Challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/buttons.css', '~/assets/css/typography.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    `~/plugins/importGlobalComponents.js`,
    '~/plugins/vuelidate.js',
    '~/plugins/dateFilter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false
  },
  purgeCSS: {
    whitelist: ['']
  },
  webfontloader: {
    google: {
      // Loads Open Sans font with weights 300 and 400 + display font as swap
      families: ['Source+Sans+Pro:400,400i,600,700&display=swap']
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    'nuxt-webfontloader',
    '@nuxtjs/moment'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://fitness-challenger-staging.herokuapp.com',
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
