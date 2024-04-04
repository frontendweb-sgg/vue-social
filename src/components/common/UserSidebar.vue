<template>
  <div class="flex flex-col items-center text-center py-4 relative">
    <div v-if="selectedAvatar" :class="avatarBoxClass">
      <div class="absolute z-10 top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <button class="text-white" @click="upload" v-if="selectedAvatar">
          <Send />
        </button>
      </div>
      <img :src="selectedAvatar" class="object-cover w-28 h-28" />
    </div>
    <div v-else :class="avatarBoxClass">
      <div
        class="absolute z-10 invisible transition group-hover:visible flex items-center justify-center w-full h-full bg-black/60"
      >
        <file-upload v-model="avatar" icon="Camera" class="text-white" />
      </div>
      <img :src="userStore.user?.avatar ?? '/avatar.png'" class="object-cover w-28 h-28" />
    </div>
    <h6 v-if="user" class="font-medium flex flex-col items-center text-slate-900 mt-4">
      {{ user?.name }}
      <span class="flex items-center text-xs mt-1 font-medium text-slate-500">
        <Smartphone :size="16" class="mr-2" /> {{ user?.mobile }}
      </span>
    </h6>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import FileUpload from '../ui/FileUpload.vue'
import { storeToRefs } from 'pinia'
import { Smartphone, Send } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { useUserStore } from '../../stores/user'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const avatar = ref<File | null>(null)
const selectedAvatar = computed(() => (avatar.value ? URL.createObjectURL(avatar.value!) : null))

function upload() {
  const formdata = new FormData()
  formdata.append('avatar', avatar.value!)
  userStore.updateAvatar(formdata)
  avatar.value = null
}

const avatarBoxClass = computed(() => ({
  'rounded-full relative overflow-hidden bg-transparent shadow-md w-28 h-28 group': true
}))
</script>

<style></style>
