<template>
  <!--
    LoadingScreen tampil saat pertama kali web dibuka.
    v-if di App.vue mengontrol kapan komponen ini tampil/hilang.
    
    Setelah animasi selesai, kita emit event 'done' ke parent (App.vue)
    agar parent tahu bahwa loading sudah selesai.
  -->
  <div
    class="fixed inset-0 z-[999] flex items-center justify-center bg-bg-primary"
    :class="{ 'opacity-0 pointer-events-none': hiding }"
    style="transition: opacity 0.6s ease"
  >
    <!-- Logo animasi -->
    <div class="flex flex-col items-center gap-6">
      <!-- Lingkaran berputar -->
      <div class="relative w-20 h-20">
        <div
          class="absolute inset-0 rounded-full border-2 border-transparent 
                 border-t-accent-purple border-r-accent-cyan animate-spin"
        ></div>
        <div
          class="absolute inset-2 rounded-full border-2 border-transparent 
                 border-b-accent-purple border-l-accent-cyan animate-spin"
          style="animation-direction: reverse; animation-duration: 1.5s"
        ></div>
        <!-- Titik tengah -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-3 h-3 rounded-full bg-accent-purple animate-pulse"></div>
        </div>
      </div>

      <!-- Teks nama -->
      <div class="text-center">
        <p class="font-display font-bold text-xl text-text-primary tracking-widest">
          IRFAN TRIADI GINTING
        </p>
        <p class="text-text-muted text-sm mt-1 tracking-wider">Loading portfolio...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// defineEmits → mendaftarkan event yang bisa dikirim ke parent
// 'done' → event yang bilang "loading selesai!"  
const emit = defineEmits(['done'])

const hiding = ref(false)

// onMounted() → dijalankan setelah komponen ini muncul di halaman
onMounted(() => {
  setTimeout(() => {
    // Mulai animasi fade out
    hiding.value = true
    // Setelah animasi selesai (0.6s), kirim event 'done' ke parent
    setTimeout(() => emit('done'), 600)
  }, 2000) // loading screen tampil selama 2 detik
})
</script>
