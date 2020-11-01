<template>
  <v-container
    :id="`ruler-${_key}`"
    tag="section"
    class="my-md-6 container--wider"
  >
    <h1 class="text-center text-h4 text-md-h3 mb-6">{{ heading }}</h1>
    <v-row justify="space-between">
      <v-col
        v-for="teamMember in teamMembers"
        :key="teamMember._key"
        cols="12"
        md="5"
      >
        <v-card class="pa-3" flat>
          <v-container class="mb-0">
            <v-row align="center">
              <v-col cols="3" md="2" class="pa-0">
                <v-avatar class="d-flex mr-3 pa-0" size="60">
                  <v-img
                    :src="
                      $imageHelper(teamMember.image)
                        .width(100)
                        .height(100)
                        .url()
                    "
                    contain
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="9" md="10" class="pa-0">
                <h2 class="text-blue-grey text-lighten-4 text-h6 mb-0 mt-3">
                  {{ teamMember.name }}
                </h2>
                <p class="text-blue-grey text-lighten-4 text-body-2">
                  {{ teamMember.jobTitle }}
                </p>
              </v-col>
            </v-row>
          </v-container>
          <hr class="blue-grey lighten-5 mb-6" />
          <SanityContent
            class="text-blue-grey text-lighten-4 text-body-2"
            :blocks="teamMember.bio"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Ruler',
  props: {
    heading: String,
    teamMembers: Array,
    _key: String,
  },
}
</script>

<style lang="scss" scoped></style>
