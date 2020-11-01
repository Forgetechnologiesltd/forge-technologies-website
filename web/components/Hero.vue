<template>
  <v-container
    fluid
    class="pa-0 hero"
    no-gutters
    :id="`hero-${_key}`"
    tag="section"
  >
    <v-row no-gutters>
      <v-col class="mx-0 px-0">
        <v-img
          :min-height="'calc(60vh)'"
          :max-height="'calc(60vh)'"
          :src="$imageHelper(backgroundImage).url()"
          gradient="rgba(0,0,0,.33), rgba(0,0,0,.7)"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="10" md="8">
                  <h2
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h2',
                    ]"
                    class="font-weight-light mb-3 mb-md-5"
                  >
                    {{ heading }}
                  </h2>

                  <SanityContent
                    class="col-12 col-md-8 text-center justify-md-center px-0 mx-auto"
                    :blocks="tagline"
                  />
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
  name: 'Hero',
  props: {
    backgroundImage: Object,
    cta: Object,
    heading: String,
    tagline: Array,
    _key: String,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  background-color: #37474f;
}
img {
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}
</style>
