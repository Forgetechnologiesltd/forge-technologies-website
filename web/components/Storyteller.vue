<template>
  <v-container
    class="py-0 my-7 container--wider"
    :id="`storyteller-${_key}`"
    tag="section"
    @change-category="getPostsByCategory"
  >
    <v-tabs
      centered
      v-model="tab"
      v-sticky
      sticky-offset="stickyOffset"
      sticky-z-index="4"
      class="mb-6"
    >
      <v-tab @click="getAllPosts()"> all </v-tab>
      <v-tab
        v-for="category in categories"
        :key="category._id"
        @click="getPostsByCategory(category._id)"
        >{{ category.title }}</v-tab
      >
    </v-tabs>
    <SanityContent
      @change-category="getPostsByCategory"
      :blocks="posts"
      :serializers="serializers"
      class="row"
    />
  </v-container>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import PostItem from '~/components/PostItem'

const postProjection = `{
    _id,
    _type,
    publishedAt,
    title,
    slug,
    excerpt,
    mainImage,
    categories[]->,
    body[]{
      ...,
      children[]{
        ...,
        // Join inline reference
        _type == "authorReference" => {
          // check /studio/documents/authors.js for more fields
          "name": @.author->name,
          "slug": @.author->slug
        }
      }
    },
    "authors": authors[].author->
  }`

const postsQuery = groq`*[_type == "post" && defined(slug) && publishedAt < now()] ${postProjection}`
const postsByCatQuery = groq`*[_type == "post" && defined(slug) && publishedAt < now() && $catId in categories[]._ref] ${postProjection}`
const categoriesQuery = groq`*[_type == "category" ]`

const serializers = {
  types: {
    post: PostItem,
  },
}

export default {
  name: 'Storyteller',
  props: {
    _key: String,
  },
  async fetch() {
    const posts = await this.$sanity.fetch(postsQuery)
    const categories = await this.$sanity.fetch(categoriesQuery)
    this.posts = posts
    this.categories = categories
  },
  data() {
    return {
      serializers,
      posts: [],
      catId: null,
      categories: [],
      tab: null,
      stickyOffset: { top: this.$vuetify.breakpoint.mdAndUp ? 100 : 70 },
    }
  },
  methods: {
    async getAllPosts() {
      this.catId = null
      const posts = await this.$sanity.fetch(postsQuery)
      this.posts = posts
    },
    async getPostsByCategory(catId) {
      this.catId = catId
      const postsbyCategory = await this.$sanity.fetch(postsByCatQuery, {
        catId: this.catId,
      })
      this.posts = postsbyCategory
    },
  },
}
</script>
