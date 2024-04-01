<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-4">
    <post-title :postId="post?.id"></post-title>

    <carousel :images="post?.images" />
    <!-- <div class="relative w-full" v-for="(image, index) in post.images" :key="index">
        <img :src="image" />
      </div> -->
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import type { IPost } from '../../types/types'
import Carousel from '../ui/Carousel.vue'
import PostTitle from './PostTitle.vue'

const props = defineProps<{
  post: IPost
}>()
</script>

<style></style>
