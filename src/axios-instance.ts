import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  console.log('CONFIG REQUEST', config)
  return config
})

instance.interceptors.response.use((config) => {
  console.log('CONFIG RESPONSE', config)
  return config
})

export { instance as Api }
