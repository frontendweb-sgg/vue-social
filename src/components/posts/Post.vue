<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-5">
    <post-title></post-title>
    {{ post }}
    <div class="w-full rounded-md overflow-hidden h-[250px]">
      <div class="relative w-full" v-for="image in post.images" :key="image">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import type { IPost } from '@/types/types'
import PostTitle from './PostTitle.vue'

const props = defineProps<{
  post: IPost
}>()
</script>


<style>
</style>