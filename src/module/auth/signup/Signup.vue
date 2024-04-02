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
    <Form :validation-schema="validation" @submit="onSumbmit" novalidate class="space-y-3">
      <Field name="name" type="text" v-slot="{ field }">
        <Input type="name" v-bind="field" placeholder="Enter name" />
      </Field>
      <ErrorMessage name="name" class="text-xs text-red-700" />
      <Field name="email" type="email" v-slot="{ field }">
        <Input type="email" v-bind="field" placeholder="Enter email" />
      </Field>
      <ErrorMessage name="email" class="text-xs text-red-700" />
      <Field name="password" type="password" v-slot="{ field }">
        <Input type="password" v-bind="field" placeholder="********" />
      </Field>
      <ErrorMessage class="text-xs text-red-700" name="password" />
      <Field name="mobile" type="text" v-slot="{ field }">
        <Input type="mobile" v-bind="field" placeholder="Enter mobile" />
      </Field>
      <ErrorMessage name="mobile" class="text-xs text-red-700" />
      <button
        :disabled="authStore.loading"
        class="bg-slate-700 px-6 py-2 flex items-center justify-center rounded-md text-white w-full"
        type="submit"
      >
        <LoaderIcon v-if="authStore.loading" :size="16" class="mr-2 animate-spin" />
        {{ AppContent.signup }}
      </button>
    </Form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Input from '../../../components/ui/Input.vue'
import type { IUserSignup } from '../../../types/types'
import { reactive } from 'vue'
import { AppContent } from '../../../utils/content'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '../../../stores/auth'
import { LoaderIcon } from 'lucide-vue-next'
import * as yup from 'yup'

const authStore = useAuthStore()

const validation = yup.object({
  name: yup.string().required('Name is required!'),
  email: yup.string().email().required('Email is required!'),
  password: yup.string().required('Password is required!'),
  mobile: yup.string().min(10).max(10).required('Mobile is required!')
})

function onSumbmit(values) {
  console.log(values)
  authStore.signUp(values)
}
</script>
<style></style>
