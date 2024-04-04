<template>
  <div class="bg-gradient-to-r from-blue-600 to-violet-600">
    <Container class="max-w-[1280px]">
      <div class="grid h-screen grid-cols-2">
        <div class="col flex justify-center items-center flex-col text-white">
          <div class="max-w-[450px] mx-auto">
            <Logo class="text-lg" type="white" />

            <h1 class="pt-4 text-[24px]">{{ AppContent.authHeading }}</h1>
            <p class="mt-3 leading-5 text-sm text-slate-300">
              {{ AppContent.homePageContent }}
            </p>
            <ul class="flex items-center justify-between mt-5">
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Users class="mb-2" />
                </span>
                <h6>Registered User</h6>
                <span>10,000</span>
              </li>
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Newspaper class="mb-2" />
                </span>

                <h6>Post published</h6>
                <span>1,000</span>
              </li>
              <li>
                <span class="circle bg-orange mb-2 avatar sm vcenter text-white">
                  <Heart class="mb-2"
                /></span>
                <h6>Happy users</h6>
                <span>10,000</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col relative flex items-center justify-center">
          <slot></slot>
        </div>
      </div>
    </Container>
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
import { Users, Newspaper, Heart } from 'lucide-vue-next'
</script>

<style></style>
