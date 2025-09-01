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
<<<<<<< HEAD
const showModal = ref(false);
=======
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a

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

<<<<<<< HEAD
function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}

=======
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
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
<<<<<<< HEAD
      class="fixed bottom-6 right-6 z-50 bg-black text-yellow-400 px-4 py-3 rounded-full shadow-lg font-bold transition-all animate-pulse dark:bg-yellow-500 dark:text-black"
=======
      class="fixed bottom-6 right-6 z-50 bg-black text-yellow-400 px-4 py-3 rounded-full shadow-lg font-bold transition-all animate-pulse
             dark:bg-yellow-500 dark:text-black"
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
    >
      <ArrowUpIcon class="h-6 w-4" />
    </button>

    <!-- Need Help Button -->
    <button
      v-if="showButton"
<<<<<<< HEAD
      @click="openModal"
      ref="extraRef"
      class="fixed bottom-20 left-2 z-40 bg-black text-yellow-500 hover:text-black px-4 py-2 rounded-full shadow-md font-semibold transition-all hover:bg-yellow-300 dark:bg-yellow-500 dark:text-black"
=======
      ref="extraRef"
      class="fixed bottom-20 left-2 z-40 bg-black text-yellow-500 hover:text-black px-4 py-2 rounded-full shadow-md font-semibold transition-all hover:bg-yellow-300
             dark:bg-yellow-500 dark:text-black"
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
    >
      <PhoneIcon class="h-5 w-5 inline-block mr-1" />
      Need Help?
    </button>
<<<<<<< HEAD
    <transition name="fade-scale">
      <div
        v-if="showModal"
        class="fixed inset-0 p-4 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div
          class="bg-white dark:bg-gray-900 flex flex-col gap-4 rounded-2xl p-8 w-full max-w-md shadow-2xl text-center relative"
        >
          <a
            href="https://wa.me/919227575667"
            target="_blank"
            class="bg-black text-yellow-500 hover:text-black px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-yellow-300 dark:bg-yellow-500 dark:text-black duration-300"
          >
            Chat with Krishnakant Rajguru
          </a>
          <a
            href="tel:9227575667"
            class="bg-black text-yellow-500 hover:text-black px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-yellow-300 dark:bg-yellow-500 dark:text-black duration-300"
          >
            Call : +91 9227575667
          </a>

          <button
            @click="closeModal"
            class="absolute top-1 right-2 text-3xl text-gray-500 hover:text-black"
          >
            &times;
          </button>
        </div>
      </div>
    </transition>
=======
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a

    <!-- Dark Mode Toggle Button -->
    <button
      ref="darkRef"
      @click="toggleDark()"
<<<<<<< HEAD
      class="fixed bottom-24 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full border shadow-md transition-all duration-500 bg-black text-black dark:bg-yellow-500 dark:text-black"
    >
      <span class="text-xl">
        {{ isDark ? "🌞" : "🌙" }}
=======
      class="fixed bottom-24 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full border shadow-md transition-all duration-500
             bg-black text-black dark:bg-yellow-500 dark:text-black"
    >
      <span class="text-xl">
        {{ isDark ? '🌞' : '🌙' }}
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
      </span>
    </button>
  </div>
</template>
