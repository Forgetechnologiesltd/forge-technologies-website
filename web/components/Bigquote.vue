<template>
  <div style="position:relative; overflow:hidden;" class="pt-2">
      <v-container class="mt-10 p-16 ">
        <div class="blue py-6">
        <v-row :z-index="2" class="new-zindex ">
          <v-col cols="1" md="2" lg="2" xl="1" class="d-none d-sm-flex justify-end">
            <span class="quote-start white--text">“</span>
          </v-col>
          <v-col cols="12" md="10" lg="9" xl="8" class="last-col">
            <SanityContent
              class="black--text mb-12 mt-8 mt-lg-14 text-h4 text-lg-h5 text-xl-h4 white--text px-4 px-sm-0"
              :blocks="this.quoteText"
            />
            <span class="white--text px-4 px-sm-0 mb-6 mb-lg-14 d-block">-{{this.quoteName}}, {{this.quoteTitle}},<b> {{this.quoteCompany}}</b></span>
          </v-col>
        </v-row>
        </div>
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
  position: absolute;
  @media screen and (max-width:728px){
    font-size:100px;
  }
}
.custom-width-for-xx{
  width: calc(100%-20px);
  margin-left: 10px;
}

</style>
