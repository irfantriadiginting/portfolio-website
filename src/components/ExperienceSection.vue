<template>
  <section id="experience">
    <div class="section-wrapper">
      <div class="text-center mb-16 reveal">
        <h2 class="section-title">Experience</h2>
        <div class="section-divider mx-auto"></div>
      </div>

      <div class="max-w-3xl mx-auto relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-cyan to-transparent -translate-x-1/2"></div>

        <div
          v-for="(item, i) in timeline"
          :key="item.id"
          class="relative flex items-start mb-12 reveal"
          :class="[`reveal-delay-${(i % 3) + 1}`, i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']"
        >
          <!-- Dot -->
          <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full mt-5 border-2 border-accent-purple bg-bg-primary z-10 ring-4 ring-accent-purple/20"></div>

          <!-- Spacer -->
          <div class="hidden md:block md:w-1/2"></div>

          <!-- Card -->
          <div class="ml-12 md:ml-0 md:w-1/2" :class="i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'">
            <div class="card-glass p-6 rounded-2xl hover:border-accent-purple/30 transition-colors duration-300">
              <span
                class="inline-block text-xs px-2 py-0.5 rounded-full mb-3 font-medium"
                :class="item.type === 'job'
                  ? 'bg-accent-purple/15 text-accent-purple border border-accent-purple/30'
                  : item.type === 'internship'
                  ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                  : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'"
              >
                {{ item.badge }}
              </span>

              <h3 class="font-display font-semibold text-lg text-text-primary mb-1">{{ item.role }}</h3>
              <p class="text-accent-purple font-medium text-sm mb-1">{{ item.company }}</p>
              <p class="text-text-muted text-xs mb-4">{{ item.period }}</p>

              <ul class="space-y-1">
                <li v-for="desc in item.descriptions" :key="desc" class="text-text-secondary text-sm flex items-start gap-2">
                  <span class="text-accent-cyan mt-1 shrink-0">▸</span>
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const timeline = [
  {
    id: 1,
    type: 'job',
    badge: '💼 Work',
    role: 'Pranata Komputer Ahli Pertama',
    company: 'Balai Teknik Perkeretaapian Kelas I Medan',
    period: 'November 2025 – Present',
    descriptions: [
      'Working as a Junior IT Analyst at the Railway Engineering Center of Medan.',
      'Developing and maintaining internal information systems and digital tools.',
      'Supporting digital transformation and IT infrastructure initiatives.',
    ],
  },
  {
    id: 2,
    type: 'internship',
    badge: '🎯 Internship',
    role: 'UI/UX Development Intern',
    company: 'Yayasan SATUNAMA, Yogyakarta',
    period: 'August 2022 – December 2022',
    descriptions: [
      'Designed and developed UI/UX for internal web applications.',
      'Built a letter management system for leave, permission, and assignment letters.',
      'Collaborated with the tech team to integrate Firebase Cloud Messaging for notifications.',
    ],
  },
  {
    id: 3,
    type: 'education',
    badge: '🎓 Education',
    role: 'Bachelor of Informatics — GPA 3.17',
    company: 'Universitas Kristen Duta Wacana (UKDW), Yogyakarta',
    period: '2019 – 2024',
    descriptions: [
      'Studied algorithms, data structures, web development, and software engineering.',
      'Built multiple real-world projects including web apps, bots, and AI-powered tools.',
    ],
  },
]
</script>
