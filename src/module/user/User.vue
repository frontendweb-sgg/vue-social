<template>
  <div class="bg-gray-50 flex-col flex min-h-full">
    <Header />
    <container class="flex-1 w-full">
      <main class="flex-1 my-6 mx-auto">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-3">
            <sidebar />
          </div>
          <div class="col-span-9">
            <router-view></router-view>
          </div>
        </div>
      </main>
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
import Sidebar from './layout/Sidebar.vue'
import Container from '../../components/ui/Container.vue'
import { useUserStore } from '../../stores/user'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => userStore.getLoggedInUser())
</script>

<style></style>
