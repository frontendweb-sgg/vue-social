<template>
  <div
    id="default-carousel"
    class="relative w-full h-[250px] group bg-gray-50"
    data-carousel="slide"
  >
    <div class="relative h-full overflow-hidden rounded-lg">
      <template v-for="(image, index) in props.images" :key="image.url">
        <transition name="fade" mode="in-out">
          <div
            class="duration-700 border border-gray-50 h-full overflow-hidden ease-in-out bg-white"
            v-if="index === active"
          >
            <img
              :src="image.url"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </transition>
      </template>
    </div>
    <button
      type="button"
      :class="[
        'absolute top-0 start-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none',
        active == 0 && 'hidden'
      ]"
      data-carousel-prev
      @click="prev"
      :disabled="active === 0"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <ChevronLeft />
      </span>
    </button>
    <button
      @click="next"
      type="button"
      :class="[
        'absolute top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none',
        length === active && 'hidden'
      ]"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <ChevronRight />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { Media } from '../../types/types'
const active = ref(0)

const props = defineProps<{
  images: Media[] | undefined
}>()

const length = computed(() => (props.images?.length as number) - 1)
function next() {
  if (length.value === active.value) return
  active.value++
}
function prev() {
  if (active.value === 0) return
  active.value--
}
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-active,
.fade-leave-active {
  opacity: 0.5;
  transform: translateX(-50%);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0%);
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
