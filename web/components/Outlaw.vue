<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" md="4">
        <v-icon large color="secondary"> mdi-{{ item.icon.icon }} </v-icon>
        <h4 class="mb-5 text-h5 text-md-h4 pl-0">
          {{ item.heading }}
        </h4>
        <SanityContent
          class="text-body-2 col-md-7 pl-0"
          :blocks="item.paragraph"
        />
        <v-btn
          v-if="item.cta"
          depressed
          color="primary"
          nuxt
          :to="item.cta.slug"
          >{{ item.cta.title }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Outlaw',
  props: {
    items: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
