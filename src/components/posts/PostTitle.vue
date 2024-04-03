<template>
  <div class="flex justify-between items-center">
    <post-user :date="date" />

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
import DropdownItem from '../ui/DropdownItem.vue'
import Divider from '../ui/Divider.vue'
import { Edit2Icon, Trash2Icon, EyeIcon, EyeOff } from 'lucide-vue-next'
import { AppContent } from '../../utils/content'
import { useConfirmStore } from '../../stores/confirm'
import { usePostStore } from '../../stores/post'
import PostUser from '../common/PostUser.vue'

const props = withDefaults(
  defineProps<{
    noAction?: boolean
    postId?: string | undefined
    date?: string
  }>(),
  {
    date: new Date(Date.now()).toDateString()
  }
)

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
