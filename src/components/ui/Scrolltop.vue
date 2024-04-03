<template>
  <button
    @click="scrollTo"
    class="w-10 h-10 bg-slate-400 flex justify-center items-center rounded-full overflow-hidden fixed bottom-5 right-5"
  >
    <ChevronUp :size="20" />
  </button>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ChevronUp } from 'lucide-vue-next'

function scrollTo() {
  window.scroll({ behavior: 'smooth', top: 0 })
}
</script>

<style></style>
