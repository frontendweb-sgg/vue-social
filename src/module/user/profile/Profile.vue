<template>
  <div class="bg-white p-4">
    <h1>{{ user }}</h1>
    <form></form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useLoggedInUser } from '../../../composable/useUser'
import { useAuthStore } from '../../../stores'

const { avatar, name, user } = useLoggedInUser()
</script>

<style></style>
