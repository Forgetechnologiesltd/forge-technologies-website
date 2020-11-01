<template>
  <v-container class="py-8" :id="`innocent-${_key}`" tag="section">
    <v-row>
      <v-col cols="12" md="6" class="pr-16"
        ><v-img
          :min-height="'calc(50vh)'"
          :max-height="'calc(50vh)'"
          :src="$imageHelper(image).url()"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.5)"
        >
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <SanityContent :blocks="text" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Innocent',
  props: {
    image: Object,
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
