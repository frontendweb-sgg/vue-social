<template>
  <router-link
    :class="[
      'font-bold flex items-center space-x-1',
      type === 'white' ? 'text-white' : 'text-slate-900'
    ]"
    to="/"
  >
    <waypoints class="mr-2 text-rose-500" /> <span>Vue Social</span>
  </router-link>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { defineProps } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { Waypoints } from 'lucide-vue-next'
const props = withDefaults(
  defineProps<{
    type?: 'black' | 'white'
    to: RouteLocationRaw
  }>(),
  {
    type: 'black',
    to: '/'
  }
)
</script>

<style></style>
