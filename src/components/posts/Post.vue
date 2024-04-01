<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-5">
    <post-title :postId="post?.id"></post-title>
    <div class="w-full rounded-md overflow-hidden h-[250px]" v-if="post.images?.length">
      <div class="relative w-full" v-for="(image, index) in post.images" :key="index">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import type { IPost } from '../../types/types'
import PostTitle from './PostTitle.vue'

const props = defineProps<{
  post: IPost
}>()
</script>

<style></style>
