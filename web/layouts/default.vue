<template>
  <v-app>
    <v-app-bar flat app color="white" height="100">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container>
        <v-avatar class="mr-3" size="200">
          <NuxtLink to="/"
            ><v-img contain src="/forge-logo-inline.svg"></v-img
          ></NuxtLink>
        </v-avatar>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      :v-if="$vuetify.breakpoint.xs"
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
          :to="item.route"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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
const query = groq`*[_type == "navigationMenu" && title == "Main menu"][0].items {
    route,
    title
}`

export default {
  async fetch() {
    const items = await this.$sanity.fetch(query)
    this.items = items
  },

  data() {
    return {
      clipped: false,
      drawer: this.$vuetify.breakpoint.mobile,
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
