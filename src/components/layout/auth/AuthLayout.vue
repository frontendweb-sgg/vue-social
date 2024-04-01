<template>
  <header class="fixed w-full py-3">
    <Container>
      <Logo type="white" />
    </Container>
  </header>
  <div class="grid h-screen grid-cols-2">
    <div class="col bg-slate-800 flex items-center justify-center flex-col">
      <div class="flex flex-col">
        <h1 class="mb-5 text-white text-[32px]">Authentication</h1>
        <p class="max-w-[400px] text-white text-xs leading-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quae, non explicabo cumque
          possimus labore! Expedita libero eius ullam recusandae debitis cum provident. Facilis
          omnis quae atque nostrum in voluptates.
        </p>
      </div>
      <Footer class="text-white absolute bottom-0" />
    </div>
    <div class="col flex items-center justify-center">
      <slot></slot>
    </div>
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

<style>
</style>