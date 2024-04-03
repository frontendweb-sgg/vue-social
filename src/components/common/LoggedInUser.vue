<template>
  <div class="flex space-x-3 px-3 mb-3">
    <img
      :src="avatar !== '' ? avatar : '/avatar.png'"
      class="rounded-full bg-transparent w-8 h-8 overflow-hidden"
    />
    <div>
      <h6 class="font-medium t{ext-sm text-slate-700 leading-5">
        {{ user?.name }}
        <span class="block text-xs text-slate-400 font-normal">{{
          new Date(Date.now()).toDateString()
        }}</span>
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../../stores'
const authStore = useAuthStore()
const { avatar, user } = storeToRefs(authStore)
</script>

<style></style>
