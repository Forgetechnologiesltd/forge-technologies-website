<template>
  <v-container>
    <h1>{{ heading }}</h1>
    <v-row>
      <v-col
        v-for="teamMember in teamMembers"
        :key="teamMember._key"
        :cols="() => 12 / teamMembers.lentgh"
      >
        <h2>{{ teamMember.name }}</h2>
        <p>{{ teamMember.jobTitle }}</p>
        <SanityContent :blocks="teamMember.bio" />
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
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
