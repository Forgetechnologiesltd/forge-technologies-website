<template>
  <v-container class="container--wider mb-7">
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" md="4">
        <v-icon medium color="blue-grey lighten-2">
          mdi-{{ item.icon.icon }}
        </v-icon>
        <h4 class="mb-3 mt-3 text-h5 text-md-h4 pl-0">
          {{ item.heading }}
        </h4>
        <SanityContent
          class="text-body-2 col-md-10 pl-0 pt-0"
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
.container--wider {
  max-width: 1290px !important;
}
</style>
