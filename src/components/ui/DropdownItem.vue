<template>
  <router-link v-if="props.to" :class="classes" :to="props.to"
    ><icon :size="14" class="mr-2" /> <slot></slot
  ></router-link>
  <button v-else :class="classes"><icon :size="14" class="mr-2" /><slot></slot></button>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import * as icons from 'lucide-vue-next'
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    icon?: String
  }>(),
  {
    to: '#'
  }
)

const icon = computed(() => icons[props.icon as keyof typeof icons])
const classes =
  'flex py-2 text-slate-600 px-4 hover:text-rose-600 items-center space-x-2 text-xs font-medium hover:bg-gray-50 w-full'
</script>

<style></style>
