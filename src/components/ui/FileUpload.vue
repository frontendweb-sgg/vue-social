<template>
  <div>
    <label>
      <input ref="input" type="file" />
    </label>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
const inp = ref(null)
</script>

<style></style>
