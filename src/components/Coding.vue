<script setup lang="ts">
import CrouselItemCoding from './CrouselItemCoding.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <CrouselItemCoding />
</template>

<style scoped>
@media (min-width: 1024px) {
  .carousel{
      width: 50vw;
      margin-left: 5rem;
  }
}
</style>