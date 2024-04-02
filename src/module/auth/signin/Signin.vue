<template>
  <div class="p-4 max-w-[360px] min-w-[320px] rounded-md">
    <div class="mb-6">
      <h2 class="text-[24px] font-medium">
        {{ AppContent.signin }}
      </h2>
      <p class="text-xs">
        {{ AppContent.loginSubtitle }}
        <router-link to="/auth/signup" class="text-rose-600 font-medium hover:text-purple-800">
          {{ AppContent.signup }}
        </router-link>
      </p>
    </div>
    <form @submit="handleLogin" class="space-y-3">
      <Input type="email" placeholder="Enter email" v-model="state.email" />
      <Input type="password" placeholder="******" v-model="state.password" />
      <label class="py-2 space-x-2 block text-xs">
        <input type="checkbox" /> <span>{{ AppContent.rememberMe }}</span>
      </label>
      <button
        :disabled="auth.loading"
        class="bg-slate-700 px-6 py-2 rounded-md text-white w-full"
        type="submit"
      >
        <LoaderIcon v-if="auth.loading" :size="16" class="mr-2" /> {{ AppContent.signin }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import Input from '../../../components/ui/Input.vue'
import { useAuthStore } from '../../../stores'
import { AppContent } from '../../../utils/content'
import { LoaderIcon } from 'lucide-vue-next'
const state = ref({
  email: 'pkumar1@pythian.com',
  password: 'Admin@123'
})

const auth = useAuthStore()

function handleLogin(even: Event) {
  even.preventDefault()
  auth.signIn(state.value)
}
</script>

<style></style>
