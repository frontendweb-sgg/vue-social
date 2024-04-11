<template>
  <div :class="[$attrs.class]">
    <label v-if="props.label" class="block text-slate-600 text-sm font-medium mb-2">
      {{ label }}
    </label>

    <div
      :class="[
        ' ring-slate-800 hover:bg-gray-50 border border-gray-100 rounded-md',
        meta.touched && !meta.valid && 'border-red-600 placeholder:text-red-600 text-red-600',
        meta.touched && meta.valid && 'border-green-600 placeholder:text-green-600 text-green-600',
        $attrs.class
      ]"
    >
      <textarea
        rows="3"
        v-if="textarea"
        v-bind="$attrs"
        v-on="handlers"
        class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
      >
      </textarea>
      <input
        v-else
        v-on="handlers"
        v-bind="$attrs"
        :value="value"
        :type="type"
        class="text-sm font-semibold bg-transparent w-full p-3 outline-none"
      />
    </div>
    <span class="block text-xs text-red-500 mt-1" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useField } from 'vee-validate'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    textarea?: boolean
    type?: string
    name: string
    label?: string
  }>(),
  { type: 'text' }
)

const { meta, value, errorMessage, handleBlur, handleChange } = useField(
  props.name,
  {},
  {
    validateOnValueUpdate: false
  }
)

const handlers = {
  blur: handleBlur,
  change: handleChange,
  input: (e: InputEvent) => handleChange(e, !!errorMessage.value)
}
</script>

<style></style>
