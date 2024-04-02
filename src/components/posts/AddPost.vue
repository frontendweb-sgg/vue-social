<template>
  <div class="border py-4 border-gray-50 mb-6 bg-white shadow-sm rounded-md">
    <post-title no-action class="px-4 mb-4" />
    <form enctype="multipart/form-data" @submit.prevent="handlePost" novalidate>
      <v-textarea
        :rows="4"
        class="rounded-none p-4 bg-gray-100/35"
        v-model="state.description"
        placeholder="What's in your mind..."
      ></v-textarea>
      <span v-if="state.images.length > 5" class="text-xs text-red-600 px-3">{{
        AppContent.moreThan5Image
      }}</span>
      <display-images v-if="state.images.length" @update="handleRemove" :images="state.images" />
      <Box class="px-4 pt-3">
        <Box class="space-x-4 text-slate-600">
          <file-upload
            accept="image/*"
            icon="Camera"
            v-model="state.images"
            :class="['hover:text-rose-600', state.images.length && 'text-rose-600']"
            title="Upload image"
            multiple
          />
          <file-upload
            accept="video/*"
            icon="Video"
            v-model="state.videoUrl"
            class="hover:text-rose-600"
            title="Upload video"
          />
          <v-select
            :get-option-label="(option) => option.title"
            v-model="state.status"
            :options="PostStatus"
          />
        </Box>
        <div>
          <button type="button" @click="handleReset">{{ AppContent.reset }}</button>
          <button type="submit" class="bg-indigo-700 px-6 py-1 rounded-md text-white">
            {{ AppContent.post }}
          </button>
        </div>
      </Box>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import VTextarea from '../ui/Textarea.vue'
import PostTitle from './PostTitle.vue'
import FileUpload from '../ui/FileUpload.vue'
import VSelect from '../ui/Select.vue'
import Box from '../ui/Box.vue'
import { Camera, Video } from 'lucide-vue-next'
import { reactive } from 'vue'
import { usePostStore } from '../../stores/post'
import { PostStatus } from '../../utils/constants'
import { AppContent } from '../../utils/content'
import DisplayImages from '../ui/DisplayImages.vue'
const initialState = {
  description: '',
  images: [],
  status: 'public',
  videoUrl: ''
}
let state = reactive(initialState)

const postStore = usePostStore()

function handlePost(event: Event) {
  console.log(state)
  if (state.images.length > 5) return
  // postStore.addPost(state)
}
function handleReset() {
  state.description = ''
  state.images = []
}

// function uploader(values: File[]) {
//   // state.images = values as any
// }

function handleRemove(index: number) {
  state.images.splice(index, 1)
}
</script>

<style></style>
