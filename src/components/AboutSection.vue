<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { personalInfo } from '@/data/portfolio'

const { elementRef, isVisible } = useScrollAnimation()

const downloadCV = () => {
  // Buka CV di tab baru atau trigger download
  window.open(personalInfo.cvUrl, '_blank')
}
</script>

<template>
  <section id="about" ref="elementRef" class="py-20 bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <!-- Left Column - Photo & CV Button -->
        <div
          :class="[
            'flex flex-col items-center justify-center transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
          ]"
        >
          <div class="relative inline-block mb-8">
            <img
              :src="personalInfo.about.image"
              :alt="personalInfo.name"
              class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl shadow-2xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl"
            ></div>
          </div>

          <button
            @click="downloadCV"
            class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg inline-flex items-center justify-center gap-2 w-64"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </button>
        </div>

        <!-- Right Column - Bio -->
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
          ]"
        >
          <div class="space-y-4">
            <p
              v-for="(paragraph, index) in personalInfo.about.paragraphs"
              :key="index"
              class="text-gray-300 text-lg leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- Values Cards -->
      <div
        :class="[
          'grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <div
          v-for="(value, index) in personalInfo.about.values"
          :key="index"
          :style="{ transitionDelay: `${300 + index * 100}ms` }"
          class="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <div class="text-4xl mb-4">{{ value.icon }}</div>
          <h3 class="text-xl font-bold text-white mb-2">{{ value.title }}</h3>
          <p class="text-gray-400 text-sm">{{ value.description }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div
        :class="[
          'grid grid-cols-3 gap-8 transition-all duration-700 delay-500',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        ]"
      >
        <div v-for="(stat, index) in personalInfo.about.stats" :key="index" class="text-center">
          <div
            class="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2"
          >
            {{ stat.value }}
          </div>
          <div class="text-gray-400 text-sm sm:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional animations if needed */
</style>
