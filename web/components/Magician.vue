<template>
  <v-container
    fluid
    class="pa-0 mb-7 mt-md-7"
    fill-height
    :id="`magician-${_key}`"
    tag="section"
  >
    <v-row>
      <v-col cols="6" class="ml-n16">
        <v-img
          :min-height="'calc(50vh)'"
          :max-height="'calc(50vh)'"
          :src="$imageHelper(mediumSizeImage).url()"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.5)"
        >
        </v-img>
      </v-col>
      <v-col class="" cols="6" align-center>
        <h4 class="mb-0 text-h5 text-md-h4 pl-0">
          {{ heading }}
        </h4>
        <SanityContent class="text-body-2 col-md-12 pl-0" :blocks="paragraph" />
        <v-btn v-if="cta" depressed color="primary" nuxt :to="cta.slug">{{
          cta.title
        }}</v-btn>
      </v-col>
      <!-- <v-container fill-height>
        <v-row align="left" class="mx-auto" justify="center">
        </v-row>
      </v-container> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Magician',
  props: {
    heading: String,
    paragraph: Array,
    mediumSizeImage: Object,
    cta: Object,
    _key: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
