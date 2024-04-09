<template>
  <div>
    <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">
      {{ label }}
    </label>
    <div :classs="['hover:ring-1 border border-gray-100 rounded-md', $attrs.class]">
      <textarea
        v-model="message"
        v-bind="$attrs"
        class="text-sm text-slate-600 w-full p-2 outline-none"
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
const message = defineModel({ default: '' })

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  label?: string
}>()
</script>

<style></style>
