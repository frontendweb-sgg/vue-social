<template>
  <h1>User dashboard</h1>

  <post v-for="post in posts" :key="post.id" :post="post" />
</template>

<script lang="ts">
export default {
  components: { Post }
}
</script>
<script lang="ts" setup>
import { usePostStore } from '@/stores/post'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import Post from '../../../components/posts/Post.vue'

const postStore = usePostStore()
const { posts, loading } = storeToRefs(postStore)

onMounted(() => {
  postStore.getPosts()
})
</script>

<style>
</style>