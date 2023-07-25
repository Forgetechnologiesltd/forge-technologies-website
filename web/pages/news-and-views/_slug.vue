<template>
  <v-container class="pa-0" fluid tag="article">
    <v-container fluid class="pa-0 hero" id="hero">
      <v-row no-gutters>
        <v-col class="mx-0 px-0">
          <v-img
            :min-height="'calc(60vh)'"
            :max-height="'calc(60vh)'"
            :src="$imageHelper(post.mainImage).url()"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row align="center" class="white--text" justify="start">
                  <v-col
                    class="white--text d-flex flex-column text-left justify-content-md-start"
                    cols="10"
                    md="8"
                  >
                    <span
                      class="d-block mb-3"
                      v-for="category in post.categories"
                      :key="category._id"
                    >
                      {{ category.title }}
                    </span>
                    <h1
                      class="font-weight-light mb-3 mb-md-5 text-h4 text-md-h2"
                    >
                      {{ post.title }}
                    </h1>
                    <p v-if="post.body">
                      <span
                        >{{
                          new Date(post.publishedAt)
                            | dateFormat('DD MMMM YYYY')
                        }} </span
                      ><span class="dot mx-2 d-inline-block">&#5867;</span>

                      <reading-time :content="post.body"></reading-time>
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-10">
      <v-row>
        <v-col cols="12" lg="3">
          <v-container v-if="post.author" class="mb-0">
            <v-row align="center">
              <v-col
                cols="3"
                sm="4"
                class="pa-0 d-sm-flex d-md-block justify-sm-center"
              >
                <v-avatar class="pa-0" size="80">
                  <v-img
                    :src="
                      $imageHelper(post.author.image)
                        .width(100)
                        .height(100)
                        .url()
                    "
                    contain
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="9" sm="8" class="pa-0 d-sm-flex align-sm-center">
                <div class="justify-sm-start d-sm-inline-flex flex-sm-column">
                  <h2 class="blue-grey--text text--darken-3 text-h6 mb-0">
                    {{ post.author.name }}
                  </h2>
                  <p
                    v-if="post.author.jobTitle"
                    class="blue-grey--text text--darken-3 text-body-2 mb-0"
                  >
                    {{ post.author.jobTitle }}
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="10" lg="7">
          <SanityContent
            class="blue-grey--text text--darken-3 mb-16"
            :blocks="post.body"
            :serializers="serializers"
          />
          
          <v-container v-if="post.author">
            <v-row>
              <v-col cols="12" md="10">
                <h4 class="blue-grey--text text--darken-3 text-h5 mb-0">
                  About the author
                </h4>
                <v-divider class="mb-3"></v-divider>
                <SanityContent
                  class="blue-grey--text text--darken-3"
                  :blocks="post.author.bio"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-avatar class="pa-0 mx-auto d-flex" size="150">
                  <v-img
                    :src="
                      $imageHelper(post.author.image)
                        .width(300)
                        .height(300)
                        .url()
                    "
                    contain
                  ></v-img>
                </v-avatar>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <other-posts></other-posts>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'
import ReadingTime from '~/components/ReadingTime'
import OtherPosts from '~/components/OtherPosts'
import Wildcard from '~/components/Wildcard'
import MainImage from '~/components/MainImage'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
import Youtube from '~/components/Youtube'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.use(VueFilterDateFormat)

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  "categories": categories[]->,
  "author": authors[0].author->,
  body
}`
const serializers = { types: { mainImage: MainImage, youtube: Youtube  } }
export default {
  async fetch() {
    const result = await this.$sanity.fetch(query, {
      slug: `${this.$route.params.slug}`,
    })

    this.post = result
  },
  components: {
    ReadingTime,
    OtherPosts,
    Wildcard,
    Youtube,
  },
  data: () => ({ serializers, post: {} }),
  metaInfo() {
     if (!this || !this.post) {
       return
     }
     return {
       title: this.post.title,
       meta: [
         {
           vmid: 'description',
           name: 'description',
           content: this.post.caption,
         },
         
         {
           vmid: 'og:title',
           property: 'og:title',
           content: this.post.title,
         },
         {
           vmid: 'og:description',
           property: 'og:description',
           content: this.post.caption,
         },
         {
           vmid: 'og:type',
           property: 'og:type',
           content: 'article',
         },
         {
           vmid: 'og:image',
           property: 'og:image',
           content: this.$imageHelper(this.post.mainImage).url()
             ? this.$imageHelper(this.post.mainImage).url()
             : '',
         },
       ],
     }
  },
}
</script>
<style lang="scss" scoped>
.dot {
  font-size: 36px;
  line-height: 12px;
  vertical-align: middle;
}
h2 {
  font-size: 34px;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em;
  text-transform: false;
  margin-bottom: 16px;
}
h3 {
  font-size: 24px;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
  text-transform: false;
  margin-bottom: 10px;
}
h4 {
  font-size: 20px;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  text-transform: false;
  margin-bottom: 5px;
}
ol {
  margin-bottom: 10px;
}
</style>
