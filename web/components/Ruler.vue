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
              <v-col
                cols="3"
                sm="2"
                class="pa-0 d-sm-flex d-md-block justify-sm-center"
              >
                <v-avatar class="pa-0" size="60">
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
              <v-col cols="9" sm="10" class="pa-0 d-sm-flex align-sm-center">
                <div class="justify-sm-start d-sm-inline-flex flex-sm-column">
                  <h2 class="blue-grey--text text--darken-3 text-h6 mb-0">
                    {{ teamMember.name }}
                  </h2>
                  <p class="blue-grey--text text--darken-3 text-body-2 mb-0">
                    {{ teamMember.jobTitle }}
                  </p>
                </div>
                <div class="ml-n2 ml-sm-auto d-sm-inline-flex mt-sm-2">
                  <v-btn
                    v-for="socialLink in teamMember.socialLinks"
                    :key="socialLink._key"
                    icon
                    :href="socialLink.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <fa
                      class="light-blue--text text--darken-2"
                      v-if="socialLink.icon"
                      :icon="['fab', `${socialLink.icon.icon}`]"
                    />
                  </v-btn>
                </div>
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
