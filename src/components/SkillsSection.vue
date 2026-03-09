<template>
  <section id="skills" class="py-24">
      <div class="text-center mb-16 reveal section-wrapper">
        <h2 class="section-title">Skills & Tech Stack</h2>
        <div class="section-divider mx-auto"></div>
        <p class="text-text-secondary max-w-xl mx-auto">
          Technologies I've been working with and currently exploring.
        </p>
      </div>

      <!--
        Infinite Marquee — dua baris scrolling berlawanan arah
        Trik: duplikasi item dan geser -50% secara terus-menerus dengan CSS animation
        Hasilnya: loop yang mulus tanpa jeda
      -->
      <!-- overflow hidden di sini tapi beri sedikit padding vertikal agar shadow/border row tidak terpotong -->
      <div class="space-y-5" style="overflow: hidden; padding: 10px 0;">

        <!-- Baris tunggal: scroll ke kiri dengan data yang digabung dan diduplikasi banyak agar tidak pernah kosong -->
        <div class="marquee-track">
          <div class="marquee-row marquee-left">
            <SkillCard
              v-for="(skill, i) in [...allSkills, ...allSkills, ...allSkills]"
              :key="`r-${i}`"
              :skill="skill"
            />
          </div>
        </div>

      </div>

      <!-- Note di bawah -->
      <p class="text-center text-text-muted text-sm italic mt-14 reveal section-wrapper">
        🌱 Still growing — always picking up something new.
      </p>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import SkillCard from './SkillCard.vue'

useScrollReveal()

// Gabung semua skill jadi satu baris
const allSkills = [
  { name: 'HTML5',       icon: 'html5-plain',       beginner: false },
  { name: 'CSS3',        icon: 'css3-plain',        beginner: false },
  { name: 'JavaScript',  icon: 'javascript-plain',  beginner: false },
  { name: 'Vue.js',      icon: 'vuejs-plain',       beginner: true  },
  { name: 'Tailwind',    icon: 'tailwindcss-plain', beginner: true  },
  { name: 'Laravel',     icon: 'laravel-plain',     beginner: false },
  { name: 'PHP',         icon: 'php-plain',         beginner: false },
  { name: 'Python',      icon: 'python-plain',      beginner: false },
  { name: 'Node.js',     icon: 'nodejs-plain',      beginner: true  },
  { name: 'MySQL',       icon: 'mysql-plain',       beginner: false },
  { name: 'PostgreSQL',  icon: 'postgresql-plain',  beginner: false },
  { name: 'Git',         icon: 'git-plain',         beginner: false },
  { name: 'GitHub',      icon: 'github-original',   beginner: false },
  { name: 'VS Code',     icon: 'vscode-plain',      beginner: false },
]
</script>

<style scoped>
/* Wrapper: mask kiri-kanan agar scroll terasa "menghilang" ke tepi */
.marquee-track {
  position: relative;
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

/* Baris item: flex tanpa wrap, lebar cukup untuk dua salinan */
.marquee-row {
  display: flex;
  gap: 1.25rem;          /* gap-5 */
  width: max-content;
  will-change: transform;
}

/* Baris 1: geser ke kiri 50% lalu loop */
.marquee-left {
  animation: scrollLeft 28s linear infinite;
}

/* Pause animasi saat hover di atas baris */
.marquee-track:hover .marquee-left {
  animation-play-state: paused;
}

@keyframes scrollLeft {
  0%   { transform: translateX(0); }
  /* Karena kita memanggil array 3x (...allSkills,...allSkills,...allSkills), 
     kita harus scroll sejauh 1/3 dari total panjang agar loopnya sempurna (kembali ke awal array 2).
     Kita ubah dari -50% menjadi -33.33333% agar pergerakannya mulus per 1 set data. */
  100% { transform: translateX(-33.33333%); }
}
</style>
