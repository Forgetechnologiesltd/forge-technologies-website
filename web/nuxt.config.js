import colors from 'vuetify/es5/util/colors'
import { groq } from '@nuxtjs/sanity'
import sanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const routesQuery = groq`
  {
    "pages": *[_type == "page" && defined(slug.current)],
    "blogPosts": *[_type == "post" && defined(slug.current)]
  }
`

export default async () => {
  const siteSettings = await sanityClient.fetch('*[_type == "siteSettings"][0]')

  return {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'server',

    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      titleTemplate: '%s | Forge Technologies',
      title: siteSettings.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: siteSettings.openGraph.title
            ? siteSettings.openGraph.title
            : '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: siteSettings.openGraph.description
            ? siteSettings.openGraph.description
            : '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: siteSettings.openGraph.image
            ? builder.image(siteSettings.openGraph.image).url()
            : '',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
      ],
      link: [{ rel: 'manifest', href: '/site.webmanifest' }],
      link: [
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    },
    // privateRuntimeConfig: {
    //   sanity: {
    //     token: 'sknaKCAsJ4llyA1P7Rytef0y6ZIQJGrXlH3HVTWmZsZVKzZuMX12d5IWEnKLeLJOf7CsB1MaxHX8RMVgIo1R3jawpG91xItzVCH7x2taKWkiffO2EC04gVvg9ekY6umhLP54VvNstNH6jW9Py6UbiyYCo7PBrIAkLDX5aRQWCGI4AkfLWZvd',
    //   },
    // },
    sanity: {
      projectId: 'pyzze960',
      dataset: 'production',
      useCdn: true,
    },
    /*
     ** Set global info from sanity document
     */

    server: {
      port: 8080,
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
      '~/plugins/imageHelper.js',
      '~/plugins/scrollHelper.js',
      '~/plugins/vuelidate.js',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      // https://go.nuxtjs.dev/vuetify
      '@nuxtjs/vuetify',
      // https://sanity.nuxtjs.org/
      '@nuxtjs/sanity',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true,
      // options: {
      //   customProperties: true,
      // },
      theme: {
        themes: {
          light: {
            primary: colors.lightBlue.darken1,
            secondary: colors.lightBlue.darken2,
            accent: colors.lightBlue.darken4,
            error: '#b71c1c',
            text: '#37474f',
            // primary: colors.blue.darken2,
            // accent: colors.grey.darken3,
            // secondary: colors.amber.darken3,
            // info: colors.teal.lighten1,
            // warning: colors.amber.base,
            // error: colors.deepOrange.accent4,
            // success: colors.green.accent3
          },
        },
      },
    },

    /*
     ** Generate dynamic routes from data from sanity.
     ** Used only for generating static served HTML files
     */
    generate: {
      routes: () => {
        return sanityClient.fetch(routesQuery).then((res) => {
          return [
            ...res.pages.map((item) => `/${item.slug.current}`),
            ...res.blogPosts.map((item) => `/blog/${item.slug.current}`),
          ]
        })
      },
      fallback: true,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
      extractCSS: true,
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|vue)$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
      extend(config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
      },
    },
  }
}
