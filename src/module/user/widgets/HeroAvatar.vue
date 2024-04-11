<template>
  <div class="absolute left-6 -bottom-16 group flex items-center space-x-4">
    <div
      class="w-32 h-32 group ring-4 p-2 ring-white/20 relative group-hover:ring-white/50 rounded-full overflow-hidden"
    >
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
        <user-avatar />
      </div>
    </div>
    <div class="pt-12">
      <h6 class="font-medium text-purple-800 leading-5">
        {{ user?.name }}
        <small class="flex items-center"
          ><Smartphone :size="14" class="mr-2" /> {{ user?.mobile }}</small
        >
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useLoggedInUser } from '../../../composable/useUser'
import { Smartphone, Camera, Send } from 'lucide-vue-next'
import UserAvatar from '../../../components/common/UserAvatar.vue'
import FileUpload from '../../../components/ui/FileUpload.vue'

const avatar = ref<File | null>(null)

const { name, user, changeAvatar } = useLoggedInUser()
const selectedAvatar = computed(() => (avatar.value ? URL.createObjectURL(avatar.value!) : null))

const avatarBoxClass = computed(() => ({
  'rounded-full relative overflow-hidden bg-transparent shadow-md w-28 h-28 group': true
}))

function upload() {
  const formdata = new FormData()
  formdata.append('avatar', avatar.value!)
  changeAvatar(formdata)
  avatar.value = null
}
</script>

<style></style>
