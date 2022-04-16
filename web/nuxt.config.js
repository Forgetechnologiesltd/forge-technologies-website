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

export default async (ctx) => {
  const siteSettings = await sanityClient.fetch('*[_type == "siteSettings"][0]')
  const nuxtConfig = {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      titleTemplate: '%s | Forge Technologies',
      title: siteSettings.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
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
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.URL,
        },
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.URL,
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
    robots: {
      UserAgent: '*',
      Allow: '/',
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
      minimal: true,
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
      '~/plugins/stickyDirective.client.js',
      '~/plugins/gtag.js',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      // https://go.nuxtjs.dev/vuetify
      '@nuxtjs/vuetify',
      // https://sanity.nuxtjs.org/
      '@nuxtjs/sanity/module',
      '@nuxtjs/fontawesome',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
    ],
    fontawesome: {
      component: 'fa',
      icons: {
        brands: ['faLinkedinIn', 'faLinkedin', 'faTwitter', 'faTwitterSquare'],
      },
    },
    sitemap: {
      hostname: 'https://forge-technologies.com/',
      gzip: true,
    },
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
      [
        'nuxt-cookie-control',
        {
          // component: '~/components/CookieControl',
          colors: false,
          text: {
            barTitle: 'Cookie policy',
            barDescription:
              "<p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site</> <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>",
            acceptAll: 'Accept all',
            declineAll: 'Delete all',
            manageCookies: 'Manage cookies',
            unsaved: 'You have unsaved settings',
            close: 'Close',
            save: 'Save',
            necessary: 'Strictly necessary cookies.',
            optional: 'Optional cookies',
            functional: 'Functional cookies',
            blockedIframe: 'To see this, please enable functional cookies',
            here: 'here',
          },

          cookies: {
            necessary: [
              {
                name: 'Default Cookies',
                description:
                  ' These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to control whether you accept using other cookies.',
                cookies: [
                  'cookie_control_consent',
                  'cookie_control_enabled_cookies',
                ],
              },
            ],
            optional: [
              {
                name: 'Google Analitycs',

                identifier: 'ga',

                description:
                  'These allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.',
                async: true,
                cookies: ['_ga', '_gat', '_gid'],
              },
            ],
          },
        },
      ],
    ],

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
            text: colors.blueGrey.darken3,
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
      icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
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
            ...res.blogPosts.map(
              (item) => `/news-and-views/${item.slug.current}`
            ),
          ]
        })
      },
      fallback: true,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
      extractCSS: {
        ignoreOrder: true
      },
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

  return nuxtConfig
}
