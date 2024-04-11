<template>
  <div class="mt-4 mb-3">
    <div
      class="flex group items-start space-x-3 relative py-1"
      v-for="comment of props.comments"
      :key="comment._id"
    >
      <div class="pt-1">
        <user-avatar class="h-6 w-6" v-if="userId === comment.user?.id" />
        <img
          :src="comment.user?.avatar.url ?? '/avatar.png'"
          v-else
          class="rounded-full overflow-hidden"
          width="25"
        />
      </div>
      <div>
        <h6 class="text-sm font-medium text-slate-800">
          {{ comment?.user?.name }}
        </h6>
        <p class="text-sm text-slate-600">{{ comment.message }}</p>
      </div>

      <button
        v-if="userId === comment.user?.id"
        @click="() => handleDelete(comment?.id)"
        class="opacity-0 hover:text-rose-500 group-hover:opacity-100 absolute top-3 right-0"
      >
        <X :size="16" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { usePostStore } from '../../stores'
import UserAvatar from '../common/UserAvatar.vue'
import { useLoggedInUser } from '../../composable/useUser'
import type { IComment, IUser } from '../../types/types'

const props = defineProps<{ postId: string | undefined; comments: IComment[] | undefined }>()

const postStore = usePostStore()

const { userId } = useLoggedInUser()

function handleDelete(id: string | undefined) {
  postStore.deleteComment(props.postId!, id!)
}
function commentUserName(user: IUser | string | undefined) {
  return (user as IUser).name
}
</script>

<style></style>
