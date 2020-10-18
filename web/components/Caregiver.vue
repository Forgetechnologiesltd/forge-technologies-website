<template>
  <div>
    {{ caregiverItems }}
  </div>
</template>

<script>
export default {
  name: 'Caregiver',
  props: {
    caregiverItems: Array,
  },
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
