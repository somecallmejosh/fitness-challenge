import axios from 'axios'
require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    baseURL: 'https://fitness-challenger-staging.herokuapp.com',
    authBaseURL: 'https://fitness-backend-prod.herokuapp.com/',
    siteName: 'Fitness Challenge'
  },
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
      },
      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'Fitness Challenge'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        name: 'og:site_name',
        content: 'Fitness Challenge'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/baseline.css',
    '~/assets/css/buttons.css',
    '~/assets/css/forms.css',
    '~/assets/css/typography.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/dateFilter.js', `~/plugins/importGlobalComponents.js`],
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
    whitelist: ['bg-red-100']
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
    '@nuxtjs/moment',
    '@nuxtjs/auth'
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
    proxyHeaders: false,
    credentials: false
  },
  /*
   ** Nuxt Auth module configuration
   ** See https://auth.nuxtjs.org/
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'https://fitness-backend-prod.herokuapp.com/login',
            method: 'post',
            propertyName: false
          },
          logout: {
            url: 'https://fitness-backend-prod.herokuapp.com/me',
            method: 'delete'
          },
          user: {
            url: 'https://fitness-backend-prod.herokuapp.com/me',
            method: 'get',
            propertyName: 'user'
          }
        },
        // tokenRequired: true,
        tokenType: '',
        autoFetchUser: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    fallback: true,
    async routes() {
      const challenges = await axios
        .get('https://fitness-challenger-staging.herokuapp.com/challenges.json')
        .then((response) => {
          return response.data.data.map(
            (entry) => `challenges/${entry.type}/${entry.attributes.slug}/`
          )
        })

      return [...challenges]
    }
  }
}
