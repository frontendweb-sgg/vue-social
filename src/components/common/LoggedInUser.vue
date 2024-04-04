<template>
  <div class="flex space-x-3 px-3 mb-3">
    <span v-if="loading" class="rounded-full bg-transparent w-8 h-8 overflow-hidden bg-slate-100">
      <LoaderIcon class="animate-spin" />
    </span>
    <img
      v-else
      :src="user?.avatar ? user?.avatar : '/avatar.png'"
      class="rounded-full bg-transparent w-8 h-8 overflow-hidden"
    />
    <div>
      <h6 class="font-medium t{ext-sm text-slate-700 leading-5">
        {{ user?.name }}
        <span class="block text-xs text-slate-400 font-normal"
          >{{ new Date(Date.now()).toDateString() }}
        </span>
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { LoaderIcon } from 'lucide-vue-next'

import { useUserStore } from '../../stores/user'
const userStore = useUserStore()
const { user, loading } = storeToRefs(userStore)
</script>

<style></style>
