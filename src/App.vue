<template>
  <!--
    App.vue adalah "root component" - komponen paling atas yang membungkus semua halaman.
    
    <LoadingScreen> → tampil di awal, lalu hilang setelah 2 detik
    <CustomCursor> → custom cursor yang ikut gerak mouse (desktop only)
    <NavBar> → navbar yang selalu tampil di semua halaman
    <RouterView> → "jendela" di mana halaman aktif ditampilkan (HomeView, dll)
  -->
  <div class="relative min-h-screen bg-bg-primary text-text-primary">
    <LoadingScreen v-if="isLoading" @done="isLoading = false" />
    <template v-else>
      <CustomCursor />
      <NavBar />
      <main>
        <RouterView />
      </main>
      <FooterSection />
    </template>
  </div>
</template>

<script setup>
// "script setup" adalah cara modern Vue 3 (Composition API)
// Semua yang kamu tulis di sini otomatis tersedia di <template>

import { ref } from 'vue'
// ref() → membuat variabel yang "reaktif" (jika berubah, tampilan otomatis update)
import LoadingScreen from './components/LoadingScreen.vue'
import CustomCursor from './components/CustomCursor.vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

// ref(true) → isLoading mulai dengan nilai true
// Setelah LoadingScreen emits event 'done', nilainya jadi false
const isLoading = ref(true)
</script>
