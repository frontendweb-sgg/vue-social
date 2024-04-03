<template>
  <div class="bg-slate-900">
    <header class="fixed w-full py-6">
      <Container>
        <Logo type="white" />
      </Container>
    </header>

    <div class="grid h-screen grid-cols-2">
      <div class="col flex items-center justify-center flex-col">
        <!-- <img src="/login-img.jpg" /> -->
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
</script>

<style></style>
