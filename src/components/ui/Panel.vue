<template>
  <div class="bg-white shadow-sm p-4 border border-gray-50">
    <div v-if="label" class="flex items-center border-b border-gray-100 pb-3 mb-3 justify-between">
      <h6 class="text-sm">{{ label }}</h6>
      <button @click="$emit('update')">
        <EditIcon :size="16" />
      </button>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { EditIcon } from 'lucide-vue-next'
defineProps<{
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update'): void
}>()
</script>

<style></style>
