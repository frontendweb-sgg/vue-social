<template>
  <nav>
    <ul class="flex items-center space-x-4">
      <nav-item menu to="/notification">
        <bell-icon :size="20" />
      </nav-item>
      <nav-item
        menu
        to="/auth"
        v-if="!authStore.isAuth"
        class="bg-slate-700 text-white py-1 px-4 border border-slate-700 rounded-md shadow-md"
        >{{ AppContent.login }}</nav-item
      >
    </ul>
  </nav>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import NavItem from '../ui/NavItem.vue'
import { AppContent } from '@/utils/content'
import { BellIcon } from 'lucide-vue-next'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>

<style></style>
