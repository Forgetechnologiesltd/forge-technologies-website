<template>
  <v-app class="pb-0">
    <v-app-bar
      flat
      app
      :color="$scrollHelper.isScrolled ? 'white' : 'transparent'"
      prominent
      shrink-on-scroll
      :max-height="$vuetify.breakpoint.mdAndUp ? '100' : '70'"
      :min-height="$vuetify.breakpoint.mdAndUp ? '100' : '70'"
    >
      <v-app-bar-nav-icon
        :dark="!$scrollHelper.isScrolled"
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
        class="mt-2"
      ></v-app-bar-nav-icon>
      <v-container>
        <v-row class="pt-0 pt-md-3">
          <v-col cols="12" md="2" class="pt-0 pt-md-3">
            <v-avatar class="mr-3 ml-3" width="200" tile>
              <NuxtLink to="/"
                ><v-img
                  :src="
                    $scrollHelper.isScrolled
                      ? '/forge-logo-inline.svg'
                      : '/forge-logo-inline-white.svg'
                  "
                ></v-img
              ></NuxtLink>
            </v-avatar>
          </v-col>
          <v-col cols="10" class="pt-0 pt-md-3">
            <v-tabs
              v-if="$vuetify.breakpoint.mdAndUp"
              v-model="tab"
              right
              slider-size="5"
              :color="
                $scrollHelper.isScrolled
                  ? $vuetify.theme.themes.light.text
                  : 'white'
              "
              :hide-slider="isHome()"
              :dark="!$scrollHelper.isScrolled"
              background-color="transparent"
            >
              <v-tabs-slider
                :color="$scrollHelper.isScrolled ? 'primary' : 'white'"
              ></v-tabs-slider>
              <v-tab
                v-for="item in items"
                :key="item._key"
                nuxt
                :to="
                  !item.submenu ? `/${item.slug}` : `#${kebabCase(item.title)}`
                "
              >
                <span v-if="!item.submenu">{{ item.title }}</span>
                <v-menu offset-y v-if="item.submenu && item.submenu.length">
                  <template v-slot:activator="{ on, attrs }">
                    <span
                      v-bind="attrs"
                      v-on="on"
                      @click="
                        () => {
                          if (item.submenu) {
                            tab = kebabCase(item.title)
                            if (!$scrollHelper.isScrolled) {
                              $vuetify.goTo(129, { duration: 1, offset: 0 })
                            }
                          }
                        }
                      "
                    >
                      {{ item.title }}
                    </span>
                  </template>
                  <v-list
                    :dark="!$scrollHelper.isScrolled"
                    :color="$scrollHelper.isScrolled ? 'white' : 'transparent'"
                    elevation="0"
                    v-if="item.submenu && item.submenu.length"
                  >
                    <v-list-item
                      v-for="subitem in item.submenu"
                      :key="subitem.key"
                      @click.native="setActiveTab(item, subitem.slug)"
                      link
                      nuxt
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="subitem.title" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item._key"
          :to="!item.noLink ? `/${item.slug}` : '#'"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-list v-if="item.submenu && item.submenu.length">
              <v-list-item
                v-for="subitem in item.submenu"
                :key="subitem._key"
                :to="!subitem.noLink ? `/${subitem.slug}` : '#'"
                router
                exact
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subitem.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer padless class="mt-0">
      <v-card class="flex" flat tile dark color="light-blue darken-4">
        <v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="3" order="12" order-md="1">
                <NuxtLink to="/" class="d-block">
                  <v-img
                    contain
                    src="/forge-logo-inline-white.svg"
                    max-width="200"
                  ></v-img>
                </NuxtLink>
              </v-col>
              <v-col
                v-for="menu in footerMenus"
                :key="menu._id"
                cols="12"
                order-md="2"
                md="2"
              >
                <v-list dense class="pt-0 light-blue darken-4 footer-menu">
                  <v-subheader
                    class="pt-0 pl-0 text-body-1 font-weight-bold white--text"
                    dark
                    >{{ menu.title }}</v-subheader
                  >
                  <v-list-item
                    v-for="(item, i) in menu.items"
                    :key="i"
                    :to="item.slug"
                    router
                    exact
                    active-class="active"
                    class="white--text pl-0"
                  >
                    <span class="text-body-2 white--text">{{
                      item.title
                    }}</span>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-row  v-if="collaborators">
              <div class="newfooterImages-text col-12" v-if="false">
                <h4 class="mb-0 text-h5 text-md-h4 pl-0 block text-center-class">{{collaboratorText}}</h4>
              </div>
              <div class="newfooterImages col-12">
                <img
                  v-for="item in collaborators"
                  :key="item._key"
                  :src="$imageHelper(item.image).auto('format').url()"
                  :alt="item.title"
                >                
              </div>
            </v-row>
          </v-container>
        </v-card-title>

        <v-card-text
          class="py-1 white--text light-blue darken-4 d-flex justify-space-between"
          ><v-container>
            <v-row>
              <v-col>
                <v-card class="d-flex light-blue darken-4" flat>
                  <span
                    >&copy; Forge Technologies Ltd.
                    {{ new Date().getFullYear() }}</span
                  >
                  <span class="ml-auto" v-html="footerText"></span>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-footer>
    <CookieControl />
  </v-app>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import kebabCase from 'lodash/kebabCase'

const query = groq`*[_type == "navigationMenu"][0].items {
  ...,
  "slug": landingPageRoute->slug.current,
    title,
    noLink,
    "submenu": submenu[]{
      ...,
      title,
      "slug": landingPageRoute->slug.current
    }
}`
const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  ...,
  "footerText": footerText[0].children[0].text,
  "footerMenus": footerNav[]-> {
    _id,
    title,
    items[] {
      title,
      "slug": landingPageRoute->slug.current,
    }
  },
  "collaborators": collaborators[]-> {
    _id,
    title,
    items[] {
      title,
      image,
    }
  }
}`

export default {
  async fetch() {
    const items = await this.$sanity.fetch(query)
    const siteSettings = await this.$sanity.fetch(siteSettingsQuery)
    this.items = items
    this.footerMenus = siteSettings.footerMenus
    this.footerText = siteSettings.footerText
    this.collaborators = siteSettings.collaborators[0].items
    this.collaboratorText = siteSettings.collaborators[0].title
  },
  data() {
    return {
      tab: null,
      clipped: false,
      fixedFooter: false,
      absolute: false,
      drawer: false,
      items: [],
      footerMenus: [],
      collaborators: null,
      collaboratorText:'',
      footerText: '',
    }
  },
  mounted() {
    if (
      this.subIsActive([
        '/cloud-adoption',
        '/network-transformation',
        '/future-workplace',
      ])
    ) {
      this.tab = 'what-we-do'
    }
  },
  methods: {
    isHome() {
      return this.$route.name === 'index'
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0
      })
    },
    setActiveTab(item, to) {
      const slugs = []
      const tab = kebabCase(item.title)
      this.$router.push(`/${to}`)
      item.submenu.map((subitem) => {
        slugs.push(`/${subitem.slug}`)
      })
      if (this.subIsActive(slugs)) {
        this.tab = tab
        if (tab !== this.tab) {
          this.tab = tab
        }
      }
      if (this.tab === undefined) {
        this.tab = tab
      }
    },
    kebabCase(string) {
      return kebabCase(string)
    },
  },
}
</script>
<style lang="scss" scoped>
// .v-application .transparent.v-app-bar.v-app-bar--fixed.v-app-bar--is-scrolled {
//   background-color: rgba($color: #000000, $alpha: 0.4) !important;
//   .v-list.v-sheet.theme--dark.elevation-0.transparent {
//     background-color: rgba($color: #000000, $alpha: 0.4) !important;
//   }
// }
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #fff;
}

.theme--dark.v-tabs .v-tab:hover::before,
.theme--dark.v-tabs .v-tab--active::before,
.theme--dark.v-tabs .v-tab--active:hover::before,
.theme--light.v-tabs .v-tab:hover::before,
.theme--light.v-tabs .v-tab--active::before,
.theme--light.v-tabs .v-tab--active:hover::before,
.v-tab .theme--light.v-btn:hover::before,
.v-tab .theme--dark.v-btn:hover::before,
.v-tab--active .theme--light.v-btn:hover::before,
.v-tab--active .theme--dark.v-btn:hover::before {
  opacity: $tabs-item-hover-opacity !important;
}
.theme--light.v-tabs .v-tab:focus::before,
.theme--light.v-tabs .v-tab--active:focus::before,
.theme--dark.v-tabs .v-tab:focus::before,
.theme--dark.v-tabs .v-tab--active:focus::before {
  opacity: $tabs-item-focus-opacity !important;
}
.v-main[style] {
  padding: 0 !important;
}
.theme--light.v-application {
  color: #37474f;
}
// .theme--light.active.v-list-item--active {
//   background-color: transparent;

//   &:before {
//     background-color: transparent;
//     opacity: 0;
//     &:hover {
//       background-color: transparent;
//       opacity: 0;
//     }
//   }
// }

.newfooterImages{
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
}
.newfooterImages img{
  margin:10px;
}

.text-center-class{
  text-align: center;
}

@media screen and (max-width:768px){
  .newfooterImages{
    align-items: flex-start;
    flex-direction: column;
  }
  .text-center-class{
    text-align: left;
  }
}
</style>
