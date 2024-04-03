<template>
  <div class="flex flex-col items-center text-center py-4">
    <img
      :src="avatar !== '' ? avatar : '/avatar.png'"
      width="100"
      height="100"
      class="rounded-full bg-transparent shadow-md"
    />
    <h6 v-if="user" class="font-medium flex flex-col items-center text-slate-900 mt-4">
      {{ user?.name }}
      <span class="flex items-center text-xs mt-1 font-medium text-slate-500">
        <Smartphone :size="16" class="mr-2" /> {{ user?.mobile }}
      </span>
    </h6>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useAuthStore } from '../../stores'
import { storeToRefs } from 'pinia'
import { Smartphone } from 'lucide-vue-next'
const authStore = useAuthStore()
const { avatar, user } = storeToRefs(authStore)
</script>

<style></style>
