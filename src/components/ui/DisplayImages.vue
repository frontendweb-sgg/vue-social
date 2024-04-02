<template>
  <div class="flex items-center justify-evenly space-x-1 px-2 pt-2">
    <div
      v-for="(img, index) of props.images"
      :key="img.name"
      :style="{
        width: `${100 / props.images.length}%`
      }"
      class="overflow-hidden group relative h-80 rounded-md bg-gray-50 border-white before:bg-gray-900/60 before:opacity-0 hover:before:opacity-100 before:w-full before:h-full before:absolute before:content-['']"
    >
      <video class="h-80 w-full" controls>
        <source :src="blobUrl(img)" :type="img.type" />
      </video>

      <img v-if="props.mode === 'img'" :src="blobUrl(img)" class="object-cover h-16 w-full" />
      <video class="h-16 w-full" controls>
        <source :src="blobUrl(img)" />
      </video>

      <button
        class="text-white opacity-0 group-hover:opacity-100 absolute right-0 top-0"
        @click="$emit('update', index)"
      >
        <X :size="20" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { X } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    images: File[]
    mode?: 'video' | 'img'
  }>(),
  {
    mode: 'img'
  }
)

defineEmits<{
  (e: 'update', index: number): void
}>()

console.log(props.images)

const blobUrl = (img: File) => URL.createObjectURL(img)
</script>

<style></style>
