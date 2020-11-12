<template>
  <v-container fluid :id="componentId" tag="section">
    <v-tabs centered>
      <v-tab v-for="tab in tabs" :key="tab._key" @click="scrollToBar()">{{
        tab.title
      }}</v-tab>

      <v-tab-item v-for="tab in tabs" :key="tab._key">
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12" class="pa-0">
              <SanityContent :blocks="tab.content" :serializers="serializers" />
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
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
    return { serializers, componentId: `everyman-${this._key}` }
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
