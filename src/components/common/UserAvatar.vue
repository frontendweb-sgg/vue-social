<template>
  <span v-if="loading" class="rounded-full bg-transparent w-8 h-8">
    <LoaderIcon class="animate-spin" />
  </span>

  <img :src="user?.avatar ?? '/avatar.png'" :class="classes" />
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../stores/user'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'header' | 'sidebar' | 'post'
  }>(),
  {
    type: 'header'
  }
)

const userStore = useUserStore()
const { user, loading } = storeToRefs(userStore)

const classes = computed(() => ({
  'rounded-full bg-transparent shadow-md': true,
  ['object-cover w-28 h-28']: props.type === 'sidebar',
  ['object-cover  w-8 h-8 overflow-hidden']: props.type === 'header'
}))
</script>

<style></style>
