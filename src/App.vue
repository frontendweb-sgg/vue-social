<template>
  <page-loader v-if="useLoader.visible" />
  <confirm-dialog v-if="confirmStore.visible" />
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import ConfirmDialog from './components/ui/ConfirmDialog.vue'
import PageLoader from './components/ui/PageLoader.vue'
import { onMounted } from 'vue'
import { useAuthStore } from './module/auth/store/auth'
import { useConfirmStore } from './stores/confirm'
import { useLoaderStore } from './stores/loader'

const useLoader = useLoaderStore()

const authStore = useAuthStore()
const confirmStore = useConfirmStore()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    authStore.checkUserIsLoggedIn()
  }
})
</script>

<style></style>
./module/auth/store/auth
