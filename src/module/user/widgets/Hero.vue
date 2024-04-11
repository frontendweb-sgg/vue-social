<template>
  <div
    class="bg-slate-100 group h-64 bg-cover bg-center before:absolute before:content-[''] before:w-full before:h-full before:bg-slate-900/60 relative"
    :style="{
      backgroundImage: `url(${selectedAvatar})`
    }"
  >
    <container class="relative h-full">
      <hero-avatar />
      <hero-upload class="text-white mb-3 flex items-center invisible group-hover:visible">
        <button
          v-if="heroBg"
          class="flex items-center border-indigo-500 bg-indigo-500 rounded-sm px-4 py-1"
        >
          <Save class="mr-2" :size="16" /> Save
        </button>
        <file-upload
          class="flex items-center border-indigo-500 bg-indigo-500 rounded-sm px-4 py-1"
          v-else
          v-model="heroBg"
          icon="Camera"
          label="Upload cover"
        />
      </hero-upload>
    </container>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import Container from '../../../components/ui/Container.vue'
import HeroAvatar from './HeroAvatar.vue'
import HeroUpload from './HeroUpload.vue'
import FileUpload from '../../../components/ui/FileUpload.vue'
import { Save } from 'lucide-vue-next'

const heroBg = ref<File | null>(null)
const selectedAvatar = computed(() =>
  heroBg.value ? URL.createObjectURL(heroBg.value!) : '/bg.jpg'
)
</script>

<style></style>
