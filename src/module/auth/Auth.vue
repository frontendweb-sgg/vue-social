<template>
  <router-view></router-view>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

onBeforeMount(() => {
  if (authStore.isAuth && authStore.isUser) {
    router.replace('/user')
  }
  if (authStore.isAuth && authStore.isAdmin) {
    router.replace('/admin')
  }
})
</script>

<style>
</style>