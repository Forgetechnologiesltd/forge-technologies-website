<template>
  <v-row>
    <v-col class="mx-0 px-0">
      <v-container>
        <h1>{{ heading }}</h1>
        <SanityContent :blocks="tagline" />
      </v-container>
      <SanityImage
        v-if="backgroundImage"
        :asset-id="backgroundImage.asset._ref"
        auto="format"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    backgroundImage: Object,
    cta: Object,
    heading: String,
    tagline: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}
</style>
