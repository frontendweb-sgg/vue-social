<template>
  <page-loader v-if="useLoader.visible" />
  <confirm-dialog v-if="confirmStore.visible" />
  <component :is="route.meta.layout">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </component>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import ConfirmDialog from './components/ui/ConfirmDialog.vue'
import PageLoader from './components/ui/PageLoader.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { useConfirmStore } from './stores/confirm'
import { useLoaderStore } from './stores/loader'

const useLoader = useLoaderStore()
const route = useRoute()

const authStore = useAuthStore()
const confirmStore = useConfirmStore()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    console.log('hi')
    authStore.checkUserIsLoggedIn()
  }
})
</script>

<style></style>
