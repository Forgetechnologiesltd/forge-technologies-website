<template>
  <v-container
    :id="`company-${_key}`"
    tag="section"
    class="mt-14 container--wider"
  >
    <h1 class="text-center text-h4 text-md-h3 mb-6 font-bold">{{ heading }}</h1>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item._key"
        cols="12"
        :md="columnNumber"
      >
        <SanityContent :blocks="item.paragraph" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Company',
  props: {
    heading: String,
    items: Array,
    _key: String,
  },
  data() {
    return {
      columnNumber: '',
    }
  },
  mounted() {
    this.columnNumber = 12 / this.items.length
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
