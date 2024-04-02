import { defineStore } from 'pinia'

interface ILoader {
  visible: boolean
}
export const useLoaderStore = defineStore('loader', {
  state: () =>
    ({
      visible: false
    }) as ILoader,
  actions: {
    loadingStart() {
      this.visible = true
    },
    loadingEnd() {
      setTimeout(() => {
        this.visible = false
      }, 100)
    }
  }
})
