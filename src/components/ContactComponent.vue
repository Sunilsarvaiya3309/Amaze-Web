<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useMotion } from "@vueuse/motion";

const contactRaf = ref(null);
const formRef = ref(null);

const contacts = [
  {
    icon: "📞",
    title: "Call Us",
    lines: [
      "+91 92275 75667",
      "Mon – Sat: 09:00 AM to 01:00 PM - 03:00 PM to 09:00 PM",
    ],
  },
  {
    icon: "📧",
    title: "Email",
    lines: ["amazemotordriving@gmail.com", "We reply within 24 hrs"],
  },
  {
    icon: "📍",
    title: "Visit Us",
    lines: [
      "223, 2nd Floor, Gala Magnus, Sukhasan Chowk, Safal Parisar Rd, South Bopal, Ahmedabad, Gujarat 380058",
    ],
  },
];

onMounted(() => {
  useMotion(contactRaf, {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 15,
        mass: 1.5,
        delay: 0.1,
      },
    },
  });
  if (formRef.value) {
    try {
      useMotion(formRef.value, {
        initial: { opacity: 0, y: 60 },
        enter: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, delay: 0.9 },
        },
      });
    } catch (e) {
      console.error("Form motion error:", e);
    }
  }
});
</script>

<template>
  <section
    ref="contactRaf"
    class="bg-yellow-100 dark:bg-gray-950 text-black dark:text-white py-20 px-6 sm:px-10 transition-colors duration-500"
  >
    <!-- Title -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-extrabold text-yellow-500 mb-4">
        Contact Amaze Driving School
      </h2>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        We're here to help you with your driving journey. Get in touch!
      </p>
    </div>

    <!-- Cards -->
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20"
    >
      <v-motion
        v-for="(item, i) in contacts"
        :key="i"
        :initial="{ opacity: 0, y: 60 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 140, delay: i * 0.3 },
        }"
        class="bg-yellow-50 dark:bg-gray-800 border border-yellow-500/20 p-8 rounded-2xl text-center shadow-2xl group relative overflow-hidden transition duration-300"
      >
        <div class="text-5xl mb-4 animate-bounce-slow drop-shadow-glow">
          {{ item.icon }}
        </div>
        <h3 class="text-xl font-bold text-yellow-500 dark:text-yellow-300 mb-2">
          {{ item.title }}
        </h3>
        <p
          class="text-gray-800 dark:text-gray-300"
          v-for="(line, index) in item.lines"
          :key="index"
        >
          {{ line }}
        </p>
        <div
          class="absolute inset-0 bg-yellow-400 dark:bg-yellow-200 opacity-0 group-hover:opacity-5 blur-lg transition duration-700"
        ></div>
      </v-motion>
    </div>

    <!-- Form -->
    <form
      ref="formRef"
      class="max-w-3xl mx-auto bg-yellow-50 dark:bg-gray-900 rounded-2xl p-10 shadow-2xl border border-yellow-400/10 animate-glow-fast transition-colors duration-500"
    >
      <div class="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          class="w-full bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg border border-gray-300 dark:border-none shadow-sm dark:shadow-none focus:ring-2 focus:ring-yellow-400 outline-none"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg transition hover:scale-105 shadow-lg animate-[pulseSlow_2.5s_ease-in-out_infinite]"
        >
          ✉️ Send Message
        </button>
      </div>
    </form>

    <!-- Social Media Section -->
    <div class="text-center mt-20">
      <h3 class="text-3xl font-bold mb-6 text-black dark:text-yellow-500">
        Our Social Media Platform
      </h3>
      <div class="flex justify-center gap-6">
        <!-- Facebook -->
        <a
          href="#"
          class="bg-blue-600 hover:bg-blue-700 text-white sm:p-4 p-2 rounded-full transition"
          aria-label="Facebook"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02h-2.54v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33v7.02C18.34 21.2 22 17.06 22 12.07z"
            />
          </svg>
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/amaze_krishna/"
          target="_blank"
          class="bg-pink-500 hover:bg-pink-600 text-white sm:p-4 p-2 rounded-full transition"
          aria-label="Instagram"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.41a4.92 4.92 0 0 1 1.79 1.16c.5.5.9 1.12 1.16 1.79.17.46.36 1.26.41 2.43.06 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.16 1.79 4.92 4.92 0 0 1-1.79 1.16c-.46.17-1.26.36-2.43.41-1.26.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.79-1.16 4.92 4.92 0 0 1-1.16-1.79c-.17-.46-.36-1.26-.41-2.43C2.21 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.43A4.92 4.92 0 0 1 3.84 3.84a4.92 4.92 0 0 1 1.79-1.16c.46-.17 1.26-.36 2.43-.41C8.416 2.21 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.53.012-4.77.07-1.03.05-1.59.22-1.96.36-.49.19-.84.41-1.21.78a3.42 3.42 0 0 0-.78 1.21c-.14.37-.31.93-.36 1.96-.06 1.24-.07 1.61-.07 4.77s.012 3.53.07 4.77c.05 1.03.22 1.59.36 1.96.19.49.41.84.78 1.21.37.37.72.59 1.21.78.37.14.93.31 1.96.36 1.24.06 1.61.07 4.77.07s3.53-.012 4.77-.07c1.03-.05 1.59-.22 1.96-.36.49-.19.84-.41 1.21-.78.37-.37.59-.72.78-1.21.14-.37.31-.93.36-1.96.06-1.24.07-1.61.07-4.77s-.012-3.53-.07-4.77c-.05-1.03-.22-1.59-.36-1.96a3.42 3.42 0 0 0-.78-1.21 3.42 3.42 0 0 0-1.21-.78c-.37-.14-.93-.31-1.96-.36-1.24-.06-1.61-.07-4.77-.07zM12 5.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4zm0 1.8a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm5.4-.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
            />
          </svg>
        </a>

        <!-- Twitter -->
        <a
          href="#"
          class="bg-blue-400 hover:bg-blue-500 text-white sm:p-4 p-2 rounded-full transition"
          aria-label="Twitter"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.35 8.52 8.52 0 0 1-2.7 1.03A4.24 4.24 0 0 0 16.15 4c-2.34 0-4.24 1.9-4.24 4.24 0 .33.04.66.11.97-3.52-.18-6.64-1.86-8.73-4.42a4.22 4.22 0 0 0-.57 2.13c0 1.47.75 2.77 1.9 3.53a4.23 4.23 0 0 1-1.92-.53v.05c0 2.06 1.47 3.78 3.42 4.17a4.3 4.3 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.51 8.51 0 0 1 2 19.54a12 12 0 0 0 6.5 1.91c7.79 0 12.05-6.45 12.05-12.05 0-.18 0-.36-.01-.53A8.6 8.6 0 0 0 22.46 6z"
            />
          </svg>
        </a>

        <!-- YouTube -->
        <a
          href="#"
          class="bg-red-600 hover:bg-red-700 text-white sm:p-4 p-2 rounded-full transition"
          aria-label="YouTube"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M21.8 8s-.2-1.43-.8-2.06a2.83 2.83 0 0 0-2.01-.82C16.19 5 12 5 12 5s-4.19 0-6.99.12c-.8 0-1.56.3-2.01.82C2.41 6.57 2.2 8 2.2 8S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.43.8 2.06a2.83 2.83 0 0 0 2.01.82c2.8.12 6.99.12 6.99.12s4.19 0 6.99-.12a2.83 2.83 0 0 0 2.01-.82c.6-.63.8-2.06.8-2.06s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM10 15.5v-7l6 3.5-6 3.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Glow effect */
.drop-shadow-glow {
  filter: drop-shadow(0 0 6px #facc15);
}

/* Slow bounce */
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s infinite;
}

/* Slow pulse */
@keyframes pulse-slow {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.95;
  }
}
.animate-glow-fast {
  animation: pulse-slow 2.5s ease-in-out infinite;
}
</style>
