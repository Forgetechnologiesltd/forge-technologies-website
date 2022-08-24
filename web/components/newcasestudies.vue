<template>
  <v-container
    class="py-0 my-7 mt-16 container--wider"
    :id="`newcasestudies-${_key}`"
    tag="section"
  >
    <SanityContent
      :blocks="posts"
      :serializers="serializers"
      class="row"
    />
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

const postsQuery = groq`*[_type == "casestudy"]{
  _type,
  slug,
  title,
  mainImage,
  publishedAt,
  mainImage,
  "pdfLinkOrId": pdfLinkOrId.asset->url,  
  excerpt,
  detailTopTitle,
  detailTopBody,
  industry,
  services,
  highlight1,
  highlight2,
  highlight3,
  detailBottomTitle,
  detailBottomBody,
  detailQuote,
  detailQuoteName,
  detailQuoteTitle,
  detailQuoteCompany,
  detailQuoteCompanyLogo
}`

const serializers = {
  types: {
    casestudy: CaseStudyPostItem,
  },
}

export default {
  name: 'newCaseStudies',
  props: {
    _key: String,
  },
  async fetch() {
    const posts = await this.$sanity.fetch(postsQuery)
    this.posts = posts
  },
  data() {
    return {
      serializers,
      posts: [],
    }
  },
  methods: {
    async getAllPosts() {
      const posts = await this.$sanity.fetch(postsQuery)
      this.posts = posts
    },
   
  },
}
</script>
