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
import Everyman from '~/components/Everyman'
import Outlaw from '~/components/Outlaw'
import Jester from '~/components/Jester'

const ctaQuery = `cta {
        title,
        kind,
        "slug": landingPageRoute->slug.current
      }`

const query = groq`*[_type == "route" && slug.current == $slug][0]{
  page-> {
    title,
    slug,
    content[] {
      ...,
      ${ctaQuery},
      caregiverItems[]{
        ...,
        ${ctaQuery},
      }
    }
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
    everyman: Everyman,
    outlaw: Outlaw,
    jester: Jester,
  },
}

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query, {
      slug: this.$route.params.slug,
    })

    this.page = result.page
  },
  data: () => ({ serializers, page: {} }),
}
</script>
