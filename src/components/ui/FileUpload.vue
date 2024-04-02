<template>
  <form ref="form">
    <label
      @mouseenter="handleOpen"
      @mouseleave="handleClose"
      :class="[$attrs.class]"
      :title="($attrs.title ?? '').toString()"
      class="relative"
    >
      <tooltip class="bottom-7" v-if="open">{{ $attrs.title }}</tooltip>
      <input
        id="file"
        class="hidden"
        type="file"
        v-bind="$attrs"
        @change="handleChange"
        :multiple="props.multiple"
      />
      <Icon :size="20" class="cursor-pointer" />
    </label>
  </form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Tooltip from './Tooltip.vue'
import { computed, ref, watch, watchEffect, onUpdated } from 'vue'
import { useToggle } from '../../hooks/useToggle'
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

<!-- <div
    class="border group border-gray-50 h-60 rounded-md min-h-32 flex items-center justify-center"
  >
    <div class="grid grid-cols-2 h-full">
      

      <div class="col" v-if="!icon">
        <label>
          <input
            :multiple="props.multiple"
            @change="handleChange"
            class="opacity-0"
            ref="input"
            type="file"
          />
          <div class="text-center font-medium flex items-center flex-col">
            <UploadIcon class="text-indigo-500" :size="40" />
            <span class="mt-5 mb-3 text-sm">{{ AppContent.dragDrop }}</span>
            <button type="button" class="px-4 py-1 text-white rounded-md shadow-sm bg-indigo-600">
              {{ AppContent.browse }}
            </button>
          </div>
        </label>
      </div> 
      <div class="col bg-gray-50/30 overflow-y-auto"></div>
    </div>
  </div> -->
