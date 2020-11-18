<template>
  <div>
    <img :src="$imageHelper(mainImage).auto('format').url()" />
  </div>
</template>

<script>
export default {
  name: 'MainImage',
  props: {
    mainImage: Object,
    _key: String,
  },
}
</script>
