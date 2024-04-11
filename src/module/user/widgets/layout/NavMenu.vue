<template>
  <div class="border-b border-gray-2000 w-full">
    <container class="relative w-full">
      <ul class="flex items-center justify-end space-x-8 text-sm text-gray-500">
        <nav-item :class="linkClass" :active-class="active" to="/user"
          ><LayoutDashboard :size="20" /> <span>Dashboard</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/posts"
          ><Newspaper :size="20" /> <span> Posts </span></nav-item
        >
        <nav-item :class="linkClass" :active-class="active" to="/user/posts">
          <BookUser :size="20" /> <span> Profile </span></nav-item
        >
        <nav-item :class="linkClass" :active-class="active" to="/user/friend"
          ><UserRound :size="20" /> <span>Friends</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/group"
          ><UsersRound :size="20" /> <span> Groups</span>
        </nav-item>
        <nav-item :class="linkClass" :active-class="active" to="/user/media">
          <Images :size="20" /> <span> Media</span>
        </nav-item>
      </ul>
    </container>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Container from '../../../../components/ui/Container.vue'
import {
  LayoutDashboard,
  BookUser,
  UsersRound,
  UserRound,
  Newspaper,
  Images
} from 'lucide-vue-next'
import NavItem from '../../../../components/ui/NavItem.vue'

const linkClass = 'flex flex-col items-center py-4 space-y-1'
const active = 'text-rose-500'
</script>

<style></style>
