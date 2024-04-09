<template>
  <div class="border py-4 border-gray-50 mb-6 bg-white shadow-sm rounded-md">
    <logged-in-user />
    <form @submit.prevent="handlePost" novalidate>
      <v-textarea
        :rows="4"
        class="rounded-none p-4 bg-gray-200/30 focus:bg-gray-200/50"
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
          <Button
            :disabled="postStore.loading"
            type="submit"
            class="bg-indigo-700 border border-indigo-700 text-white"
          >
            <LoaderIcon v-if="postStore.loading" :size="16" class="mr-2 animate-spin" />
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
import FileUpload from '../ui/FileUpload.vue'
import VSelect from '../ui/Select.vue'
import Box from '../ui/Box.vue'
import DisplayImages from '../ui/DisplayImages.vue'
import Button from '../ui/Button.vue'
import VideoDisplay from '../ui/VideoDisplay.vue'
import LoggedInUser from '../common/LoggedInUser.vue'
import type { IPost } from '../../types/types'
import { Camera, Video } from 'lucide-vue-next'
import { reactive, ref } from 'vue'
import { usePostStore } from '../../stores/post'
import { PostStatus } from '../../utils/constants'
import { AppContent } from '../../utils/content'
import { PostStatusEnum } from '../../utils/enums'
import { LoaderIcon } from 'lucide-vue-next'

const postStore = usePostStore()

let state = reactive({
  content: '',
  images: [],
  postSatus: PostStatusEnum.Public,
  videoUrl: null,
  code: '',
  tags: []
})

const imageUploadRef = ref()
const videoUploadRef = ref()

function handleReset() {
  state.images = []
  state.content = ''
  state.videoUrl = null
  imageUploadRef.value.reset()
  videoUploadRef.value.reset()
}

function handleRemove(index: number) {
  state.images.splice(index, 1)
}

function handlePost(event: Event) {
  if (state.images.length > 5) return
  postStore.addPost(state)
  handleReset()
}
</script>

<style></style>
