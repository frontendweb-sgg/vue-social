<template>
  <div class="p-4 max-w-[360px] min-w-[320px] rounded-md">
    <div class="mb-5">
      <h2 class="text-lg font-medium">Auth</h2>
      <p class="text-xs">
        {{ AppContent.loginSubtitle }}
        <router-link to="/auth/signup" class="text-rose-600 font-medium hover:text-purple-800">
          Sign up
        </router-link>
      </p>
    </div>
    <form @submit="handleLogin" class="space-y-3">
      <Input placeholder="Enter email" label="Email" />
      <Input placeholder="******" label="Password" />
      <label class="py-2 space-x-2 block text-xs">
        <input type="checkbox" /> <span>{{ AppContent.rememberMe }}</span>
      </label>
      <button class="bg-slate-700 px-6 py-2 rounded-md text-white w-full" type="submit">
        {{ AppContent.login }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import Input from '@/components/ui/Input.vue'
import { authStore } from '@/stores/auth'
import { AppContent } from '@/utils/content'
const state = ref({
  email: '',
  password: ''
})

const auth = authStore()

function handleLogin(even: Event) {
  even.preventDefault()
  auth.signIn(state.value)
}
</script>

<style>
</style>