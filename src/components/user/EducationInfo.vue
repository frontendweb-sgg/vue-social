<template>
  <panel label="Education">
    <div class="text-xs" v-for="edu of educations" :key="edu.id">
      <h5 class="font-medium text-slate-900">{{ edu?.degree }}- ({{ edu?.instituteName }})</h5>
      <span v-if="edu?.location">{{ edu?.location }}</span>
      <span>{{ edu?.fieldOfStudy }}</span>
      <span>{{ edu?.grade }}</span>
      <span class="block">
        From: {{ format(new Date(edu?.from), 'MM/dd/yyyy') }} <span v-if="edu?.to">-</span>
        {{ edu?.to ? format(edu?.to, 'MM/dd/yyy') : '' }}
      </span>
      <p>{{ edu?.summary }}</p>
    </div>
  </panel>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useProfile } from '../../composable/useProfile'
import { format } from 'date-fns'
import Panel from '../ui/Panel.vue'
const { educations } = useProfile()
</script>

<style></style>
