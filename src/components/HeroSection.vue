<script setup>
import { useTypingEffect } from '@/composables/useTypingEffect'
import { personalInfo } from '@/data/portfolio'

const { displayText } = useTypingEffect(personalInfo.roles)

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <!-- Animated Circles -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="text-center">
        <!-- Avatar -->
        <div class="flex justify-center mb-8 animate-fade-in">
          <div class="relative">
            <img
              :src="personalInfo.avatar"
              :alt="personalInfo.name"
              class="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/50"
            />
            <div class="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
          </div>
        </div>

        <!-- Name -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {{ personalInfo.name }}
        </h1>

        <!-- Typing Effect -->
        <div class="h-12 sm:h-16 mb-8">
          <p class="text-xl sm:text-2xl lg:text-3xl text-blue-400 font-semibold">
            {{ displayText }}
            <span class="animate-pulse">|</span>
          </p>
        </div>

        <!-- Bio -->
        <p class="text-gray-400 text-lg max-w-2xl mx-auto mb-12 animate-fade-in">
          {{ personalInfo.bio }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            @click="scrollToSection('projects')"
            class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/50"
          >
            View My Work
          </button>
          <button
            @click="scrollToSection('contact')"
            class="bg-gray-800 border-2 border-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:bg-gray-700 transition-all"
          >
            Get In Touch
          </button>
        </div>

        <!-- Scroll Indicator -->
        <div class="mt-20 animate-bounce">
          <svg
            class="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
