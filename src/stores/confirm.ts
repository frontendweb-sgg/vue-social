import { defineStore } from 'pinia'
import { AppContent } from '@/utils/content'

interface IConfirm {
  content?: string
  visible?: boolean
  onConfirm: () => void
}
export const useConfirmStore = defineStore('confirm', {
  state: () => ({
    content: AppContent.confirmDialogMessage,
    visible: false,
    onConfirm: () => {}
  }),
  actions: {
    confirmDelete(option: IConfirm) {
      this.visible = true
      this.content = option.content! ?? AppContent.confirmDialogMessage
      this.onConfirm = option.onConfirm
    },
    cancelConfirm() {
      this.$reset()
    }
  }
})
