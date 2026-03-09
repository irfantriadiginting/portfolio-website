<template>
  <section id="about" class="bg-bg-secondary/30">
    <div class="section-wrapper">
      <div class="text-center mb-16 reveal">
        <h2 class="section-title">About Me</h2>
        <div class="section-divider mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Avatar -->
        <div class="flex justify-center reveal">
          <div class="relative">
            <!-- Box Image Avatar -->
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-accent-purple/30 to-accent-cyan/30 border border-white/10 flex items-center justify-center overflow-hidden animate-float">
              <img src="/avatar.jpg" alt="Irfan Triadi Ginting" class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
            </div>
            <div class="absolute -bottom-4 -right-4 card-glass px-4 py-3 rounded-xl border-glow">
              <p class="font-display font-bold text-2xl text-accent-purple">2+</p>
              <p class="text-text-muted text-xs">Years Coding</p>
            </div>
            <div class="absolute -top-4 -left-4 card-glass px-4 py-3 rounded-xl">
              <p class="font-display font-bold text-2xl text-accent-cyan">5+</p>
              <p class="text-text-muted text-xs">Projects Done</p>
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div class="space-y-6 reveal reveal-delay-2">
          <h3 class="font-display font-bold text-2xl text-text-primary">
            Full Stack Developer & <span class="text-accent-purple">Lifelong Learner</span>
          </h3>

          <p class="text-text-secondary leading-relaxed">
            Hi! I'm <strong class="text-text-primary">Irfan Triadi Ginting</strong>, an Informatics graduate from UKDW
            who loves building things on the web. I enjoy working across the full stack —
            from designing clean APIs to crafting smooth user interfaces.
          </p>
          <p class="text-text-secondary leading-relaxed">
            I'm currently open to freelance projects and exciting collaborations.
            Let's build something great together! 🚀
          </p>

          <!-- Info grid -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="info in aboutInfo" :key="info.label" class="card-glass p-4 rounded-xl">
              <p class="text-text-muted text-xs mb-1">{{ info.label }}</p>
              <p class="text-text-primary font-medium text-sm">{{ info.value }}</p>
            </div>
          </div>

          <!-- Tombol Download CV -->
          <a href="/cv_irfanginting.pdf" download="CV_Irfan_Ginting.pdf" class="btn-primary inline-flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const aboutInfo = [
  { label: 'Location', value: 'Indonesia 🇮🇩' },
  { label: 'University', value: 'Universitas Kristen Duta Wacana Yogyakarta' },
  { label: 'GPA', value: '3.17 / 4.00 🎓' },
  { label: 'Status', value: '✅ Open to Work' },
]
</script>
