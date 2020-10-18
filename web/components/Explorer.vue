<template>
<div>
  {{explorerItems}}
</div>
</template>

<script>

export default {
  name: "Explorer",
  props: {
      explorerItems: Array,
  }
}

</script>

<style lang="scss" scoped>
img{max-width: 100%;}
</style>
