<template>
  <v-container :id="`explorer-${_key}`" tag="section" fluid class="px-0">
    <v-carousel cycle hide-delimiter-background>
      <v-carousel-item v-for="item in explorerItems" :key="item._key">
        <v-img
          :min-height="'calc(60vh)'"
          :max-height="'calc(60vh)'"
          :src="$imageHelper(item.image).auto('format').url()"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="col-12 col-md-8 px-0 mx-auto justify-center">
              <h3 class="text-h5 text-md-h3 mx-auto justify-center text-center">
                {{ item.heading }}
              </h3>
              <SanityContent
                class="text-body-2 col-10 col-md-5 px-0 text-center mx-auto justify-center"
                :blocks="item.shortText"
              />
              <v-btn
                v-if="item.cta"
                depressed
                color="primary"
                nuxt
                class="d-flex mx-auto justify-center"
                :to="item.cta.slug"
                >{{ item.cta.title }}</v-btn
              >
            </v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'Explorer',
  props: {
    explorerItems: Array,
    _key: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
