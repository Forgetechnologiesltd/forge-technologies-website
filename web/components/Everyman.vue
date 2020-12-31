<template>
  <v-container
    no-gutters
    fluid
    :id="componentId"
    tag="section"
    class="px-0 overflow--hidden"
  >
    <v-sheet
      color="primary"
      class="pb-2"
      v-sticky
      sticky-offset="stickyOffset"
      sticky-z-index="4"
    >
      <v-tabs
        centered
        v-model="tab"
        background-color="primary"
        slider-size="5"
        dark
        class="px-0"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab
          class="text-subtitle-1 white--text"
          v-for="tab in tabs"
          :key="tab._key"
          @click="scrollToBar()"
          >{{ tab.title }}</v-tab
        >
      </v-tabs>
    </v-sheet>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab._key">
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" class="pa-0">
              <SanityContent :blocks="tab.content" :serializers="serializers" />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import Hero from '~/components/Hero'
import Lover from '~/components/Lover'
import Magician from '~/components/Magician'
import Ruler from '~/components/Ruler'
import Explorer from '~/components/Explorer'
import Creator from '~/components/Creator'
import Caregiver from '~/components/Caregiver'
import Outlaw from '~/components/Outlaw'
import Jester from '~/components/Jester'

const serializers = {
  types: {
    lover: Lover,
    magician: Magician,
    ruler: Ruler,
    explorer: Explorer,
    creator: Creator,
    caregiver: Caregiver,
    outlaw: Outlaw,
    jester: Jester,
  },
}

export default {
  name: 'Everyman',
  props: {
    tabs: Array,
    _key: String,
  },
  data() {
    return {
      tab: null,
      serializers,
      componentId: `everyman-${this._key}`,
      stickyOffset: { top: this.$vuetify.breakpoint.mdAndUp ? 100 : 70 },
    }
  },
  methods: {
    scrollToBar() {
      var offset = this.$scrollHelper.isScrolled ? 27 : -45
      this.$vuetify.goTo(`#${this.componentId}`, {
        easing: 'easeOutCubic',
        duration: 730,
        offset,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
