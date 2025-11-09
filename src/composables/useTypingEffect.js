import { ref, onMounted, onUnmounted } from 'vue'

export function useTypingEffect(texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const displayText = ref('')
  const currentIndex = ref(0)
  const isDeleting = ref(false)
  let timeout = null

  const type = () => {
    const currentText = texts[currentIndex.value]

    if (!isDeleting.value) {
      // Typing
      if (displayText.value.length < currentText.length) {
        displayText.value = currentText.slice(0, displayText.value.length + 1)
        timeout = setTimeout(type, typingSpeed)
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          isDeleting.value = true
          type()
        }, pauseTime)
      }
    } else {
      // Deleting
      if (displayText.value.length > 0) {
        displayText.value = displayText.value.slice(0, -1)
        timeout = setTimeout(type, deletingSpeed)
      } else {
        // Move to next text
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % texts.length
        timeout = setTimeout(type, typingSpeed)
      }
    }
  }

  onMounted(() => {
    type()
  })

  onUnmounted(() => {
    if (timeout) clearTimeout(timeout)
  })

  return { displayText }
}
