<template>
  <button class="px-6 py-1 rounded-md">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import type { Color, Size } from '../../types/types'
import { computed } from 'vue'

withDefaults(
  defineProps<{
    color?: Color
    size?: Size
  }>(),
  {
    color: 'primary',
    size: 'sm'
  }
)
</script>

<style></style>
