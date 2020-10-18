<template>
<div>
  <h1>{{heading}}</h1>
  {{shortText}}
  {{image}}
  {{cta}}
{{side}}
</div>
</template>

<script>

export default {
  name: "Creator",
  props: {
      heading: String,
      shortText: Array,
      image: Object,
      cta: Object,
      side:  String
  }
}

</script>

<style lang="scss" scoped>
img{max-width: 100%;}
</style>
