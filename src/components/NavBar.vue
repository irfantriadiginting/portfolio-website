<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <nav
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <button
          @click="scrollToSection('hero')"
          class="text-xl font-bold text-white hover:text-blue-400 transition-colors"
        >
          Irfan T.G
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            {{ link.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden text-white focus:outline-none"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900/98 backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button
            v-for="link in navLinks"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>
