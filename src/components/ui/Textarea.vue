<template>
  <div>
    <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">
      {{ label }}
    </label>
    <div class="hover:ring-1 border border-gray-100 rounded-md">
      <textarea
        v-model="message"
        v-bind="$attrs"
        class="bg-transparent w-full p-2 outline-none"
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
