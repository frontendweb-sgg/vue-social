<template>
  <div class="flex space-x-3 px-3 mb-3">
    <user-avatar class="w-8 h-8" />

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
import UserAvatar from '../../../components/common/UserAvatar.vue'

import { useUserStore } from '../store/user'
const userStore = useUserStore()
const { user, loading } = storeToRefs(userStore)
</script>

<style></style>
