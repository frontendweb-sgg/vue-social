<template>
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
import { useAuthStore } from '@/stores/auth'
import Layout from './components/layout/Layout.vue'
const route = useRoute()

const authStore = useAuthStore()
onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    authStore.checkUserIsLoggedIn()
  }
})
</script>

<style>
</style>