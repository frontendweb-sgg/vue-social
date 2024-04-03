<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-5">
    <post-title
      :user-id="userId"
      :name="userName"
      :date="formatDate"
      class="mb-5"
      :postId="post?.id"
    ></post-title>
    <p v-if="post.content" class="text-sm mb-4">{{ post.content }}</p>
    <carousel v-if="images.length" :images="images" />
    <likes :data="post.likes" :post-id="post.id" />
    <comment-list :user-id="userId" :post-id="post.id" :comments="post.comments" />
    <add-comment :post-id="props.post.id" />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { computed } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import type { IPost, IUser } from '../../types/types'
import Carousel from '../ui/Carousel.vue'
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import Likes from './Likes.vue'
import PostTitle from './PostTitle.vue'

const props = defineProps<{
  post: IPost
}>()

const images = props.post.images as unknown as string[]
const userName = computed(() => (props.post.user as IUser).name)
const formatDate = computed(() => formatDistanceToNow(props.post.createdAt!))
const userId = computed(() => (props.post.user as IUser).id)
</script>

<style></style>
