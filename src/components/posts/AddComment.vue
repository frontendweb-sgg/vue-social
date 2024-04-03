<template>
  <form @submit.prevent="handleSubmit" class="border-t border-gray-50 pt-3">
    <display-images v-if="state.images?.length" @update="handleRemove" :images="state.images" />
    <div class="flex items-center gap-1 dark:border-slate-700/40">
      <img :src="avatar !== '' ? avatar : '/avatar.png'" class="w-6 h-6 rounded-full mr-2" />
      <div class="flex-1 py-2 flex relative overflow-hidden">
        <textarea
          placeholder="Add comment..."
          class="flex-1 text-sm py-2 outline-none bg-transparent"
          rows="1"
          v-model="state.message"
        ></textarea>

        <div class="!top-2 pr-2 uk-drop uk-open ml-2" uk-drop="pos: bottom-right; mode: click">
          <file-upload ref="imageUploadRef" v-model="state.images" multiple icon="Camera" />
        </div>
      </div>

      <button
        type="submit"
        class="w-8 h-8 bg-slate-100 hover:bg-slate-200 text-sm rounded-full flex items-center justify-center text-slate-500 hover:text-rose-500"
      >
        <SendIcon :size="18" />
      </button>
    </div>
  </form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { AppContent } from '../../utils/content'
import { SendIcon, Camera } from 'lucide-vue-next'
import FileUpload from '../ui/FileUpload.vue'
import { reactive, ref } from 'vue'
import type { IComment } from '../../types/types'
import { Status } from '../../utils/enums'
import DisplayImages from '../ui/DisplayImages.vue'
import { useAuthStore, usePostStore } from '../../stores'
import { storeToRefs } from 'pinia'
const state = reactive<IComment>({
  message: '',
  status: Status.Pending,
  images: []
})
const imageUploadRef = ref()

const props = defineProps<{
  postId: string | undefined
}>()

const postStore = usePostStore()
const authStore = useAuthStore()
const { avatar } = storeToRefs(authStore)

function handleReset() {
  state.images = []
  imageUploadRef.value.reset()
}
function handleRemove(index: number) {
  state.images?.splice(index, 1)
}
function handleSubmit() {
  if (state.message !== '') {
    postStore.addComment(props.postId!, state)
    state.message = ''
    handleReset()
  }
}
</script>

<style></style>
