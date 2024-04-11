<template>
  <div class="grid grid-cols-12">
    <div class="col-span-8">
      <add-post />
      <post-skeleton v-if="loading" />
      <post v-else v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Post from '../../../../components/posts/Post.vue'
import AddPost from '../../../../components/posts/AddPost.vue'
import PostSkeleton from '../../../../components/ui/PostSkeleton.vue'
import { usePostStore } from '../../../../stores/post'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const postStore = usePostStore()
const { posts, loading } = storeToRefs(postStore)
onMounted(() => postStore.getPosts())
</script>

<style></style>
