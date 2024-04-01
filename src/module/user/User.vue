<template>
  <container class="mt-5 mb-5">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-3">
        <sidebar />
      </div>
      <div class="col-span-9">
        <router-view></router-view>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Sidebar from '../../components/layout/user/Sidebar.vue'
import Container from '@/components/ui/Container.vue'
</script>

<style>
</style>