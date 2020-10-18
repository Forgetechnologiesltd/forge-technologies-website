<template>
  <SanityContent :blocks="page.content" :serializers="serializers" />
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Hero from '~/components/Hero'
import Lover from '~/components/Lover'
import Magician from '~/components/Magician'
import Ruler from '~/components/Ruler'
import Explorer from '~/components/Explorer'
import Creator from '~/components/Creator'
import Caregiver from '~/components/Caregiver'

const query = groq`*[_type == "route" && slug.current == "homepage"][0]{
  page-> {
    title,
    slug,
    content
  }
}`

const serializers = {
  types: {
    hero: Hero,
    lover: Lover,
    magician: Magician,
    ruler: Ruler,
    explorer: Explorer,
    creator: Creator,
    caregiver: Caregiver,
  },
}

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query)

    this.page = result.page
  },
  data: () => ({ serializers, page: {} }),
}
</script>
