<template>
  <ul class="text-xs space-y-2">
    <li class="flex items-center justify-between">
      <span>Dob</span>
      <p>{{ profile?.dob }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Company</span>
      <p>{{ profile?.company }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Experience</span>
      <p>{{ profile?.exp }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Qualification</span>
      <p>{{ profile?.qualification }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Gender</span>
      <p>{{ profile?.gender }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Website</span>
      <p>{{ profile?.website }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>gitusername</span>
      <p>{{ profile?.gitusername }}</p>
    </li>
    <li class="flex items-center justify-between">
      <span>Designation</span>
      <p>{{ profile?.designation }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Panel from '../ui/Panel.vue'
import { useProfile } from '../../composable/useProfile'

const { loading, profile } = useProfile()
</script>

<style></style>
