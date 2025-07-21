<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useMotion } from "@vueuse/motion";
import { ArrowUpIcon, PhoneIcon } from "@heroicons/vue/24/solid";
import { useDarkMode } from "@/composables/useDarkMode";

const showButton = ref(false);
const buttonRef = ref(null);
const extraRef = ref(null);
const darkRef = ref(null);

const { isDark, toggleDark } = useDarkMode();

const checkScroll = () => {
  showButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);

  useMotion(buttonRef, {
    initial: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1, transition: { type: "spring" } },
    leave: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  });

  useMotion(extraRef, {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.05 } },
    leave: { opacity: 0, y: 40, transition: { duration: 0.3 } },
  });

  useMotion(darkRef, {
    initial: { opacity: 0, y: 40 },
    enter: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.1 } },
    leave: { opacity: 0, y: 40, transition: { duration: 0.3 } },
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div>
    <!-- Scroll to Top Button -->
    <button
      v-if="showButton"
      ref="buttonRef"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 bg-black text-yellow-400 px-4 py-3 rounded-full shadow-lg font-bold transition-all animate-pulse
             dark:bg-yellow-500 dark:text-black"
    >
      <ArrowUpIcon class="h-6 w-4" />
    </button>

    <!-- Need Help Button -->
    <button
      v-if="showButton"
      ref="extraRef"
      class="fixed bottom-20 left-2 z-40 bg-black text-yellow-500 hover:text-black px-4 py-2 rounded-full shadow-md font-semibold transition-all hover:bg-yellow-300
             dark:bg-yellow-500 dark:text-black"
    >
      <PhoneIcon class="h-5 w-5 inline-block mr-1" />
      Need Help?
    </button>

    <!-- Dark Mode Toggle Button -->
    <button
      ref="darkRef"
      @click="toggleDark()"
      class="fixed bottom-24 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full border shadow-md transition-all duration-500
             bg-black text-black dark:bg-yellow-500 dark:text-black"
    >
      <span class="text-xl">
        {{ isDark ? '🌞' : '🌙' }}
      </span>
    </button>
  </div>
</template>
