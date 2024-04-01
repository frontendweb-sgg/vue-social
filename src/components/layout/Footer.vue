<template>
  <footer class="text-center pt-8 pb-6">
    <Container>
      <p class="text-xs">&copy; {{ new Date().getFullYear() }}, All rights reserved.</p>
    </Container>
  </footer>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Container from '../ui/Container.vue'
</script>

<style>
</style>