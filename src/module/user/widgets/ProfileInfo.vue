<template>
  <div class="mb-4">
    <div class="flex items-center justify-between">
      <h6 class="text-sm text-slate-800 font-medium">Profile</h6>
      <button @click="handleOpen">
        <EditIcon :size="14" />
      </button>
    </div>
    <div></div>
  </div>
  <modal size="lg" v-if="open" label="Update profile" @close="handleClose">
    <h1>Hello world</h1>
  </modal>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import { useToggle } from '../../../composable/useToggle'
import { EditIcon } from 'lucide-vue-next'
import Modal from '../../../components/ui/Modal.vue'
const { open, handleOpen, handleClose } = useToggle()
</script>

<style></style>
