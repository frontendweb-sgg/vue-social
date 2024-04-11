<template>
  <form @submit="onSubmit">
    <div class="grid grid-cols-2 gap-4">
      <text-field name="company" placeholder="Company name" />
      <text-field name="designation" placeholder="Designation" />
      <text-field class="col-span-2" textarea name="summary" placeholder="Summary" />
      <text-field name="gitusername" placeholder="Git username" />
      <text-field name="gender" placeholder="Gender" />
      <text-field name="noticeperiod" placeholder="Noticeperiod" />
      <text-field name="exp" placeholder="Experience" />
      <text-field name="location" placeholder="Location" />
      <text-field name="website" placeholder="Website" />
    </div>
    <div class="flex items-center justify-end pt-4 space-x-4">
      <v-button
        type="reset"
        @click="handleReset"
        class="border hover:bg-slate-300 hover:border-slate-300 border-gray-200 text-slate-700 px"
      >
        {{ AppContent.reset }}
      </v-button>
      <v-button
        class="border bg-indigo-500 text-white hover:bg-indigo-800 hover:border-indigo-800 border-indigo-500 px"
        type="submit"
      >
        {{ AppContent.save }}
      </v-button>
    </div>
  </form>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import TextField from '../../../../components/ui/TextField.vue'
import VButton from '../../../../components/ui/Button.vue'
import { AppContent } from '../../../../utils/content'
import { useForm, Form } from 'vee-validate'
import * as yup from 'yup'

const validation = yup.object({
  company: yup.string().required('Company is required!'),
  designation: yup.string().required('Designation is required!'),
  noticeperiod: yup.string(),
  gender: yup.string(),
  exp: yup.string().default(''),
  gitusername: yup.string().default(''),
  location: yup.string().default(''),
  website: yup.string().default('')
})

const { values, handleReset, handleSubmit } = useForm({
  initialValues: {
    company: '',
    designation: '',
    noticeperiod: '',
    gender: '',
    exp: '',
    gitusername: '',
    location: '',
    website: ''
  },
  validationSchema: validation
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<style></style>
