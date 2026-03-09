<template>
  <section id="projects" class="bg-bg-secondary/30">
    <div class="section-wrapper">
      <div class="text-center mb-16 reveal">
        <h2 class="section-title">Projects</h2>
        <div class="section-divider mx-auto"></div>
        <p class="text-text-secondary max-w-xl mx-auto">
          A collection of things I've built — from web apps to AI-powered tools.
        </p>
      </div>

      <!-- Project grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          class="card-glass p-6 rounded-2xl group cursor-pointer reveal"
          :class="`reveal-delay-${(i % 3) + 1}`"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 border border-white/10 group-hover:scale-110 transition-transform duration-300">
            {{ project.emoji }}
          </div>

          <!-- Category badge -->
          <div class="flex items-center gap-2 mb-3">
            <span
              class="text-xs px-2 py-0.5 rounded-full border"
              :class="project.category === 'Web App'
                ? 'border-accent-purple/30 text-accent-purple bg-accent-purple/10'
                : 'border-accent-cyan/30 text-accent-cyan bg-accent-cyan/10'"
            >
              {{ project.category }}
            </span>
          </div>

          <h3 class="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-purple transition-colors duration-300">
            {{ project.title }}
          </h3>

          <p class="text-text-secondary text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tech in project.techs" :key="tech" class="text-xs px-2 py-1 rounded bg-white/5 text-text-muted border border-white/5">
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex items-center gap-4">
            <a :href="project.github" target="_blank" rel="noopener"
              class="text-text-muted hover:text-accent-purple text-xs font-medium flex items-center gap-1.5 transition-colors duration-200">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a v-if="project.live" :href="project.live" target="_blank" rel="noopener"
              class="text-text-muted hover:text-accent-cyan text-xs font-medium flex items-center gap-1.5 transition-colors duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const projects = [
  {
    title: 'Calorie Tracker Bot',
    emoji: '🍎',
    category: 'Bot / AI',
    description: 'Telegram bot for daily calorie tracking using food photos. Powered by Google Gemini AI for automatic food detection and nutritional estimation.',
    techs: ['Python', 'Telegram API', 'Gemini AI', 'PostgreSQL'],
    github: 'https://github.com/irfantriadiginting',
    live: null,
  },
  {
    title: 'SuratSN — Letter Management',
    emoji: '📋',
    category: 'Web App',
    description: 'Web application for managing leave, permission, and assignment letters at Yayasan SATUNAMA. Features push notifications via Firebase Cloud Messaging.',
    techs: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Firebase FCM', 'JavaScript'],
    github: 'https://github.com/irfantriadiginting/suratSN',
    live: null,
  },
  {
    title: 'AI Content Generator',
    emoji: '🤖',
    category: 'Web App',
    description: 'AI-powered content generation platform with multiple templates (blog posts, social media, emails). Features real-time generation, credit system, and export to PDF/TXT.',
    techs: ['Laravel 12', 'Livewire 3', 'Alpine.js', 'Tailwind CSS', 'PostgreSQL', 'Gemini API'],
    github: 'https://github.com/irfantriadiginting/ai-content-generator',
    live: null,
  },
  {
    title: 'Surat Perjalanan Dinas + Track Anggaran BTP Medan',
    emoji: '✈️',
    category: 'Web App',
    description: 'Full-featured travel letter management system with multi-role access (Admin, Supervisor, User), matrix history dashboard, PDF generation, budget management, and guided tour.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'FPDF'],
    github: 'https://github.com/irfantriadiginting',
    live: null,
  },
  {
    title: 'Portfolio Website',
    emoji: '🚀',
    category: 'Web App',
    description: 'This portfolio! A modern dark-themed website with smooth animations, typewriter effect, infinite marquee, and custom cursor.',
    techs: ['Vue.js 3', 'Vite', 'Tailwind CSS v3'],
    github: 'https://github.com/irfantriadiginting',
    live: 'https://portfolio-website-irfan.vercel.app/',
  },
]
</script>
