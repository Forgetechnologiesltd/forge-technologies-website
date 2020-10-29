<template>
  <div>
    <v-container fluid class="pa-0 mb-7">
      <v-row no-gutters>
        <v-col cols="12">
          <v-img
            :min-height="'calc(32vh)'"
            :max-height="'calc(32vh)'"
            :src="$imageHelper(image).url()"
            gradient="rgba(0,0,0,.4), rgba(0,0,0,.5)"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  :align="side"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text offset-md-1 px-0"
                    :class="[side === 'right' ? ' text-right ' : ' text-left ']"
                    xs="6"
                  >
                    <v-icon v-if="icon" large color="white">
                      mdi-{{ icon.icon }}
                    </v-icon>
                    <h4 class="mb-0 text-h5 text-md-h4 pl-0">
                      {{ heading }}
                    </h4>
                    <SanityContent
                      class="text-body-2 col-md-7 pl-0"
                      :class="[
                        side === 'right'
                          ? ' text-right ml-auto '
                          : ' text-left ',
                      ]"
                      :blocks="shortText"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Jester',
  props: {
    heading: String,
    shortText: Array,
    image: Object,
    side: String,
    icon: Object,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
