<template>
  <div class="flex justify-between items-center mb-6">
    <div class="flex space-x-3">
      <img
        class="self-center overflow-hidden rounded-full ring-2 p-1 ring-gray-200"
        src="/avatar.png"
        width="32"
        height="32"
      />
      <div>
        <h6 class="font-medium text-sm text-slate-700 leading-4">
          Pradeep Kumar
          <span class="block text-xs text-slate-400 font-normal">2 hours ago</span>
        </h6>
      </div>
    </div>

    <dropdown v-if="!props.noAction">
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
import { Edit2Icon, Trash2Icon, EyeIcon, EyeOff } from 'lucide-vue-next'
import DropdownItem from '../ui/DropdownItem.vue'
import { AppContent } from '../../utils/content'
import Divider from '../ui/Divider.vue'
import { useConfirmStore } from '../../stores/confirm'
import { usePostStore } from '@/stores/post'

const props = defineProps<{
  noAction?: boolean
  postId: string | undefined
}>()

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
