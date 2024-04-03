<template>
  <auth-form
    :title="AppContent.signin"
    :link-text="AppContent.signup"
    :subtitle="AppContent.loginSubtitle"
    :validation-schema="validation"
    to="/auth/signup"
    @submit="handleLogin"
    class="space-y-3"
  >
    <Field name="email" type="email" v-slot="{ field, meta }">
      <Input
        type="email"
        placeholder="Enter email"
        v-bind="field"
        :class="{
          'border-green-500 text-green-600 placeholder:text-green-600': meta.touched && meta.valid,
          'border-red-600 text-red-500 placeholder:text-red-600': meta.touched && !meta.valid
        }"
      />
    </Field>

    <ErrorMessage name="email" class="text-xs text-red-700" />
    <Field name="password" type="password" v-slot="{ field, meta }">
      <Input
        type="password"
        placeholder="********"
        v-bind="field"
        :class="{
          'border-green-500 text-green-600 placeholder:text-green-600': meta.touched && meta.valid,
          'border-red-600 text-red-500 placeholder:text-red-600': meta.touched && !meta.valid
        }"
      />
    </Field>
    <ErrorMessage class="text-xs text-red-700" name="password" />
    <label class="py-2 space-x-2 block text-xs">
      <input type="checkbox" /> <span>{{ AppContent.rememberMe }}</span>
    </label>
    <button
      :disabled="auth.loading"
      class="bg-slate-900 px-6 py-2 rounded-md text-white w-full"
      type="submit"
    >
      <LoaderIcon v-if="auth.loading" :size="16" class="mr-2" /> {{ AppContent.signin }}
    </button>
  </auth-form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

import AuthForm from '../../../components/auth/AuthForm.vue'
import Input from '../../../components/ui/Input.vue'
import { useAuthStore } from '../../../stores'
import { AppContent } from '../../../utils/content'
import { LoaderIcon } from 'lucide-vue-next'
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const validation = yup.object({
  email: yup.string().email().required('Email is required!'),
  password: yup.string().required('Password is required!')
})

const auth = useAuthStore()

function handleLogin(values: any) {
  console.log(values)
  auth.signIn(values)
}
</script>

<style></style>
