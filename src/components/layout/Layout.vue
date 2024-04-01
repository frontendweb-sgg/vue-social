<template>
  <div class="flex flex-col h-screen">
    <Header />
    <main class="flex-1">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style>
</style>