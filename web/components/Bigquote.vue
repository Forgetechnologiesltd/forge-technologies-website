<template>
  <div style="position:relative; overflow:hidden;">
      <v-container class="mt-10 pt-16 blue">
        <v-row :z-index="2" class="new-zindex ">
          <v-col cols="1" lg="1">
            <span class="quote-start white--text">“</span>
          </v-col>
          <v-col cols="11" md="12" lg="8">
            <SanityContent
              class="black--text mb-12 mt-8 mt-lg-14 text-h4 white--text"
              :blocks="this.quoteText"
            />
            <span class="white--text">-{{this.quoteName}}, {{this.quoteTitle}},<b> {{this.quoteCompany}}</b></span>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: 'bigquote',
  props: {
    quoteText: Array,
    quoteName: String,
    quoteTitle: String,
    quoteCompany: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.theme--light.v-image {
  color: #37474f !important;
}
.quote-start{
  font-size:300px;
  line-height: 358px;
  @media screen and (max-width:728px){
    font-size:100px;
  }
}
</style>
