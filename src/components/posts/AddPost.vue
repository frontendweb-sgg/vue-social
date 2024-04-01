<template>
  <div class="border border-gray-50 p-4 mb-6 bg-white shadow-sm rounded-md">
    <!-- <post-title no-action /> -->
    <form enctype="multipart/form-data" @submit.prevent="handlePost" novalidate class="space-y-4">
      <v-input placeholder="Title" name="title" v-model="state.title" />
      <v-textarea v-model="state.description" placeholder="Description"></v-textarea>
      <file-upload />
      <button>Add</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import VInput from '../ui/Input.vue'
import VTextarea from '../ui/Textarea.vue'
import PostTitle from './PostTitle.vue'
import { reactive } from 'vue'
import { usePostStore } from '../../stores/post'
import FileUpload from '../ui/FileUpload.vue'

const state = reactive({
  title: '',
  description: '',
  images: []
})

const postStore = usePostStore()

function handlePost(event: Event) {
  console.log('Submitting :(', state)
  if (state.title == '') return
  postStore.addPost(state)
}
</script>

<style></style>
