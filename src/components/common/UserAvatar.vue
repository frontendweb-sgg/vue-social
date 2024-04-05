<template>
  <span v-if="loading" class="rounded-full bg-transparent w-8 h-8">
    <LoaderIcon class="animate-spin" />
  </span>
  <img
    class="object-cover overflow-hidden rounded-full bg-transparent"
    v-bind="$attrs"
    :src="avatar ?? '/avatar.png'"
  />
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../stores/user'

const userStore = useUserStore()
const { user, loading, avatar } = storeToRefs(userStore)
</script>

<style></style>
