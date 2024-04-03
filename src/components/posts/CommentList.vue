<template>
  <div class="mt-4 mb-3">
    <div
      class="flex group items-start space-x-3 relative py-1"
      v-for="comment of props.comments"
      :key="comment._id"
    >
      <div class="pt-1">
        <img src="/avatar.png" class="rounded-full overflow-hidden" width="25" />
      </div>
      <div>
        <h6 class="text-sm font-medium text-slate-800">Pradeep Kumar</h6>
        <p class="text-sm text-slate-600">{{ comment.message }}</p>
      </div>

      <button
        v-if="userId === comment.user"
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
import type { IComment } from '../../types/types'
import { X } from 'lucide-vue-next'
import { useAuthStore, usePostStore } from '../../stores'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { userId } = storeToRefs(authStore)

const props = defineProps<{
  comments: IComment[] | undefined
  postId: string | undefined
}>()

const postStore = usePostStore()

function handleDelete(id: string | undefined) {
  postStore.deleteComment(props.postId!, id!)
}
</script>

<style></style>
