<template>
  <form ref="form">
    <label
      @mouseenter="handleOpen"
      @mouseleave="handleClose"
      class="relative flex items-center cursor-pointer"
      :class="[$attrs.class]"
      :title="($attrs.title ?? '').toString()"
    >
      <tooltip class="bottom-7" v-if="open && $attrs.title">{{ $attrs.title }}</tooltip>
      <input
        id="file"
        class="hidden"
        type="file"
        v-bind="$attrs"
        @change="handleChange"
        :multiple="props.multiple"
      />
      <Icon :size="20" class="cursor-pointer" />
      <span v-if="props.label" class="ml-2">{{ label }}</span>
    </label>
  </form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Tooltip from './Tooltip.vue'
import { computed, ref, watch, watchEffect, onUpdated } from 'vue'
import { useToggle } from '../../composable/useToggle'
import * as icons from 'lucide-vue-next'

const { open, handleOpen, handleClose } = useToggle()
const form = ref<HTMLFormElement>()
const model = defineModel()

defineOptions({ inheritAttrs: false })

defineExpose({
  reset: () => {
    form.value?.reset()
    singleFile.value = props.multiple ? [] : ''
  }
})

const props = defineProps<{
  icon?: any
  multiple?: boolean
  label?: string
}>()

const singleFile = ref<File | File[] | Object>(props.multiple ? [] : '')
const emit = defineEmits<{
  (e: 'setValues', values: File[]): void
}>()

watch([model], (v) => {})

function handleChange(event: Event) {
  const files = (event.target as HTMLInputElement).files as FileList
  emit('setValues', Array.of(...files) as File[])
  if (props.multiple) {
    singleFile.value = Array.of(...files)
  } else {
    singleFile.value = files[0]
  }
}

watchEffect(() => {
  model.value = singleFile.value
})

onUpdated(() => {
  model.value = singleFile.value
})

const Icon = computed(() => icons[props.icon as keyof typeof icons])
</script>

<style></style>
