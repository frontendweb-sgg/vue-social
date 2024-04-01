import App from './App.vue'
import router from './routes'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import '@coreui/coreui/dist/css/coreui.min.css'
import './index.css'

const pinia = createPinia()

// App instance
const app = createApp(App)

// directives
app.directive('outside', {
  created(el, binding) {
    el.clickOutside = (event: MouseEvent) => {
      if (el && !el.contains(event.target)) {
        binding.value()
      }
    }
  },
  mounted(el, binding) {
    document.addEventListener('click', el.clickOutside)
  },
  unmounted(el, binding) {
    document.removeEventListener('click', el.clickOutside)
  }
})

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

// Mount app
app.mount('#app')
