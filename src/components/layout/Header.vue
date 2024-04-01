<template>
  <header class="py-3 border-b border-gray-50">
    <Container class="flex items-center justify-between">
      <Logo color="white" />
      <Navigation />
    </Container>
  </header>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Logo from './Logo.vue'
import Container from '../ui/Container.vue'
import Navigation from './Navigation.vue'
</script>

