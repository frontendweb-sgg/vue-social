<template>
  <div class="flex justify-between items-center">
    <div class="flex space-x-3">
      <slot name="image"></slot>
      <div>
        <h6 class="font-medium t{ext-sm text-slate-700 leading-5">
          {{ name }}
          <span class="block text-xs text-slate-400 font-normal">{{ formatDate }}</span>
        </h6>
      </div>
    </div>
    <dropdown v-if="userId === id">
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
import { useLoggedInUser } from '../../composable/useUser'
import { computed } from 'vue'
import { formatDistanceToNow } from 'date-fns'

const props = defineProps<{
  noAction?: boolean
  postId: string | undefined
}>()

const confirmStore = useConfirmStore()
const postStore = usePostStore()

const { id: postId, createdAt } = postStore.getPostById(props.postId!)

const { userId } = useLoggedInUser()
const { name, id } = postStore.getPostUser(postId!)

function deletePost() {
  confirmStore.confirmDelete({
    onConfirm: () => {
      postStore.deletePost(props.postId!)
      confirmStore.cancelConfirm()
    }
  })
}
const formatDate = computed(() => (createdAt ? formatDistanceToNow(createdAt!) : createdAt))
</script>

<style></style>
