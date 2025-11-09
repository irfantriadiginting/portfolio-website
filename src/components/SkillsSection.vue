<script setup>
import { ref, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { skills } from '@/data/portfolio'

const { elementRef, isVisible } = useScrollAnimation()

const activeFilter = ref('All')

// Get unique categories
const categories = computed(() => {
  const cats = ['All', ...new Set(skills.map(skill => skill.category))]
  return cats
})

// Filter skills based on active filter
const filteredSkills = computed(() => {
  if (activeFilter.value === 'All') {
    return skills
  }
  return skills.filter(skill => skill.category === activeFilter.value)
})

// No need for level colors anymore
</script>

<template>
  <section
    id="skills"
    ref="elementRef"
    class="py-20 bg-gray-900"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div
        :class="[
          'text-center mb-12 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>

      <!-- Filter Tabs -->
      <div
        :class="[
          'flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="activeFilter = category"
          :class="[
            'px-6 py-2 rounded-lg font-medium transition-all',
            activeFilter === category
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Skills Grid -->
      <transition-group
        name="skills"
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.name"
          :style="{ transitionDelay: `${index * 50}ms` }"
          :class="[
            'bg-gray-800/50 border border-gray-700 rounded-xl p-6 transition-all duration-300',
            'hover:border-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Logo & Name -->
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-lg p-2">
              <img
                :src="skill.logo"
                :alt="skill.name"
                class="w-full h-full object-contain"
              >
            </div>
            <h3 class="text-lg font-bold text-white">{{ skill.name }}</h3>
          </div>

          <!-- Description -->
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            {{ skill.description }}
          </p>

          <!-- Category Tag -->
          <div class="pt-4 border-t border-gray-700">
            <span class="text-xs text-gray-500">{{ skill.category }}</span>
          </div>
        </div>
      </transition-group>

      <!-- Empty State -->
      <div
        v-if="filteredSkills.length === 0"
        class="text-center py-12"
      >
        <p class="text-gray-400 text-lg">No skills found in this category.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transition for skill cards */
.skills-enter-active,
.skills-leave-active {
  transition: all 0.3s ease;
}

.skills-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.skills-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.skills-move {
  transition: transform 0.3s ease;
}
</style>
