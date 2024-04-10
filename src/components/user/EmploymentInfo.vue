<template>
  <panel label="Employments">
    <div class="text-xs" v-for="emp of employments" :key="emp.id">
      <h5 class="font-medium text-slate-900">{{ emp?.designation }}</h5>
      <ul class="space-y-1">
        <li>
          {{ emp?.company }} ({{ emp?.location }})
          <span class="block">
            From: {{ format(emp?.from ?? '', 'MM/dd/yyyy') }} <span v-if="emp?.to">-</span>
            {{ emp?.to ? format(emp?.to, 'MM/dd/yyy') : '' }}
          </span>
        </li>
      </ul>
      <p class="mb-2">{{ emp?.summery }}</p>
      <p>{{ emp?.skills }}</p>
      <p>{{ emp?.awards }}</p>
    </div>
  </panel>
</template>

<script lang="ts">
export default {
  components: { Panel }
}
</script>
<script lang="ts" setup>
import { format } from 'date-fns'
import { useProfile } from '../../composable/useProfile'
import Panel from '../ui/Panel.vue'

const { employments } = useProfile()
</script>

<style></style>
