<template>
  <v-container
    class="py-0 my-7 container--wider"
    :id="`caseStudies-${_key}`"
    tag="section"
  >
    <h3 class="text-h3 mb-4">More from Forge Technologies</h3>
    
    <SanityContent :blocks="posts" :serializers="serializers" class="row" />
  </v-container>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import CaseStudyPostItem from '~/components/CaseStudyPostItem'

const postProjection = `{
    _id,
    _type,
    publishedAt,
    title,
    slug,
    excerpt,
    mainImage,
    detailQuoteCompanyLogo,
  }`

const postsQuery = groq`*[_type == "casestudy"  && defined(slug)] ${postProjection} | order(_createdAt desc) [0..$numberOfPosts]`

const serializers = {
  types: {
    casestudy: CaseStudyPostItem,
  },
}

export default {
  name: 'OtherCaseStudies',
  props: {
    _key: String,
  },
  async fetch() {
    const posts = await this.$sanity.fetch(postsQuery, {
      numberOfPosts: 2,
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
