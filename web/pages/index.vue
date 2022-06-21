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
import Innocent from '~/components/Innocent'
import Sage from '~/components/Sage'
import Company from '~/components/Company'
import Contact from '~/components/Contact'

const ctaQuery = `cta {
        title,
        kind,
        "slug": landingPageRoute->slug.current
      }`

const query = groq`*[_type == "route" && slug.current == "homepage"][0]{
  page-> {
    title,
    slug,
    openGraph,
    content[] {
      ...,
      ${ctaQuery},
      caregiverItems[]{
        ...,
        ${ctaQuery},
      },
      explorerItems[]{
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
    innocent: Innocent,
    sage: Sage,
    company: Company,
    contact: Contact,
  },
}

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query)

    this.page = result.page
  },
  data: () => ({ serializers, page: {} }),
  metaInfo() {
    if (!this || !this.page || !this.page.openGraph) {
      return
    }
    return {
      title: this.page.openGraph.title,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: this.page.openGraph.description,
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: this.page.openGraph.keywords
            ? this.page.openGraph.keywords.join(',')
            : '',
        },
        {
          vmid: 'og:title',
          property: 'og:title',
          content: this.page.openGraph.title,
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: this.page.openGraph.description,
        },
        {
          vmid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.page.openGraph.image
            ? this.$imageHelper(this.page.openGraph.image).url()
            : '',
        },
      ],
    }
  },
}
</script>
