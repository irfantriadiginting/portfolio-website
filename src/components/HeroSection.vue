<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background animated blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-accent-purple/20 blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-accent-cyan/20 blur-3xl animate-float" style="animation-delay: -3s"></div>
      <div
        class="absolute inset-0 opacity-5"
        style="background-image: linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px); background-size: 50px 50px;"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-wrapper text-center">
      <!-- Available badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 mb-8 reveal">
        <span class="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
        <span class="text-text-secondary text-sm font-medium">Available for work</span>
      </div>

      <!-- Name — just "Irfan" in hero per user request -->
      <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 reveal reveal-delay-1">
        <span class="text-text-primary">Hi, I'm </span>
        <span class="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent text-glow">
          Irfan
        </span>
      </h1>

      <!-- Typewriter role -->
      <div class="h-12 mb-6 reveal reveal-delay-2">
        <p class="text-xl md:text-2xl text-text-secondary font-medium">
          I build
          <span class="text-accent-cyan font-semibold">{{ currentRole }}</span>
          <span class="animate-pulse text-accent-purple">|</span>
        </p>
      </div>

      <!-- Short bio -->
      <p class="max-w-2xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed mb-12 reveal reveal-delay-3">
        A passionate Full Stack Developer who loves crafting beautiful, functional web applications.
        An Informatics graduate from UKDW, always learning something new.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-4">
        <a href="#projects" @click.prevent="scrollTo('projects')" class="btn-primary">
          🚀 View My Work
        </a>
        <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-outline">
          💬 Get in Touch
        </a>
      </div>
    </div>

    <!-- Scroll indicator at bottom of section -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted pointer-events-none">
      <span class="text-xs tracking-widest">SCROLL</span>
      <div class="w-px h-12 bg-gradient-to-b from-accent-purple to-transparent animate-pulse"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const roles = [
  'beautiful web apps.',
  'scalable REST APIs.',
  'modern UI experiences.',
  'cool stuff with code.',
]

const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let timer = null

const typeWriter = () => {
  const fullText = roles[roleIndex]
  if (!isDeleting) {
    currentRole.value = fullText.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === fullText.length) {
      isDeleting = true
      timer = setTimeout(typeWriter, 2000)
      return
    }
  } else {
    currentRole.value = fullText.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  timer = setTimeout(typeWriter, isDeleting ? 60 : 100)
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => { timer = setTimeout(typeWriter, 500) })
onUnmounted(() => { clearTimeout(timer) })
</script>
