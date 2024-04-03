<template>
  <div class="flex justify-between items-center">
    <div class="flex space-x-3">
      <img :src="avatar" class="rounded-full bg-transparent w-8 h-8 overflow-hidden" />
      <div>
        <h6 class="font-medium t{ext-sm text-slate-700 leading-5">
          {{ name }}
          <span class="block text-xs text-slate-400 font-normal">{{ date }}</span>
        </h6>
      </div>
    </div>
    <dropdown v-if="userId === props.userId">
      <dropdown-item icon="Edit2Icon">
        {{ AppContent.edit }}
      </dropdown-item>
      <dropdown-item icon="EyeIcon">
        {{ AppContent.active }}
      </dropdown-item>
      <dropdown-item icon="EyeOff">
        {{ AppContent.inactive }}
      </dropdown-item>
      <divider />
      <dropdown-item icon="Trash2Icon" @click="deletePost">
        {{ AppContent.delete }}
      </dropdown-item>
    </dropdown>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Dropdown from '../ui/Dropdown.vue'
import DropdownItem from '../ui/DropdownItem.vue'
import Divider from '../ui/Divider.vue'
import { Edit2Icon, Trash2Icon, EyeIcon, EyeOff } from 'lucide-vue-next'
import { AppContent } from '../../utils/content'
import { useConfirmStore } from '../../stores/confirm'
import { usePostStore } from '../../stores/post'
import { useAuthStore } from '../../stores'
import { storeToRefs } from 'pinia'

const props = withDefaults(
  defineProps<{
    noAction?: boolean
    postId: string | undefined
    date: string
    name: string
    avatar: string
    userId: string | undefined
  }>(),
  {
    date: new Date(Date.now()).toDateString(),
    avatar: '/avatar-1.png'
  }
)

const authStore = useAuthStore()
const { userId } = storeToRefs(authStore)
const confirmStore = useConfirmStore()
const postStore = usePostStore()
function deletePost() {
  confirmStore.confirmDelete({
    onConfirm: () => {
      postStore.deletePost(props.postId!)
      confirmStore.cancelConfirm()
    }
  })
}
</script>

<style></style>
