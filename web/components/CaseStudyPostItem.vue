<template>
  <v-col cols="12" sm="6" md="4" lg="4" class="d-flex align-stretch">
    <v-card
      outlined
      class="d-flex align-items-stretch flex-column align-content-space-between  gray-bg"
      :to="`/case-studies/${slug.current}`"
    >
      <v-img
        :src="$imageHelper(mainImage).auto('format').url()"
        height="280px"
        max-height="280"
      ></v-img>
       <div class="companyLogoImg mt-5">
              <v-img :src="$imageHelper(detailQuoteCompanyLogo).auto('format').url()"></v-img>
            </div>
      <v-card-text>
        <SanityContent :blocks="excerpt" class="px-6 py-6 font-32 black--text" />
      </v-card-text>

      <v-card-actions class="mt-auto text-head-6 d-flex align-end flex-column pr-6">
        <v-btn
          color="primary"
          text
          nuxt
          
        >
          Read now >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'CaseStudyPostItem',
  props: {
    _key: String,
    excerpt: Array,
    mainImage: Object,
    detailQuoteCompanyLogo: Object,
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
.v-card__title.pt-1 {
  word-break: normal;
}
.gray-bg{
  background-color: #f1f2f2 !important;
}
.font-32{
  font-size: 22px !important;
  line-height: 120% !important;
}
.d-flex.align-stretch a{
border:0px !important;
border-radius: 0px !important;
}
.companyLogoImg{
  width:260px;
  //height: 120px;
  border-radius:10px;
  background:#FFF;
  padding:20px;
  position: absolute;
  left: 50%;
  margin-left: -130px;
  top: 60px;
}
</style>
