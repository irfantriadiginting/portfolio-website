<template>
  <footer class="border-t border-white/5 bg-bg-secondary mt-0">
    <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo -->
      <div class="font-display font-bold text-lg">
        <span class="text-accent-purple">&lt;</span>
        <span class="text-text-primary">Irfan</span>
        <span class="text-accent-cyan">/</span>
        <span class="text-text-primary">Triadi</span>
        <span class="text-accent-purple">&gt;</span>
      </div>

      <!-- Copyright -->
      <p class="text-text-muted text-sm">
        © {{ currentYear }} Irfan Triadi Ginting. Crafted by Vue.js
      </p>

      <!-- Social Links -->
      <div class="flex items-center gap-4">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
                 text-text-secondary hover:text-accent-purple hover:border-accent-purple
                 transition-all duration-300"
        >
          <!-- SVG icons inline agar tidak perlu icon library -->
          <svg v-html="social.icon" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

// computed() → nilai yang dihitung ulang otomatis saat dependensinya berubah
// Ini memastikan tahun selalu update otomatis
const currentYear = computed(() => new Date().getFullYear())

// Data social media links
const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/irfantriadiginting',
    icon: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/irfantriadiginting13',
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  },
  {
    label: 'Email',
    url: 'mailto:irfan.ginting2001@gmail.com',
    icon: '<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>',
  },
]
</script>
