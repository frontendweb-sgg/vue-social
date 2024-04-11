<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-5">
    <post-title class="mb-5" :postId="post?.id">
      <template #image>
        <user-avatar class="h-8 w-8" v-if="loggedInUser" />
        <div class="shadow-md rounded-full w-8 h-8" v-else>
          <img
            :src="post?.user?.avatar?.url ?? '/avatar-1.png'"
            class="rounded-full bg-transparent w-8 h-8 overflow-hidden"
          />
        </div>
      </template>
    </post-title>
    <p v-if="post.content" class="text-sm mb-4">{{ post.content }}</p>
    <carousel v-if="props.post.images?.length" :images="post.images" />
    <likes :post-id="post.id" :likes="post.likes" />
    <comment-list v-if="post.comments?.length" :post-id="post.id" :comments="post.comments" />
    <add-comment :post-id="props.post.id" />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Carousel from '../ui/Carousel.vue'
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import Likes from './Likes.vue'
import PostTitle from './PostTitle.vue'
import UserAvatar from '../common/UserAvatar.vue'
import type { IPost, IUser, Media } from '../../types/types'
import { computed } from 'vue'
import { imageUrl } from '../../utils/constants'
import { useLoggedInUser } from '../../composable/useUser'

const props = defineProps<{
  post: IPost
}>()

const { userId } = useLoggedInUser()

const loggedInUser = computed(() => (props.post.user as IUser).id === userId.value)
</script>

<style></style>
