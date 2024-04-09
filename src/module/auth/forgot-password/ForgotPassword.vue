<template>
  <auth-form
    title="Forgot password"
    link-text="Login"
    to="/auth"
    subtitle="Click back to"
    :validation-schema="validation"
    @submit="handleSubmit"
    class="space-y-6"
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

    <button
      :disabled="auth.loading"
      class="bg-slate-900 px-6 py-2 rounded-md text-white w-full"
      type="submit"
    >
      <LoaderIcon v-if="auth.loading" :size="16" class="mr-2" /> {{ AppContent.forgotPassword }}
    </button>
  </auth-form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import AuthForm from '../../../components/auth/AuthForm.vue'
import Input from '../../../components/ui/Input.vue'
import * as yup from 'yup'
import { useAuthStore } from '../../../stores'
import { LoaderIcon } from 'lucide-vue-next'
import { Field, ErrorMessage } from 'vee-validate'
import { AppContent } from '../../../utils/content'

const validation = yup.object({
  email: yup
    .string()
    .required('Field is required')
    .test('emailOrMobile', 'Enter a valid email or mobile number', (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const mobileRegex = /^\d{10}$/ // Assuming mobile number is a 10-digit number
      return emailRegex.test(value) || mobileRegex.test(value)
    })
})

const auth = useAuthStore()

function handleSubmit() {}
</script>

<style></style>
