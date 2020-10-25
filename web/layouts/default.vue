<template>
  <v-app>
    <v-app-bar flat app color="white" height="100">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-avatar class="mr-3" size="200">
              <NuxtLink to="/"
                ><v-img contain src="/forge-logo-inline.svg"></v-img
              ></NuxtLink>
            </v-avatar>
          </v-col>
          <v-col cols="10" class="pt-3">
            <v-tabs
              v-if="$vuetify.breakpoint.mdAndUp"
              right
              class="mt-16"
              color="grey darken-1"
              hide-slider
            >
              <v-tab v-for="(item, i) in items" :key="i" nuxt :to="item.slug">
                {{ !item.submenu ? item.title : '' }}
                <v-menu offset-y v-if="item.submenu && item.submenu.length">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      {{ item.title }}
                    </v-btn>
                  </template>
                  <v-list v-if="item.submenu && item.submenu.length">
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
      :mini-variant="miniVariant"
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
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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

export default {
  async fetch() {
    const items = await this.$sanity.fetch(query)
    this.items = items
  },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
