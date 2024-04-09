<template>
  <div class="px-6 py-12 shadow-md min-h-96 max-w-[360px] min-w-[360px] bg-white rounded-md">
    <Form v-bind="$attrs" novalidate class="space-y-3">
      <div class="mb-10">
        <h2 class="text-[24px] font-medium">{{ title }}</h2>
        <p class="text-xs text-slate-400">
          {{ subtitle }}
          <router-link :to="props.to" class="text-rose-600 font-medium hover:text-purple-800">{{
            linkText
          }}</router-link>
        </p>
      </div>
      <slot />
    </Form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { AppContent } from '../../utils/content'
import { Form } from 'vee-validate'
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    to?: URL | string
    linkText?: string
  }>(),
  {
    title: AppContent.signup,
    subtitle: AppContent.signupSubtitle,
    linkText: AppContent.signin,
    to: '/auth'
  }
)
</script>
