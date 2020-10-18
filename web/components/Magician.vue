<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <SanityImage
          v-if="mediumSizeImage"
          :asset-id="mediumSizeImage.asset._ref"
          auto="format"
        />
      </v-col>
      <v-col cols="6">
        <h1>{{ heading }}</h1>
        <SanityContent :blocks="paragraph" />
        {{ cta }}
      </v-col>
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
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
