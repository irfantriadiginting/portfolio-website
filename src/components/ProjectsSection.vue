<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { projects } from '@/data/portfolio'

const { elementRef, isVisible } = useScrollAnimation()

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section
    id="projects"
    ref="elementRef"
    class="py-20 bg-gray-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
          :class="[
            'bg-gray-900 rounded-xl overflow-hidden border border-gray-700 transition-all duration-500',
            'hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48 bg-gray-800 group">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <!-- Title -->
            <h3 class="text-xl font-bold text-white mb-3">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-blue-400 font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3">
              <button
                @click="openLink(project.liveUrl)"
                class="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </button>
              <button
                @click="openLink(project.githubUrl)"
                class="flex-1 bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 hover:border-blue-500 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View More (Optional) -->
      <div
        :class="[
          'text-center mt-12 transition-all duration-700 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-gray-400 mb-4">Want to see more projects?</p>
        <button
          @click="openLink('https://github.com/irfantriadi')"
          class="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 hover:border-blue-500 transition-all"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All on GitHub
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styles if needed */
</style>
