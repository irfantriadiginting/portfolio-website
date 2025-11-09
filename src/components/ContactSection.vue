<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useFormValidation } from '@/composables/useFormValidation'
import { personalInfo } from '@/data/portfolio'

const { elementRef, isVisible } = useScrollAnimation()

const {
  formData,
  errors,
  isSubmitting,
  submitSuccess,
  submitError,
  validateField,
  handleSubmit
} = useFormValidation()

const contactInfo = [
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    label: 'Phone',
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone}`
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Location',
    value: personalInfo.location,
    link: null
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    url: personalInfo.social.github,
    color: 'hover:bg-gray-700'
  },
  {
    name: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    url: personalInfo.social.linkedin,
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    url: personalInfo.social.instagram,
    color: 'hover:bg-pink-600'
  }
]
</script>

<template>
  <section
    id="contact"
    ref="elementRef"
    class="py-20 bg-gray-900"
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
          Get In Touch
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <!-- Two Column Layout -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left Column - Contact Info -->
        <div
          :class="[
            'space-y-6 transition-all duration-700 delay-100',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <!-- Contact Info Cards -->
          <div
            v-for="(info, index) in contactInfo"
            :key="index"
            :style="{ transitionDelay: `${100 + index * 100}ms` }"
            :class="[
              'bg-gray-800/50 border border-gray-700 rounded-xl p-6 transition-all',
              'hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20',
              info.link ? 'cursor-pointer' : ''
            ]"
            @click="info.link ? window.open(info.link, '_blank') : null"
          >
            <div class="flex items-center gap-4">
              <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
                </svg>
              </div>
              <div>
                <h3 class="text-gray-400 text-sm mb-1">{{ info.label }}</h3>
                <p class="text-white font-medium">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 class="text-white font-semibold mb-4">Follow Me</h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                :class="[
                  'bg-gray-800 p-3 rounded-lg transition-all',
                  social.color
                ]"
                :title="social.name"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div
          :class="[
            'transition-all duration-700 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-white font-medium mb-2">
                Name <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                @blur="validateField('name', formData.name)"
                :class="[
                  'w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all',
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                ]"
                placeholder="Your name"
              >
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-white font-medium mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                @blur="validateField('email', formData.email)"
                :class="[
                  'w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all',
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                ]"
                placeholder="your.email@example.com"
              >
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-white font-medium mb-2">
                Subject <span class="text-red-500">*</span>
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                @blur="validateField('subject', formData.subject)"
                :class="[
                  'w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all',
                  errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                ]"
                placeholder="What's this about?"
              >
              <p v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-white font-medium mb-2">
                Message <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                @blur="validateField('message', formData.message)"
                :class="[
                  'w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all resize-none',
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                ]"
                placeholder="Your message here..."
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2',
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50'
              ]"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <svg
                v-if="!isSubmitting"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <!-- Success Message -->
            <transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 transform translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform translate-y-2"
            >
              <div v-if="submitSuccess" class="bg-green-500/10 border border-green-500 rounded-lg p-4">
                <p class="text-green-400 text-center font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            </transition>

            <!-- Error Message -->
            <transition
              enter-active-class="transition ease-out duration-300"
              enter-from-class="opacity-0 transform translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition ease-in duration-200"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform translate-y-2"
            >
              <div v-if="submitError" class="bg-red-500/10 border border-red-500 rounded-lg p-4">
                <p class="text-red-400 text-center font-medium">
                  ✗ Something went wrong. Please try again later.
                </p>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styles if needed */
</style>
