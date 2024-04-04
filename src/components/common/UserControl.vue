<template>
  <div class="flex items-center space-x-3">
    <dropdown>
      <template #button="{ handleToggle }">
        <button @click="handleToggle" class="flex items-center space-x-2">
          <user-avatar />
          <label class="font-medium text-slate-800">{{ authStore.username }}</label>
        </button>
      </template>
      <dropdown-item icon="UserIcon" :to="path + AppRoute.profile">
        {{ AppContent.profile }}
      </dropdown-item>
      <dropdown-item icon="Settings" :to="path + AppRoute.settings">
        {{ AppContent.settings }}
      </dropdown-item>
      <divider />
      <dropdown-item icon="LogOut" @click="authStore.logout">
        {{ AppContent.logout }}
      </dropdown-item>
    </dropdown>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Dropdown from '../ui/Dropdown.vue'
import DropdownItem from '../ui/DropdownItem.vue'
import Divider from '../ui/Divider.vue'
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { AppRoute } from '../../utils/routes'
import { AppContent } from '../../utils/content'
import { UserIcon, LogOut, Settings } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../stores/user'
import UserAvatar from './UserAvatar.vue'

const authStore = useAuthStore()
const { isAdmin } = storeToRefs(authStore)

const userStore = useUserStore()
const { user, loading } = storeToRefs(userStore)

const path = computed(() => (isAdmin ? '/admin' : '/user'))
</script>

<style></style>
