<template>
  <section id="contact" class="bg-bg-secondary/30">
    <div class="section-wrapper">
      <div class="text-center mb-16 reveal">
        <h2 class="section-title">Let's Connect</h2>
        <div class="section-divider mx-auto"></div>
        <p class="text-text-secondary max-w-lg mx-auto">
          Have an interesting project or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact info -->
        <div class="space-y-6 reveal">
          <h3 class="font-display font-bold text-2xl text-text-primary">
            Say <span class="text-accent-purple">Hello!</span> 👋
          </h3>
          <p class="text-text-secondary leading-relaxed">
            I'm open to freelance work, full-time opportunities, and collaborations.
            Typical response time: &lt; 24 hours.
          </p>

          <div class="space-y-4">
            <div
              v-for="contact in contacts"
              :key="contact.label"
              class="flex items-center gap-4 p-4 card-glass rounded-xl hover:border-accent-purple/30 transition-all duration-300 group"
            >
              <div class="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0 group-hover:bg-accent-purple/20 transition-colors duration-300">
                <svg class="w-5 h-5 text-accent-purple" fill="currentColor" v-html="contact.icon" viewBox="0 0 24 24"></svg>
              </div>
              <div>
                <p class="text-text-muted text-xs">{{ contact.label }}</p>
                <p class="text-text-primary text-sm font-medium">{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="card-glass p-8 rounded-2xl reveal reveal-delay-2">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-text-secondary text-sm mb-2">Name</label>
              <input id="name" v-model="form.name" type="text" placeholder="Your name" required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 transition-all duration-200" />
            </div>
            <div>
              <label for="email" class="block text-text-secondary text-sm mb-2">Email</label>
              <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 transition-all duration-200" />
            </div>
            <div>
              <label for="message" class="block text-text-secondary text-sm mb-2">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Tell me about your project or idea..." rows="4" required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/30 transition-all duration-200 resize-none"></textarea>
            </div>
            <button type="submit" class="btn-primary w-full flex items-center justify-center gap-2" :disabled="submitted">
              <span v-if="!submitted">Send Message 🚀</span>
              <span v-else class="text-white">✅ Message Sent!</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', form)
  submitted.value = true
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    submitted.value = false
  }, 3000)
}

const contacts = [
  {
    label: 'Email',
    value: 'irfan.ginting2001@gmail.com',
    icon: '<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>',
  },
  {
    label: 'GitHub',
    value: 'github.com/irfantriadiginting',
    icon: '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/irfantriadiginting13',
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  },
]
</script>
