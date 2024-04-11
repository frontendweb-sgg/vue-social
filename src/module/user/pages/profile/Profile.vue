<template>
  <user-info />

  <div class="grid grid-cols-2 gap-4">
    <employment-info />
    <education-info />
  </div>
  <div class="bg-white p-4">
    <h1>{{ JSON.stringify(profile, null, 4) }}</h1>
    <form></form>
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import UserInfo from '../../../../components/user/UserInfo.vue'
import ProfileInfo from '../../../../components/user/ProfileInfo.vue'
import { useProfile } from '../../../../composable/useProfile'
import { useLoggedInUser } from '../../../../composable/useUser'
import EmploymentInfo from '../../../../components/user/EmploymentInfo.vue'
import EducationInfo from '../../../../components/user/EducationInfo.vue'

const { profile } = useProfile()
const { avatar, name, user } = useLoggedInUser()
</script>

<style></style>
