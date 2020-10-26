<template>
  <v-app class="pb-0">
    <v-app-bar flat app color="transparent" height="100">
      <v-app-bar-nav-icon
        dark
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-avatar class="mr-3" size="200">
              <NuxtLink to="/"
                ><v-img contain src="/forge-logo-inline-white.svg"></v-img
              ></NuxtLink>
            </v-avatar>
          </v-col>
          <v-col cols="10" class="pt-3">
            <v-tabs
              v-if="$vuetify.breakpoint.mdAndUp"
              right
              class="mt-16"
              color="white"
              dark
              background-color="transparent"
            >
              <v-tab v-for="(item, i) in items" :key="i" nuxt :to="item.slug">
                {{ !item.submenu ? item.title : '' }}
                <v-menu offset-y v-if="item.submenu && item.submenu.length">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      {{ item.title }}
                    </v-btn>
                  </template>
                  <v-list
                    dark
                    color="transparent"
                    elevation="0"
                    v-if="item.submenu && item.submenu.length"
                  >
                    <v-list-item
                      v-for="(subitem, i) in item.submenu"
                      :key="i"
                      :to="!subitem.noLink ? subitem.slug : '#'"
                      router
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
          v-for="(item, i) in items"
          :key="i"
          :to="!item.noLink ? item.slug : '#'"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-list v-if="item.submenu && item.submenu.length">
              <v-list-item
                v-for="(subitem, i) in item.submenu"
                :key="i"
                :to="!subitem.noLink ? subitem.slug : '#'"
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

    <v-footer padless class="mt-10">
      <v-card class="flex" flat tile>
        <v-card-title class="light-blue darken-4">
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
                <v-list dense class="light-blue darken-4 white--text pt-0">
                  <v-subheader class="pt-0 white--text text-body-1">{{
                    menu.title
                  }}</v-subheader>
                  <v-list-item
                    v-for="(item, i) in menu.items"
                    :key="i"
                    :to="item.slug"
                    router
                    exact
                    active-class="active"
                    class="white--text"
                  >
                    <span class="white--text text-body-2">{{
                      item.title
                    }}</span>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>

        <v-card-text class="py-1 white--text light-blue darken-1">
          <span>&copy; Forge Technologies {{ new Date().getFullYear() }}</span>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type == "navigationMenu"][0].items {
  "slug": landingPageRoute->slug.current,
    title,
    noLink,
    "submenu": submenu[]{
      title,
      "slug": landingPageRoute->slug.current
    }
}`
const footerMenusQuery = groq`*[_type == "footerMenu"] {
  _id,
  title,
  items[] {
    title,
    "slug": landingPageRoute->slug.current,
  }
}`

export default {
  async fetch() {
    const items = await this.$sanity.fetch(query)
    const footerMenus = await this.$sanity.fetch(footerMenusQuery)
    this.items = items
    this.footerMenus = footerMenus
  },

  data() {
    return {
      clipped: false,
      fixedFooter: false,
      absolute: false,
      drawer: false,
      items: [],
      footerMenus: [],
    }
  },
}
</script>
<style lang="scss" scoped>
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn,
.theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled {
  color: #fff;
}
.theme--dark.v-tabs .v-tab::before,
.theme--dark.v-tabs .v-tab:hover::before,
.theme--dark.v-tabs .v-tab--active::before,
.theme--dark.v-tabs .v-tab--active:hover::before,
.v-tab .theme--dark.v-btn:hover::before,
.v-tab--active .theme--dark.v-btn:hover::before {
  opacity: $tabs-item-hover-opacity !important;
}
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
.theme--light.active.v-list-item--active {
  background-color: transparent;

  &:before {
    background-color: transparent;
    opacity: 0;
    &:hover {
      background-color: transparent;
      opacity: 0;
    }
  }
}
</style>
