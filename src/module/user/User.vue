<template>
  <div class="bg-gray-50 flex-col flex min-h-full">
    <Header />
    <hero />
    <nav-menu />
    <container class="flex-1 flex w-full">
      <div class="grid grid-cols-12 gap-6 w-full">
        <div class="col-span-3 py-6">
          <sidebar />
        </div>
        <div class="col-span-9 border-l pl-6 py-6 relative">
          <router-view></router-view>
        </div>
      </div>
    </container>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {}
</script>
<script lang="ts" setup>
import Header from '../../components/layout/Header.vue'
import Footer from '../../components/layout/Footer.vue'
import Sidebar from './widgets/layout/Sidebar.vue'
import Container from '../../components/ui/Container.vue'
import Hero from './widgets/Hero.vue'
import NavMenu from './widgets/layout/NavMenu.vue'
import { useUserStore } from './store/user'
import { onMounted } from 'vue'

const userStore = useUserStore()
onMounted(() => userStore.getLoggedInUser())
</script>

<style></style>
