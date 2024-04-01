<template>
  <component :is="route.meta.layout">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </component>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Layout from './components/layout/Layout.vue'
const route = useRoute()
</script>

<style>
</style>