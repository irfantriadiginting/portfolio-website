<template>
  <!--
    Navbar: fixed di atas, dengan blur backdrop agar konten di belakang terlihat samar
    :class binding → menambah class secara kondisional berdasarkan nilai variabel Vue
  -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="font-display font-bold text-xl"
        @click.prevent="scrollTo('hero')"
      >
        <span class="text-accent-purple">&lt;</span>
        <span class="text-text-primary">Irfan</span>
        <span class="text-accent-cyan">/</span>
        <span class="text-text-primary">Ginting</span>
        <span class="text-accent-purple">&gt;</span>
      </a>

      <!-- Links Desktop (hidden di mobile) -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click.prevent="scrollTo(link.id)"
            class="text-text-secondary hover:text-text-primary text-sm font-medium
                   transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <!-- Underline animasi saat hover -->
            <span
              class="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r 
                     from-accent-purple to-accent-cyan group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
      </ul>

      <!-- CTA Button Desktop -->
      <a
        href="#contact"
        @click.prevent="scrollTo('contact')"
        class="hidden md:block btn-primary text-sm"
      >
        Hire Me
      </a>

      <!-- Hamburger Button Mobile -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        id="hamburger-btn"
        aria-label="Toggle menu"
      >
        <span
          class="block w-6 h-0.5 bg-text-primary transition-all duration-300"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-text-primary transition-all duration-300"
          :class="mobileOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-text-primary transition-all duration-300"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-show="mobileOpen"
      class="md:hidden bg-bg-secondary/95 backdrop-blur-md border-t border-white/5 px-6 py-4"
    >
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click.prevent="() => { scrollTo(link.id); mobileOpen = false }"
            class="text-text-secondary hover:text-text-primary text-base font-medium 
                   transition-colors block py-1"
          >
            {{ link.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            @click.prevent="() => { scrollTo('contact'); mobileOpen = false }"
            class="btn-primary text-sm inline-block mt-2"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Data links navbar — disimpan sebagai array objek
// v-for di template akan loop array ini untuk render semua link
const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// ref(false) → scrolled dimulai false, berubah true saat user scroll ke bawah
const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  // window.scrollY → berapa pixel user sudah scroll dari atas
  scrolled.value = window.scrollY > 50
}

// Fungsi smooth scroll ke section dengan id tertentu
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
