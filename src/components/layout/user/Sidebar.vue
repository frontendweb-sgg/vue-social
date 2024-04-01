<template>
  <aside class="p-4 bg-white shadow-sm">
    <div class="flex flex-col items-center text-center">
      <img src="/avatar.png" width="100" height="100" class="rounded-full" />
      <h6>
        Pradeep Kumar
        <span class="flex items-center"> <PhoneIcon :size="20" /> 7291893484 </span>
      </h6>
    </div>
    <div v-for="(menu, index) in UserSidebarMenu" :key="index" class="mt-6">
      <span class="text-slate-500 block text-[10px] uppercase mb-2">{{ menu.title }}</span>
      <ul class="mb-5">
        <li
          class="text-slate-500 mb-1"
          v-for="(submenu, subindex) in menu.children"
          :key="subindex + '-' + index"
        >
          <router-link
            active-class="text-rose-600 bg-slate-50 rounded-md"
            class="rounded-sm p-2 block text-sm hover:bg-slate-50"
            :to="submenu.href"
          >
            {{ submenu.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { PhoneIcon } from 'lucide-vue-next'
import { UserSidebarMenu } from './Menu'
</script>
<style>
</style>