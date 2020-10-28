<template>
  <div>
    <v-carousel light>
      <v-carousel-item v-for="item in explorerItems" :key="item._key">
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h3">
            {{ item.heading }}
          </h3>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Explorer',
  props: {
    explorerItems: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
