<template>
  <!--
    SkillCard — satu kotak skill dalam marquee
    Menerima prop "skill" berisi: name, icon (devicon class), beginner (boolean)
  -->
  <div
    class="skill-item flex flex-col items-center justify-center gap-3
           bg-bg-card border border-white/10 rounded-2xl
           hover:border-accent-purple/50 hover:-translate-y-1
           transition-all duration-300 cursor-default select-none"
    style="width: 120px; min-height: 130px; padding: 18px 12px;"
  >
    <!-- Devicon logo -->
    <i
      :class="`devicon-${skill.icon} colored`"
      style="font-size: 3rem; line-height: 1;"
    ></i>

    <!-- Nama skill -->
    <span class="text-text-secondary text-xs font-medium text-center leading-tight">
      {{ skill.name }}
    </span>

    <!-- Badge "Beginner" jika masih belajar -->
    <span
      v-if="skill.beginner"
      class="text-[9px] px-2 py-0.5 rounded-full
             bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20
             font-medium tracking-wide"
    >
      Beginner
    </span>
  </div>
</template>

<script setup>
// defineProps → mendaftarkan prop yang diterima dari parent
// Di sini component menerima 1 prop: "skill" (objek)
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>
