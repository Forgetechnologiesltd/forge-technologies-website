<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex align-stretch">
    <v-card
      outlined
      class="d-flex align-items-stretch flex-column align-content-space-between"
      :to="`/news-and-views/${slug.current}`"
    >
      <v-img
        :src="$imageHelper(mainImage).auto('format').url()"
        height="200px"
        max-height="200"
      ></v-img>

      <v-card-text class="mb-0 pb-0">
        <span
          v-for="category in categories"
          :key="category._id"
          @click.stop="$emit('change-category', category._id)"
        >
          {{ category.title }}
        </span>
      </v-card-text>
      <v-card-title class="pt-1"> {{ title }} </v-card-title>
      <v-card-text>
        <SanityContent :blocks="excerpt" />
      </v-card-text>

      <v-card-actions class="mt-auto">
        <v-btn
          color="primary"
          text
          nuxt
        >
          Read more
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    _key: String,
    authors: Array,
    body: Array,
    excerpt: Array,
    categories: Array,
    mainImage: Object,
    publishedAt: String,
    slug: Object,
    title: String,
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
