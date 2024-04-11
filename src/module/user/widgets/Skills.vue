<template>
  <div class="flex items-center justify-between mb-2">
    <h6 class="text-sm text-slate-800 font-medium">Skills</h6>
    <button title="Edit skills" @click="handleOpen">
      <EditIcon :size="14" />
    </button>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useToggle } from '../../../composable/useToggle'
import { EditIcon } from 'lucide-vue-next'
const { open, handleOpen, handleClose } = useToggle()
</script>

<style></style>
