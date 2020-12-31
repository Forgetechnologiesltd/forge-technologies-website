<template>
  <v-container
    fluid
    class="pa-0 mb-7 overflow--hidden"
    :id="`jester-${_key}`"
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <v-theme-provider dark>
          <v-container fill-height class="px-5 px-md-0">
            <v-row class="blue-grey--text text--darken-3 mx-auto">
              <v-col
                cols="12"
                md="6"
                :order="
                  normalisedSide === 'right' && $vuetify.breakpoint.mdAndUp
                    ? 'first'
                    : 'last'
                "
                class="px-0"
              >
                <img :src="$imageHelper(image).auto('format').url()" />
              </v-col>
              <v-col
                class="blue-grey--text text--darken-3 px-0 px-md-3 pb-0 d-md-flex align-md-center"
                :class="[
                  normalisedSide === 'right' && $vuetify.breakpoint.mdAndUp
                    ? ' text-right '
                    : ' text-left ',
                ]"
                :order="
                  normalisedSide === 'right' && $vuetify.breakpoint.mdAndUp
                    ? 'last'
                    : $vuetify.breakpoint.mdAndDown
                    ? 'last'
                    : 'first'
                "
                cols="12"
                md="6"
              >
                <v-card background-color="white" flat light>
                  <v-icon v-if="icon" large> mdi-{{ icon.icon }} </v-icon>
                  <h4 class="mb-0 text-h5 text-md-h4 pl-0">
                    {{ heading }}
                  </h4>
                  <SanityContent
                    class="text-body-2 col-md-10 px-0 pb-0 mb-6"
                    :class="[
                      normalisedSide === 'right' && $vuetify.breakpoint.mdAndUp
                        ? ' text-right ml-auto '
                        : ' text-left ',
                    ]"
                    :blocks="shortText"
                  />
                  <v-btn
                    v-if="cta && cta.title"
                    depressed
                    color="primary"
                    nuxt
                    :to="cta.slug"
                    >{{ cta.title }}</v-btn
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Jester',
  props: {
    heading: String,
    shortText: Array,
    image: Object,
    side: String,
    icon: Object,
    cta: Object,
    _key: String,
  },
  data() {
    return {
      normalisedSide: 'left',
    }
  },
  mounted() {
    this.normaliseSide()
  },
  methods: {
    normaliseSide() {
      this.normalisedSide = this.side
      if (this.side === 'Western') {
        this.normalisedSide = 'right'
      }
      if (this.side === undefined) {
        this.normalisedSide = 'left'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
