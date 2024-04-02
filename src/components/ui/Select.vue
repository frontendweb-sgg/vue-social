<template>
  <select v-model="model" class="border text-sm p-1 hover:ring-1 outline-none rounded-md">
    <option v-for="(option, index) of props.options" :value="selectValue(option)" :key="index">
      {{ selectLabel(option) }}
    </option>
  </select>
</template>

<script lang="ts">
export default {}
</script>
<script setup lang="ts" generic="T">
import { computed } from 'vue'

const props = defineProps<{
  options: T[]
  getOptionLabel?: (option: T) => string
  getOptionValue?: (option: T) => string
}>()

const selectLabel = (option: T) =>
  props.getOptionLabel ? props.getOptionLabel(option) : option['label' as keyof typeof option]

const selectValue = (option: T) =>
  props.getOptionValue ? props.getOptionValue(option) : option['value' as keyof typeof option]

const model = defineModel({ default: '' })
</script>

<style></style>
