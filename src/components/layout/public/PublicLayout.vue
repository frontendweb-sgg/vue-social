<template>
  <div class="flex bg-gray-50 flex-col min-h-full">
    <Header />
    <main class="flex-1 my-6">
      <slot></slot>
    </main>
    <Footer />
  </div>
  <scrolltop />
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue'
import Scrolltop from '../../ui/Scrolltop.vue'
</script>

<style></style>
