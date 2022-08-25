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
import Wildcard from '~/components/Wildcard'
import Storyteller from '~/components/Storyteller'
import newcasestudies from '~/components/newcasestudies'
import Bigquote from '~/components/Bigquote'

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
    wildcard: Wildcard,
    storyteller: Storyteller,
    newcasestudies: newcasestudies,
    bigquote: Bigquote,
  },
}

export default {
  async fetch() {
    const result = await this.$sanity.fetch(query, {
      slug: 'case-studies',
    })
    this.page = result.page
  },
  data: () => ({ serializers, page: {} }),
}
</script>

<style>
  .v-application .primary--text{
        color: #039be5 !important;
    caret-color: #039be5 !important;
  }
  .v-application .primary{
    background-color: #039be5 !important;
    border-color: #039be5 !important;
  }
  
</style>