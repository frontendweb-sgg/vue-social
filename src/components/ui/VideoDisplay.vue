<template>
  <div class="w-full h-28 relative">
    <button
      class="text-white opacity-0 group-hover:opacity-100 absolute right-0 top-0"
      @click="$emit('update', props.data)"
    >
      <X :size="20" />
    </button>
    <video controls class="w-full h-full">
      <source :src="videoUrl" :type="data.type" />
    </video>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { computed, watch, watchEffect } from 'vue'

const props = defineProps<{
  data: File
}>()

defineEmits<{
  (e: 'update', value: File): void
}>()

const videoUrl = URL.createObjectURL(props.data)
</script>

<style></style>
