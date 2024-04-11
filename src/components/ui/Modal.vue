<template>
  <Teleport to="body">
    <div
      tabindex="-1"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div :class="['relative p-4 w-full max-h-full', size]">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ label }}</h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              @click="$emit('close')"
            >
              <X :size="20" />
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div
      @click="$emit('close')"
      class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"
    ></div>
  </Teleport>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { X } from 'lucide-vue-next'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    label: string
    size?: 'xs' | 'sm' | 'lg' | 'md' | '2xl'
  }>(),
  {
    size: 'sm'
  }
)

defineEmits<{
  (e: 'close'): void
}>()

const sizeClass = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  ['2xl']: 'max-w-2xl'
}

const size = computed(() => sizeClass[props.size as keyof typeof sizeClass])
</script>

<style></style>
