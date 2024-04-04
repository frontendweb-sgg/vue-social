<template>
  <auth-form :validation-schema="validation" @submit="onSumbmit">
    <Field name="name" type="text" v-slot="{ field, meta }">
      <Input
        type="name"
        v-bind="field"
        placeholder="Enter name"
        :class="{
          'border-green-500 text-green-600 placeholder:text-green-600': meta.touched && meta.valid,
          'border-red-600 text-red-500 placeholder:text-red-600': meta.touched && !meta.valid
        }"
      />
    </Field>
    <ErrorMessage name="name" class="text-xs text-red-700" />
    <Field name="email" type="email" v-slot="{ field, meta }">
      <Input
        type="email"
        v-bind="field"
        placeholder="Enter email"
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
        v-bind="field"
        placeholder="********"
        :class="{
          'border-green-500 text-green-600 placeholder:text-green-600': meta.touched && meta.valid,
          'border-red-600 text-red-500 placeholder:text-red-600': meta.touched && !meta.valid
        }"
      />
    </Field>
    <ErrorMessage class="text-xs text-red-700" name="password" />
    <Field name="mobile" type="text" v-slot="{ field, meta }">
      <Input
        type="mobile"
        v-bind="field"
        placeholder="Enter mobile"
        :class="{
          'border-green-500 text-green-600 placeholder:text-green-600': meta.touched && meta.valid,
          'border-red-600 text-red-500 placeholder:text-red-600': meta.touched && !meta.valid
        }"
      />
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
  </auth-form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Input from '../../../components/ui/Input.vue'
import AuthForm from '../../../components/auth/AuthForm.vue'
import type { IUserSignup } from '../../../types/types'
import { reactive } from 'vue'
import { AppContent } from '../../../utils/content'
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
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

function onSumbmit(values: any) {
  console.log('values', values)
  authStore.signUp(values)
}
</script>
<style></style>
