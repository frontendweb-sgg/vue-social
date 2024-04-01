<template>
  <li v-if="props.menu">
    <router-link :to="props.to" v-bind="$attrs">
      <slot></slot>
    </router-link>
  </li>
  <router-link v-bind="$attrs" :to="props.to" v-else>
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineOptions({
  inheritAttrs: false
})
const props = withDefaults(
  defineProps<{
    menu?: Boolean
    to: RouteLocationRaw
  }>(),
  {
    to: '/'
  }
)
</script>

<style>
</style>