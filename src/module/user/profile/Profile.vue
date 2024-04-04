<template>
  <div class="bg-white p-4">
    <h1>{{ authStore.user?.name }}</h1>
    <form></form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useAuthStore } from '../../../stores'

const authStore = useAuthStore()
</script>

<style></style>
