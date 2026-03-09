<template>
  <!--
    Custom cursor hanya muncul di desktop (layar ≥ 768px)
    Mengikuti posisi mouse dengan sedikit delay untuk efek smooth
  -->
  <div v-if="!isMobile">
    <!-- Dot kecil di tengah cursor -->
    <div
      class="custom-cursor-dot fixed w-3 h-3 rounded-full bg-accent-purple pointer-events-none z-[9999]"
      :style="{ left: dotPos.x + 'px', top: dotPos.y + 'px', transform: 'translate(-50%, -50%)' }"
    ></div>
    <!-- Ring besar yang mengikuti dengan delay -->
    <div
      class="custom-cursor-ring fixed w-8 h-8 rounded-full border border-accent-purple/50 pointer-events-none z-[9998]"
      :style="{ left: ringPos.x + 'px', top: ringPos.y + 'px', transform: 'translate(-50%, -50%)', transition: 'left 0.15s ease, top 0.15s ease' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Posisi dot (langsung mengikuti mouse)
const dotPos = ref({ x: 0, y: 0 })
// Posisi ring (mengikuti dengan delay CSS transition)
const ringPos = ref({ x: 0, y: 0 })
// Cek apakah layar mobile (< 768px) - cursor custom tidak perlu di mobile
const isMobile = ref(window.innerWidth < 768)

// Handler yang dipanggil setiap kali mouse bergerak
const onMouseMove = (e) => {
  dotPos.value = { x: e.clientX, y: e.clientY }
  ringPos.value = { x: e.clientX, y: e.clientY }
}

// Sembunyikan cursor default browser dengan CSS
const hideBrowserCursor = () => {
  document.documentElement.style.cursor = 'none'
}

const showBrowserCursor = () => {
  document.documentElement.style.cursor = ''
}

onMounted(() => {
  if (!isMobile.value) {
    // Daftarkan event listener saat komponen muncul
    window.addEventListener('mousemove', onMouseMove)
    hideBrowserCursor()
  }
})

onUnmounted(() => {
  // Hapus event listener saat komponen dihapus (mencegah memory leak)
  window.removeEventListener('mousemove', onMouseMove)
  showBrowserCursor()
})
</script>
