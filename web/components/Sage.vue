<template>
  <div>
    <v-container fluid class="pa-0 mb-7">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            src="/forge-values-bg.png"
            :contain="$vuetify.breakpoint.mdAndUp"
          >
            <v-container fill-height>
              <v-row class="mx-auto" justify="center">
                <v-col
                  class="justify-center mx-auto text-center px-0"
                  cols="10"
                  md="6"
                >
                  <v-avatar class="mr-3 ml-3" size="60" tile>
                    <v-img src="/forge-logo-icon.svg" contain></v-img>
                  </v-avatar>
                  <p class="text-body-2">Forge Values</p>
                  <h4 class="mb-0 text-h5 text-md-h4 pl-0">
                    {{ heading }}
                  </h4>
                  <SanityContent
                    class="text-body-2 col-12 col-md-8 px-0 mx-auto justify-center"
                    :blocks="quote"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Sage',
  props: {
    heading: String,
    quote: Array,
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
</style>
