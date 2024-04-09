<template>
  <div class="flex items-center space-x-4 border-b py-4 border-gray-50">
    <button @click="addLike" class="flex items-center space-x-2">
      <span
        class="text-pink-500 bg-pink-100 hover:bg-gray-100 w-7 h-7 flex justify-center items-center rounded-full"
        ><HeartIcon :size="16"
      /></span>
      <span class="font-semibold text-xs text-slate-600">{{ likesCount.length }}</span>
    </button>

    <button @click="removeLike" class="flex items-center space-x-2">
      <span
        class="text-slate-500 bg-slate-100 hover:bg-pink-100 w-7 h-7 flex justify-center items-center rounded-full"
        ><HeartCrack :size="16"
      /></span>
      <span class="font-semibold text-xs text-slate-600">{{ dislikesCount.length }}</span>
    </button>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { usePostStore } from '../../stores'
import type { ILike } from '../../types/types'
import { HeartIcon, HeartCrack } from 'lucide-vue-next'
import { computed } from 'vue'

const postStore = usePostStore()
const props = defineProps<{
  postId: string | undefined
  likes?: ILike[] | undefined
}>()

const likesCount = computed(() => (props.likes ?? []).filter((like) => like.active === true))
const dislikesCount = computed(() => (props.likes ?? []).filter((like) => like.active === false))

const removeLike = () => postStore.removeLike(props.postId!)
const addLike = () => postStore.addLike(props.postId!)
</script>

<style></style>
