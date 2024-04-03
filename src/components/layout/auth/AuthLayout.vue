<template>
  <div class="bg-slate-900">
    <header class="fixed w-full py-6">
      <Container>
        <Logo type="white" />
      </Container>
    </header>

    <div class="grid h-screen grid-cols-2">
      <div class="col flex justify-center items-center flex-col text-white">
        <div class="max-w-[450px] mx-auto">
          <h1 class="lg light">{{ AppContent.authHeading }}</h1>
          <p class="mt-3">{{ AppContent.homePageContent }}</p>
          <ul class="flex items-center justify-between mt-5">
            <li>
              <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                <fa-icon icon="users" />
              </span>
              <h6>Registered developer</h6>
              <span>10,000</span>
            </li>
            <li>
              <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                <fa-icon icon="clipboard-list"
              /></span>
              <h6>Post published</h6>
              <span>1,000</span>
            </li>
            <li>
              <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                <fa-icon icon="users"
              /></span>
              <h6>Online users</h6>
              <span>10,000</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col relative flex items-center justify-center">
        <slot></slot>
      </div>
    </div>
    <Footer class="text-white absolute bottom-0 w-full" />
  </div>
</template>

<script lang="ts">
export default {
  components: { Container }
}
</script>
<script lang="ts" setup>
import Container from '../../ui/Container.vue'
import Footer from '../../layout/Footer.vue'
import Logo from '../Logo.vue'
import { AppContent } from '../../../utils/content'
</script>

<style></style>
