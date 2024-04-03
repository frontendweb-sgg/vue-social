<template>
  <div class="border py-4 border-gray-50 mb-6 bg-white shadow-sm rounded-md">
    <post-title no-action class="px-4 mb-4" />
    <form @submit.prevent="handlePost" novalidate>
      <v-textarea
        :rows="4"
        class="rounded-none p-4 bg-gray-200/20 focus:bg-gray-100"
        v-model="state.content"
        placeholder="What's in your mind..."
      ></v-textarea>
      <span v-if="state.images.length > 5" class="text-xs text-red-600 px-3">{{
        AppContent.moreThan5Image
      }}</span>

      <display-images v-if="state.images.length" @update="handleRemove" :images="state.images" />
      <video-display v-if="state.videoUrl" :data="state.videoUrl"></video-display>

      <Box class="px-4 pt-3">
        <Box class="space-x-4 text-slate-600">
          <file-upload
            accept="image/*"
            icon="Camera"
            v-model="state.images"
            :class="['hover:text-rose-600', state.images.length && 'text-rose-600']"
            title="Upload image"
            multiple
            ref="imageUploadRef"
          />
          <file-upload
            accept="video/*"
            icon="Video"
            class="hover:text-rose-600"
            title="Upload video"
            v-model="state.videoUrl"
            ref="videoUploadRef"
            mode="video"
          />
          <v-select
            :get-option-label="(option) => option.title"
            v-model="state.postSatus"
            :options="PostStatus"
          />
        </Box>
        <div class="space-x-2">
          <Button @click="handleReset" type="reset" class="hover:bg-gray-100">
            {{ AppContent.reset }}
          </Button>
          <Button type="submit" class="bg-indigo-700 border border-indigo-700 text-white">
            {{ AppContent.post }}
          </Button>
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
import DisplayImages from '../ui/DisplayImages.vue'
import Button from '../ui/Button.vue'
import VideoDisplay from '../ui/VideoDisplay.vue'
import { Camera, Video } from 'lucide-vue-next'
import { computed, reactive, ref } from 'vue'
import { usePostStore } from '../../stores/post'
import { PostStatus } from '../../utils/constants'
import { AppContent } from '../../utils/content'
import type { IPost } from '../../types/types'
import { Status, PostStatusEnum } from '../../utils/enums'

const postStore = usePostStore()

let state = reactive<IPost>({
  content: '',
  images: [],
  postSatus: PostStatusEnum.Public,
  videoUrl: null,
  code: '',
  tags: []
})

const imageUploadRef = ref()
const videoUploadRef = ref()

function handlePost(event: Event) {
  if (state.images.length > 5) return
  postStore.addPost(state)
}
function handleReset() {
  state.images = []
  imageUploadRef.value.reset()
  videoUploadRef.value.reset()
}

function handleRemove(index: number) {
  state.images.splice(index, 1)
}
</script>

<style></style>
