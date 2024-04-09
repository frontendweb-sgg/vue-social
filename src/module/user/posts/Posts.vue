<template>
  <div class="grid grid-cols-12">
    <div class="col-span-8">
      <post-skeleton v-if="postStore.loading" />
      <post v-else v-for="post in postStore.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Post from '../../../components/posts/Post.vue'
import { onMounted } from 'vue'
import { useUserStore } from '../../../stores/user'
import { usePostStore } from '../../../stores'

const userStore = useUserStore()
const postStore = usePostStore()

onMounted(() => userStore.getLoggedInUserPost())
</script>

<style></style>
