<template>
  <h1>{{ user?.name }}</h1>
  <p>{{ user?.mobile }}</p>
  <p>{{ user?.email }}</p>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import { useLoggedInUser } from '../../composable/useUser'
const { user, name, loading, userId } = useLoggedInUser()
</script>

<style></style>
