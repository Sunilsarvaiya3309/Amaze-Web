<script setup>
import { ref, onMounted, computed } from "vue";
import { useMotion } from "@vueuse/motion";
import { ArrowUpIcon, PhoneIcon } from "@heroicons/vue/24/solid";
import { useDarkMode } from "@/composables/useDarkMode";
import WhatsApp from "./Icons/WhatsApp.vue";

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

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function chatWithUs() {
  const businessNumber = "919227575667";
  let message = `Hi! I'm interested in learning driving. Can you help me with information about your packages and schedule?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}

const strokeColor = computed(() => (isDark.value ? "black" : "#FACC15"));
</script>

<template>
  <div>
    <!-- Scroll to Top Button -->
    <button
      v-if="showButton"
      ref="buttonRef"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 bg-black text-yellow-400 px-4 py-3 rounded-full shadow-lg font-bold transition-all animate-pulse dark:bg-yellow-500 dark:text-black"
    >
      <ArrowUpIcon class="h-6 w-4" />
    </button>

    <!-- WhatsApp Help Button with Hover Tooltip -->
    <div
      class="fixed bottom-44 dark:bg-yellow-500 bg-black rounded-full right-6 z-40 group flex items-center justify-center h-12 w-12"
    >
      <div
        class="relative flex items-center cursor-pointer"
        @click="chatWithUs"
      >
        <!-- Tooltip Card -->
        <div
          class="absolute right-14 bottom-1 sm:w-64 w-52 bg-[#1F2937] text-yellow-300 dark:text-black dark:bg-yellow-100 rounded-lg shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform translate-x-4 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50"
        >
          <div class="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              class="sm:h-10 sm:w-10 h-8 w-8 rounded-full shadow-md"
            />
            <div class="flex flex-col">
              <span class="font-bold sm:text-base text-sm"
                >Amaze Motor Driving School</span
              >
              <span
                class="text-green-400 dark:text-green-600 sm:text-sm text-xs animate-pulse font-semibold"
                >● Online now</span
              >
            </div>
          </div>
          <p class="mt-3 sm:text-sm text-xs">Need help with driving lessons?</p>
          <ul class="sm:text-sm text-xs mt-2 space-y-1 list-disc list-inside">
            <li>Package info</li>
            <li>Booking help</li>
            <li>Quick support</li>
          </ul>
          <button
            class="mt-3 w-full bg-green-600 text-white py-1.5 sm:text-sm text-xs px-3 rounded-md font-semibold"
          >
            Chat with us
          </button>
        </div>

        <!-- WhatsApp Icon -->
        <WhatsApp class="w-6 h-6" :stroke="strokeColor" />
      </div>
    </div>

    <!-- Dark Mode Toggle Button -->
    <button
      ref="darkRef"
      @click="toggleDark()"
      class="fixed bottom-24 right-6 z-30 w-12 h-12 flex items-center justify-center rounded-full border shadow-md transition-all duration-500 bg-black text-black dark:bg-yellow-500 dark:text-black"
    >
      <span class="text-xl">
        {{ isDark ? "🌞" : "🌙" }}
      </span>
    </button>
  </div>
</template>
