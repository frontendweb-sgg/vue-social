<template>
  <div class="shadow-sm bg-white border-gray-50 border p-4 rounded-md mb-5">
    <post-title
      :user-id="userId"
      :name="userName"
      :date="formatDate"
      class="mb-5"
      :postId="post?.id"
    >
      <template #image>
        <user-avatar v-if="user?.id === userId" />
        <div class="shadow-md rounded-full w-8 h-8" v-else>
          <img
            :src="avatarImg ?? '/avatar-1.png'"
            class="rounded-full bg-transparent w-8 h-8 overflow-hidden"
          />
        </div>
      </template>
    </post-title>
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
import UserAvatar from '../common/UserAvatar.vue'
import { imageUrl } from '@/utils/constants'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  post: IPost
}>()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const avatarImg = computed(() => `${imageUrl}${(props.post.user as IUser).avatar}`)
const images = props.post.images as unknown as string[]
const userName = computed(() => (props.post.user as IUser).name)
const formatDate = computed(() => formatDistanceToNow(props.post.createdAt!))
const userId = computed(() => (props.post.user as IUser).id)
</script>

<style></style>
