<template>
  <v-container fluid class="pa-0 mb-7" :id="`creator-${_key}`" tag="section">
    <v-row no-gutters>
      <v-col cols="12">
        <v-img
          :min-height="'calc(32vh)'"
          :max-height="'calc(32vh)'"
          :src="$imageHelper(image).url()"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row :align="side" class="white--text mx-auto" justify="center">
                <v-col
                  class="white--text offset-md-1 px-0"
                  :class="[side === 'right' ? ' text-right ' : ' text-left ']"
                  xs="6"
                >
                  <h4 class="mb-0 text-h5 text-md-h4 pl-0">
                    {{ heading }}
                  </h4>
                  <SanityContent
                    class="text-body-2 col-md-7 pl-0"
                    :class="[
                      side === 'right' ? ' text-right ml-auto ' : ' text-left ',
                    ]"
                    :blocks="shortText"
                  />
                  <v-btn
                    v-if="cta"
                    depressed
                    color="primary"
                    nuxt
                    :to="cta.slug"
                    >{{ cta.title }}</v-btn
                  >
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
  name: 'Creator',
  props: {
    heading: String,
    shortText: Array,
    image: Object,
    cta: Object,
    side: String,
    _key: String,
  },
  mounted() {
    if (this.side === 'Western') this.side = 'right'
    if (this.side === undefined) this.side = 'left'
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
