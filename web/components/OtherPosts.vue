<template>
  <v-container
    class="py-0 my-7 container--wider"
    :id="`storyteller-${_key}`"
    tag="section"
  >
    <h3 class="text-h3 mb-4">More News</h3>
    <SanityContent :blocks="posts" :serializers="serializers" class="row" />
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

const postsQuery = groq`*[_type == "post" && defined(slug) && publishedAt < now()] ${postProjection} | order(_createdAt desc) [0..$numberOfPosts]`

const serializers = {
  types: {
    post: PostItem,
  },
}

export default {
  name: 'OtherPosts',
  props: {
    _key: String,
  },
  async fetch() {
    const posts = await this.$sanity.fetch(postsQuery, {
      numberOfPosts: this.$vuetify.breakpoint.mdAndUp ? 3 : 2,
    })
    this.posts = posts
  },
  data() {
    return {
      serializers,
      posts: [],
    }
  },
}
</script>
