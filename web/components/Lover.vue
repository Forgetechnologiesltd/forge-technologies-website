<template>
  <section class="py-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" class="pr-md-10 pr-lg-16"
          ><h2 class="mb-3 text-h4 pr-md-10 pr-lg-16">{{ heading }}</h2></v-col
        >
        <v-col cols="12" md="6">
          <SanityContent :blocks="text" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Lover',
  props: {
    heading: String,
    text: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
