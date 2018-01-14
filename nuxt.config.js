module.exports = {

  router: {
    middleware: ['i18n', 'auth']
  },
  generate: {
    routes: ['/', '/clientes', '/en', '/en/about']
  },
  plugins: ['~/plugins/i18n.js', '~/plugins/Graphql', '~/plugins/TraeClient','~plugins/buefy'],
  modules: [
    '@nuxtjs/font-awesome'
  ],
  css: [
    // Sass file in the project
    {src: '~assets/css/main.scss', lang: 'scss'} // scss instead of sass
  ],
  head: {
    title: 'Ana Maya',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    vendor: ['vue-i18n'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
