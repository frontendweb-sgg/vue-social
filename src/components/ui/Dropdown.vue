<template>
  <div class="relative z-10" v-outside="handleClose">
    <slot name="button" v-bind="{ handleToggle }">
      <button @click="handleToggle"><EllipsisIcon :size="20" /></button>
    </slot>
    <div
      v-if="open"
      class="absolute border border-gray-50 p-2 right-0 min-w-[160px] rounded-md bg-white shadow-sm"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useToggle } from '../../hooks/useToggle'
import { EllipsisIcon } from 'lucide-vue-next'
const { open, handleClose, handleToggle } = useToggle()
</script>

<style></style>
