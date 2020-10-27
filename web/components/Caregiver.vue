<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col v-for="item in caregiverItems" :key="item.id" cols="12" md="6">
        <v-img
          :min-height="'calc(40vh)'"
          :max-height="'calc(40vh)'"
          :src="$imageHelper(item.image).url()"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.5)"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="left" class="white--text mx-auto" justify="center">
                <v-col class="white--text offset-md-1" xs="6">
                  <h4 class="mb-5 text-h5 text-md-h4 pl-0">
                    {{ item.heading }}
                  </h4>
                  <SanityContent
                    class="text-body-2 col-md-7 pl-0"
                    :blocks="item.shortText"
                  />
                  <v-btn
                    v-if="item.cta"
                    depressed
                    color="primary"
                    nuxt
                    :to="item.cta.slug"
                    >{{ item.cta.title }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Caregiver',
  props: {
    caregiverItems: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
