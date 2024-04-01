<template>
  <div class="grid grid-cols-12">
    <div class="col-span-8">
      <add-post />
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="col-span-4"></div>
  </div>
</template>

<script lang="ts">
export default {
  components: { Post, AddPost }
}
</script>
<script lang="ts" setup>
import { usePostStore } from '../../../stores/post'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import Post from '../../../components/posts/Post.vue'
import AddPost from '../../../components/posts/AddPost.vue'

const postStore = usePostStore()
const { posts, loading } = storeToRefs(postStore)

onMounted(() => {
  postStore.getPosts()
})
</script>

<style></style>
