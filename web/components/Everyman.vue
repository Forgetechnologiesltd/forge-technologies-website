<template>
  <v-container fluid :id="`everyman-${_key}`" tag="section">
    <v-tabs centered>
      <v-tab v-for="tab in tabs" :key="tab._key">{{ tab.title }}</v-tab>

      <v-tab-item v-for="tab in tabs" :key="tab._key">
        <v-container fluid>
          <v-row>
            <v-col cols="12">
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
  data: () => ({ serializers }),
}
</script>

<style lang="scss" scoped></style>
