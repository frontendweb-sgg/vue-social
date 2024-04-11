<template>
  <div class="mb-4">
    <div class="flex items-center justify-between mb-2">
      <h6 class="text-sm text-slate-800 font-medium">Profile</h6>
      <button title="Edit profile" @click="handleOpen">
        <EditIcon :size="14" />
      </button>
    </div>

    <ul class="space-y-2">
      <li>
        <span class="text-xs block">Designation</span>
        <span class="text-sm font-medium"
          >{{ profile?.designation }} <small> ({{ profile?.company }})</small></span
        >
      </li>
      <li v-if="profile?.noticeperiod">
        <span class="text-xs block">Noticeperiod</span>
        <span class="text-sm font-medium">{{ profile?.noticeperiod }}M</span>
      </li>
      <li v-if="profile?.gender">
        <span class="text-xs block">Gender</span>
        <span class="text-sm font-medium">{{ upperFirst(profile?.gender) }}</span>
      </li>
      <li v-if="profile?.exp">
        <span class="text-xs block">Experience</span>
        <span class="text-sm font-medium">{{ profile?.exp }}</span>
      </li>
      <li v-if="profile?.dob">
        <span class="text-xs block">Date of birth</span>
        <span class="text-sm font-medium">{{ profile?.dob }}</span>
      </li>
      <li v-if="profile?.gitusername">
        <span class="text-xs block">Git username</span>
        <span class="text-sm font-medium">{{ profile?.gitusername }}</span>
      </li>
      <li v-if="profile?.languages.length">
        <div v-for="lang of profile.languages" :key="lang.name">
          <span class="text-xs block">{{ lang?.name }}</span>
          <span class="text-sm font-medium">{{ lang?.options }}</span>
        </div>
      </li>
    </ul>
  </div>
  <modal size="lg" v-if="open" label="Update profile" @close="handleClose">
    <edit-profile />
  </modal>
</template>

<script lang="ts">
export default {}
</script>

<script lang="ts" setup>
import Modal from '../../../components/ui/Modal.vue'
import upperFirst from 'lodash/upperFirst'
import EditProfile from './forms/EditProfile.vue'
import { useToggle } from '../../../composable/useToggle'
import { EditIcon } from 'lucide-vue-next'
import { useProfile } from '../composable/useProfile'
const { open, handleOpen, handleClose } = useToggle()

const { profile, loading } = useProfile()
</script>

<style></style>
