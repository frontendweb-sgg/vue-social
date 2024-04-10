<template>
  <auth-form
    :title="AppContent.signin"
    :link-text="AppContent.signup"
    :subtitle="AppContent.loginSubtitle"
    :validation-schema="validation"
    to="/signup"
    @submit="handleSubmit"
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
    <div class="flex items-center justify-between text-xs">
      <label class="py-2 space-x-2 block">
        <input type="checkbox" /> <span>{{ AppContent.rememberMe }}</span>
      </label>
      <router-link class="text-rose-600 flex items-center font-medium" to="/forgot-password"
        ><KeyRound :size="14" class="mr-2" /> Forgot Password</router-link
      >
    </div>
    <button
      :disabled="auth.loading"
      class="bg-slate-900 px-6 py-2 rounded-md text-white w-full"
      type="submit"
    >
      <LoaderIcon v-if="auth.loading" :size="16" class="mr-2" /> {{ AppContent.signin }}
    </button>

    <p class="text-xs text-center"></p>
  </auth-form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import AuthForm from '../../../components/auth/AuthForm.vue'
import Input from '../../../components/ui/Input.vue'
import { useAuthStore } from '../../../stores'
import { AppContent } from '../../../utils/content'
import { LoaderIcon, KeyRound } from 'lucide-vue-next'
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const validation = yup.object({
  email: yup
    .string()
    .required('Field is required')
    .test('emailOrMobile', 'Enter a valid email or mobile number', (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const mobileRegex = /^\d{10}$/ // Assuming mobile number is a 10-digit number
      return emailRegex.test(value) || mobileRegex.test(value)
    }),
  password: yup.string().required('Password is required!')
})

const auth = useAuthStore()
function handleSubmit(values: any) {
  auth.signIn(values)
}
</script>

<style></style>
