<template>
  <router-link
    :class="{
      'font-medium': true,
      'text-white': props.type === 'white'
    }"
    to="/"
  >
    Vue <span class="text-rose-600">Social</span>
  </router-link>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteRecordName } from 'vue-router'
const props = withDefaults(
  defineProps<{
    type?: 'black' | 'white'
    to: RouteRecordName
  }>(),
  {
    type: 'black',
    to: '/'
  }
)
</script>

<style></style>
