<template>
  <client-only>
    <section class="cookieControl" v-if="cookies.text">
      <v-snackbar
        v-model="displayBar"
        multi-line
        width="100%"
        min-width="100%"
        max-width="100%"
        color="primary"
        timeout="-1"
      >
        <h3 v-text="cookies.text.barTitle" />
        <div v-html="cookies.text.barDescription" />

        <template v-slot:action="{ attrs }">
          <v-btn
            depressed
            color="primary"
            outlined
            class="ma-2 white"
            @click="cookies.modal = true"
            v-bind="attrs"
            v-text="cookies.text.manageCookies"
          />
          <v-btn
            depressed
            color="primary"
            outlined
            class="ma-2 white"
            @click="setConsent({ type: 'all', reload: false })"
            v-bind="attrs"
            v-text="cookies.text.acceptAll"
          />
        </template>
      </v-snackbar>

      <v-row justify="center">
        <v-dialog
          v-model="cookies.modal"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="cookies.modal = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Cookie Settings</v-toolbar-title>
              <v-subheader v-if="!saved">{{
                cookies.text.unsaved
              }}</v-subheader>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn
                  dark
                  text
                  @click="setConsent({ type: 'partial', reload: false })"
                >
                  Save
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <template v-for="type in ['necessary', 'optional']">
              <v-list
                three-line
                subheader
                :key="type.id"
                class="blue-grey--text text--darken-3"
              >
                <v-subheader>{{ cookies.text[type] }}</v-subheader>
                <v-list-item
                  v-for="cookie in cookies.cookies[type]"
                  :key="cookie.id"
                >
                  <v-list-item-action class="blue-grey--text text--darken-3">
                    <v-switch
                      v-if="
                        type === 'necessary' && cookie.name !== 'functional'
                      "
                      :id="getCookieFirstName(cookie.name)"
                      v-model="defaultCookies"
                      :label="getCookieFirstName(cookie.name)"
                    ></v-switch>
                    <v-switch
                      v-else
                      :id="getCookieFirstName(cookie.name)"
                      :checked="
                        cookies.enabledList.includes(
                          cookie.identifier ||
                            cookies.slugify(getCookieFirstName(cookie.name))
                        ) ||
                        (cookies.get('cookie_control_consent').length === 0 &&
                          cookie.initialState === true)
                      "
                      @change="toogleCookie(cookie)"
                      :label="getCookieFirstName(cookie.name)"
                    ></v-switch>
                  </v-list-item-action>
                  <v-list-item-content class="blue-grey--text text--darken-3">
                    <v-list-item-title>{{
                      getName(cookie.name)
                    }}</v-list-item-title>
                    <v-list-item-subtitle v-if="cookie.description">{{
                      getDescription(cookie.description)
                    }}</v-list-item-subtitle>
                    <div v-if="cookie.identifier === 'ga'"></div>
                    <template v-if="cookie.cookies">
                      <slot name="cookie" v-bind="{ config: cookie }">
                        <ul>
                          <li
                            class="blue-grey--text text--darken-3"
                            v-for="item in cookie.cookies"
                            :key="item.id"
                            v-html="item"
                          />
                        </ul>
                      </slot>
                    </template>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider :key="type.id"></v-divider>
            </template>
          </v-card>
        </v-dialog>
      </v-row>
    </section>
  </client-only>
</template>

<script>
export default {
  name: 'CookieControl',
  props: {
    locale: {
      default: 'en',
    },
  },
  data() {
    return {
      saved: true,
      colorsSet: false,
      cookies: this.$cookies,
      displayBar: !this.$cookies.consent,
      defaultCookies: true,
    }
  },

  computed: {
    expirationDate() {
      let date = new Date()
      date.setFullYear(date.getFullYear() + 1)
      return date.toUTCString()
    },

    optionalCookies() {
      return this.cookies.cookies.optional
    },
  },

  methods: {
    toogleCookie(cookie) {
      let cookieName =
        cookie.identifier ||
        this.cookies.slugify(this.getCookieFirstName(cookie.name))
      if (this.saved) this.saved = false
      if (!this.cookies.enabledList.includes(cookieName))
        this.cookies.enabledList.push(cookieName)
      else
        this.cookies.enabledList.splice(
          this.cookies.enabledList.indexOf(cookieName),
          1
        )
    },

    setConsent({ type, consent = true, reload = true }) {
      this.cookies.set({
        name: 'cookie_control_consent',
        value: consent,
        expires: this.expirationDate,
      })
      let enabledCookies =
        type === 'partial' && consent
          ? this.cookies.enabledList
          : [
              ...this.optionalCookies.map((c) => {
                return (
                  c.identifier ||
                  this.cookies.slugify(this.getCookieFirstName(c.name))
                )
              }),
            ]

      this.cookies.set({
        name: 'cookie_control_enabled_cookies',
        value: consent ? enabledCookies.join(',') : '',
        expires: this.expirationDate,
      })
      if (!reload) {
        this.$cookies.setConsent()
        this.setGa()
        this.$cookies.modal = false
        this.saved = true
        this.displayBar = false
      } else window.location.reload(true)
    },
    setGa() {
      const enabledCookies = this.cookies.get('cookie_control_enabled_cookies')
      if (enabledCookies === 'ga') {
        this.$ga.enable()
        this.$ga.page(this.$router)
      } else {
        this.$ga.disable()
      }
    },

    getDescription(description) {
      if (typeof description === 'string')
        return ` ${
          this.cookies.dashInDescription !== false ? '-' : ''
        } ${description}`
      else if (description[this.locale])
        return ` ${this.cookies.dashInDescription !== false ? '-' : ''} ${
          description[this.locale]
        }`
      return ''
    },
    getName(name) {
      return name === 'functional'
        ? this.cookies.text['functional']
        : typeof name === 'string'
        ? name
        : name[this.locale]
        ? name[this.locale]
        : name[Object.keys(name)[0]]
    },

    getCookieFirstName(name) {
      return typeof name === 'string' ? name : name[Object.keys(name)[0]]
    },

    async setTexts(isChanged = false) {
      let text = null
      let module = null
      try {
        module = require(`../node_modules/nuxt-cookie-control/locale/${this.locale}`)
      } catch (e) {
        module = require(`../node_modules/nuxt-cookie-control/locale/en`)
      }
      text = module.default
      if (this.cookies.text && Object.keys(this.cookies.text).length > 0) {
        if (this.cookies.text.locale) {
          Object.assign(text, this.cookies.text.locale[this.locale])
        }
        if (!isChanged) Object.assign(text, this.cookies.text)
      }
      this.$set(this.$cookies, 'text', text)
    },
  },

  async beforeMount() {
    await this.setTexts()
    if (process.browser && this.cookies.colors) {
      let key = null
      let variables = {}
      for (key in this.cookies.colors) {
        let k = key.toLowerCase().includes('unactive')
          ? key.replace(/Unactive/g, 'Inactive')
          : key
        variables[`cookie-control-${k}`] = `${this.cookies.colors[key]}`
      }

      if (this.cookies.cssPolyfill) {
        const module = await import('css-vars-ponyfill')
        let cssVars = module.default
        cssVars({ variables })
      } else if (process.client) {
        for (let cssVar in variables) {
          document.documentElement.style.setProperty(
            `--${cssVar}`,
            variables[cssVar]
          )
        }
      }
    }
    if (this.cookies.get('cookie_control_consent')) {
      this.setGa()
    }

    if (
      !this.cookies.get('cookie_control_consent') ||
      this.cookies.get('cookie_control_consent').length === 0
    ) {
      this.$ga.disable()
      this.optionalCookies.forEach((c) => {
        if (c.initialState === true) {
          this.cookies.enabledList.push(
            c.identifier ||
              this.cookies.slugify(this.getCookieFirstName(c.name))
          )
        }
      })
    }
    this.colorsSet = true
  },

  watch: {
    async locale() {
      await this.setTexts(true)
    },
  },
}
</script>
