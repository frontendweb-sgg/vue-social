import App from './App.vue'
import router from './routes'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

const pinia = createPinia()

// App instance
const app = createApp(App)

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

// Mount app
app.mount('#app')
