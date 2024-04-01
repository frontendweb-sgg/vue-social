<template>
  <div class="flex items-center space-x-3">
    <dropdown>
      <template #button="{ handleToggle }">
        <button @click="handleToggle" class="flex items-center space-x-2">
          <img src="/avatar.png" class="rounded-full bg-transparent w-8 h-8 overflow-hidden" />
          <label class="font-medium text-slate-800">{{ authStore.username }}</label>
        </button>
      </template>
      <dropdown-item> Profile </dropdown-item>
    </dropdown>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import Dropdown from '../ui/Dropdown.vue'
import DropdownItem from '../ui/DropdownItem.vue'

const authStore = useAuthStore()
</script>

<style></style>
