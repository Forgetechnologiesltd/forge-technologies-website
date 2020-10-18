<template>
  <section>
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">{{ heading }}</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        <SanityContent :blocks="text" />
      </v-responsive>
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
