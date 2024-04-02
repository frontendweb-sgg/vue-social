<template>
  <div>
    <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">{{
      label
    }}</label>
    <div class="hover:ring-1 border border-gray-100 rounded-md">
      <input
        v-model="model"
        v-bind="$attrs"
        class="text-sm bg-transparent w-full p-2 outline-none"
      />
    </div>
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
