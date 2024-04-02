<template>
  <div
    role="tooltip"
    class="absolute z-50 text-xs inline-block px-3 py-2 font-medium w-max -translate-x-1/2 left-1/2 text-white transition-opacity duration-300 bg-gray-800 rounded-sm shadow-sm tooltip dark:bg-gray-700"
  >
    <slot />
    <div
      id="arrow"
      class="invisible -translate-x-1/2 left-1/2 absolute h-2 w-2 top-7 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
      data-popper-arrow
    ></div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    dir?: 'left' | 'right' | 'bottom' | 'top'
  }>(),
  {
    dir: 'bottom'
  }
)
</script>

<style></style>
