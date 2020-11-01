<template>
  <v-container class="py-8" :id="`lover-${_key}`" tag="section">
    <v-row>
      <v-col cols="12" md="6" class="pr-md-10 pr-lg-16"
        ><h2 class="mb-3 text-h4 pr-md-10 pr-lg-16">{{ heading }}</h2></v-col
      >
      <v-col cols="12" md="6">
        <SanityContent :blocks="text" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Lover',
  props: {
    heading: String,
    text: Array,
    _key: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
