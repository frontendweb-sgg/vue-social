<template>
  <nav>
    <ul class="flex items-center space-x-4">
      <nav-item to="/user/posts"> <Rss :size="20" /></nav-item>
      <nav-item to="/user/photos"> <Images :size="20" /></nav-item>
      <nav-item menu to="/user">
        <bell-icon :size="20" />
      </nav-item>

      <nav-item
        menu
        to="/auth"
        v-if="!authStore.isAuth"
        class="bg-slate-700 text-white py-1 px-4 border border-slate-700 rounded-md shadow-md"
        >{{ AppContent.signin }}</nav-item
      >

      <li v-if="authStore.isAuth">
        <user-control></user-control>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import NavItem from '../ui/NavItem.vue'
import { AppContent } from '../../utils/content'
import { BellIcon, Rss, Images } from 'lucide-vue-next'

import { useAuthStore } from '../../module/auth/store/auth'
import UserControl from '../common/UserControl.vue'

const authStore = useAuthStore()
</script>

<style></style>
