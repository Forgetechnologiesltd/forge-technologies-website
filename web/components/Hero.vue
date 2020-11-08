<template>
  <v-container fluid class="pa-0 hero" no-gutters id="hero" tag="section">
    <v-row no-gutters>
      <v-col class="mx-0 px-0">
        <v-img
          :min-height="'calc(60vh)'"
          :max-height="'calc(60vh)'"
          :src="$imageHelper(backgroundImage).url()"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text"
                :justify="`${flexSide}`"
              >
                <v-col
                  class="white--text d-flex flex-column"
                  :class="`text-${normalisedSide} justify-content-md-${flexSide}  ${mx}`"
                  cols="10"
                  md="8"
                >
                  <h2
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h2',
                    ]"
                    class="font-weight-light mb-3 mb-md-5"
                  >
                    {{ heading }}
                  </h2>

                  <SanityContent
                    class="col-12 col-md-8 px-0 d-flex"
                    :class="`text-${normalisedSide} justify-md-${flexSide} ${mx}`"
                    :blocks="tagline"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    backgroundImage: Object,
    cta: Object,
    heading: String,
    tagline: Array,
    textPosition: String,
    _key: String,
  },
  data() {
    return {
      normalisedSide: '',
      flexSide: '',
      mx: '',
    }
  },
  mounted() {
    this.normaliseSide()
  },
  methods: {
    normaliseSide() {
      this.normalisedSide = this.textPosition

      if (this.textPosition === undefined) {
        this.normalisedSide = 'center'
      }
      switch (this.normalisedSide) {
        case 'left':
          this.flexSide = 'start'
          this.mx = ''
          break
        case 'center':
          this.flexSide = 'center'
          this.mx = 'mx-auto'
          break
        case 'right':
          this.flexSide = 'end'
          this.mx = 'ml-auto'
          break

        default:
          this.flexSide = 'center'
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #37474f;
}
</style>
