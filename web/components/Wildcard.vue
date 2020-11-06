<template>
  <v-container
    :id="`wildcard-${_key}`"
    tag="section"
    class="mt-6 container--narrower"
  >
    <v-row>
      <v-col cols="12">
        <SanityContent :blocks="block" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Magician',
  props: {
    block: Object,
    _key: String,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
h3 {
  font-size: 48px;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal;
  text-transform: false;
  margin-bottom: 20px;
}
h4 {
  font-size: 34px;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em;
  text-transform: false;
  margin-bottom: 16px;
}
h5 {
  font-size: 24px;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal;
  text-transform: false;
}
</style>
