import { ref } from 'vue'

export function useToggle() {
  const open = ref(false)

  const handleClose = () => (open.value = false)
  const handleOpen = () => (open.value = true)
  const handleToggle = () => (open.value = !open.value)

  return { open, handleOpen, handleClose, handleToggle }
}
