<template>
  <aside>
    <profile-info />
    <skills />
    <!-- 
  <aside class="p-4 bg-white shadow-sm rounded-md">
    <user-sidebar></user-sidebar>

   <div v-for="(menu, index) in UserSidebarMenu" :key="index" class="mt-6">
      <span class="text-slate-500 block text-[10px] uppercase mb-2">{{ menu.title }}</span>
      <ul class="mb-5">
        <li
          class="text-slate-500 mb-1"
          v-for="(submenu, subindex) in menu.children"
          :key="subindex + '-' + index"
        >
          <router-link
            active-class="text-rose-600  bg-slate-50 rounded-md"
            class="font-semibold rounded-sm p-2 block text-sm hover:bg-slate-50"
            :to="'/user/' + submenu.href"
          >
            {{ submenu.title }}
          </router-link>
        </li>
      </ul>
    </div> -->
  </aside>
</template>

<script lang="ts">
export default {
  components: { Skills }
}
</script>
<script lang="ts" setup>
import { UserSidebarMenu } from './Menu'
import UserSidebar from './UserSidebar.vue'
import ProfileInfo from '../ProfileInfo.vue'
import Skills from '../Skills.vue'
</script>
<style></style>
