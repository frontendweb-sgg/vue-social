<template>
  <div class="p-4 max-w-[360px] min-w-[320px] rounded-md">
    <div class="mb-5">
      <h2 class="text-lg font-medium">Sign up</h2>
      <p class="text-xs">
        {{ AppContent.signupSubtitle }}
        <router-link to="/auth" class="text-rose-600 font-medium hover:text-purple-800"
          >Sign in</router-link
        >
      </p>
    </div>
    <form @submit="handleSignup" class="space-y-3">
      <Input placeholder="Enter name" />
      <Input placeholder="Enter email" />
      <Input placeholder="******" />
      <Input placeholder="Enter mobile" />
      <button class="bg-slate-700 px-6 py-2 rounded-md text-white w-full" type="submit">
        {{ AppContent.signup }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Input from '@/components/ui/Input.vue'

import { AppContent } from '@/utils/content'

function handleSignup(event: Event) {
  event.preventDefault()
}
</script>
<style>
</style>