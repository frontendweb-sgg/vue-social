<template>
  <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">{{
    label
  }}</label>
  <div
    :class="[' ring-slate-800 hover:bg-gray-50 border border-gray-100 rounded-md', $attrs.class]"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
    />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

const model = defineModel({ default: '' })
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  label?: string
  validation?: Object
}>()
</script>

<style></style>
