<template>
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
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import Layout from './components/layout/Layout.vue'
import ConfirmDialog from './components/ui/ConfirmDialog.vue'
import { useConfirmStore } from './stores/confirm'
const route = useRoute()

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
