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
                  <span class="hero-bg-overlay"></span>
                    <span
                      class="d-block mb-3 text-h6 font-weight-black"
                    >
                      CASE STUDY
                    </span>
                    <h1
                      class="font-weight-light mb-4 mb-md-16 text-h4 text-md-h2"
                    >
                      {{ post.title }}
                    </h1>
                    <a class="mt-16 white--text font-weight-black d-flex flex-row text-left align-center" @click="downloadPdf">
                    <img src="https://cdn.sanity.io/images/pyzze960/production/e18be93627f01f3db679d21caaf98a98776887e6-57x58.png" width="28" class="mr-2" />
                      DOWNLOAD PDF
                    </a>
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
        <v-col cols="12" lg="10" class="mb-4 mb-lg-14">
          <span class="blue--text text-h6 text-md-h2 font-weight-normal">{{post.detailTopTitle}}</span>
        </v-col>
        <v-col cols="12" lg="3">
          <div v-if="post.industry">
          <h3 class="black--text mb-0">Industry</h3>
           <span>{{post.industry}}</span>
          </div>
          <div v-if="post.services">
          <h3 class="mt-8 mb-0">Services</h3>
           <SanityContent
            class="black--text custom-mb0"
            :blocks="post.services"
            :serializers="serializers"
          />
          </div>
        </v-col>
        <v-col cols="12" md="10" lg="5">
          
          <SanityContent
            class="black--text mb-16"
            :blocks="post.detailTopBody"
            :serializers="serializers"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="blue py-16">
      <v-container
      tag="section"
      class="mt-14 white--text py-8 py-md-16"
      >
      <h2 class="text-center text-h3 text-md-h1 mb-6 font-bold pb-16">Highlights</h2>
      <v-row>
        <v-col
        cols="12"
        md="4"
        class="text-h5 text-md-h3 px-10 text-center"
        >
        {{post.highlight1}} 
        </v-col>
        <v-col
        cols="12"
        md="4"
         class="text-h5 text-md-h3 px-10 text-center"
        >
        {{post.highlight2}} 
        </v-col>
        <v-col
        cols="12"
        md="4"
         class="text-h5 text-md-h3 px-10 text-center"
        >
        {{post.highlight3}} 
        </v-col>
      </v-row>
        
      </v-container>
    </div>

     <v-container class="mt-10">
      <v-row>
        <v-col cols="12" lg="3">
        </v-col>
        <v-col cols="12" md="10" lg="5">
          <span class="blue--text text-h6 text-md-h2 font-weight-normal">{{post.detailBottomTitle}}</span>
          <SanityContent
            class="black--text mb-16 mt-4 mt-lg-14"
            :blocks="post.detailBottomBody"
            :serializers="serializers"
          />
        </v-col>
        
      </v-row>
    </v-container>

    <div style="position:relative; overflow:hidden;">
    
      <v-container class="mt-10 py-16">
        <v-row :z-index="2" class="new-zindex pb-16">
          <v-col cols="1" lg="1">
            <span class="quote-start blue--text">“</span>
          </v-col>
          <v-col cols="11" md="10" lg="7">
            <SanityContent
              class="black--text mb-6 mt-4 mt-lg-14 text-h4"
              :blocks="post.detailQuote"
              :serializers="serializers"
            />

            <span class="">-{{post.detailQuoteName}}, {{post.detailQuoteTitle}},<b> {{post.detailQuoteCompany}}</b></span>
            
            <div class="companyLogoImg mt-4">
              <v-img :src="$imageHelper(post.detailQuoteCompanyLogo).auto('format').url()"></v-img>
            </div>
            

          </v-col>
          
        </v-row>
        <div class="bgnew"></div>
      </v-container>
      
    </div>
    <other-case-studies></other-case-studies>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <Subscribe :download-link="post.pdfLinkOrId"></Subscribe>
    </v-dialog>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'
import ReadingTime from '~/components/ReadingTime'
import OtherCaseStudies from '~/components/OtherCaseStudies'
import Wildcard from '~/components/Wildcard'
import MainImage from '~/components/MainImage'
import Subscribe from '~/components/Subscribe'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
Vue.use(VueFilterDateFormat)

const query = groq`*[_type == "casestudy" && slug.current == $slug][0]{
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
const serializers = { types: { mainImage: MainImage } }
export default {
  async fetch() {
    const result = await this.$sanity.fetch(query, {
      slug: `${this.$route.params.slug}`,
    })

    this.post = result
  },
  components: {
    ReadingTime,
    OtherCaseStudies,
    Wildcard,
  },
  methods:{
    downloadPdf(){
      this.dialog = true;
    },
  },
  data: () => ({ serializers, post: {} , dialog: false}),
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
.hero-bg-overlay{
  background:#000;
  position:absolute;
  width:100%;
  height:100%;
  display:block;
  top:0;
  left:0;
  z-index:-1;
  opacity:.5;
}
.custom-mb0 p{
  margin-bottom:0px;
}
.detailTopTitle{
  color:#039BE5;
  font-size:4rem;
  line-height:4rem;
}
.bgnew {
    content: "";
    position: absolute;
    width: 110%;
    height: 84%;
    top: 8%;
    left: -5%;
    z-index: 0;
    background: #f1f2f2;
    transform: rotate(3deg);
}
.new-zindex{
  z-index:1;
  position:relative;
}
.companyLogoImg{
  width:260px;
  border-radius:10px;
  background:#FFF;
  padding:20px;
}

.quote-start{
  font-size:300px;
  margin-top:-30px;
  @media screen and (max-width:728px){
    font-size:100px;
  }
}
</style>
