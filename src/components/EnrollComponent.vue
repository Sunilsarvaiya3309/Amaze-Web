<script setup>
import { ref } from "vue";

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <!-- 🔶 Enroll Section -->
  <section
    class="relative bg-gradient-to-r from-yellow-100 via-yellow-100 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 text-center overflow-hidden transition-colors duration-500"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 80 },
      }"
      class="max-w-3xl mx-auto"
    >
      <h2
        class="text-4xl sm:text-5xl font-bold text-black dark:text-yellow-300 mb-4"
      >
        Ready to Learn Driving?
      </h2>
      <p class="text-lg text-black/80 dark:text-gray-300 mb-8">
        Join Amaze Motor Driving School today and become a confident driver with
        our expert instructors.
      </p>

      <button
        @click="openModal"
        class="relative px-10 py-4 font-semibold text-white bg-black dark:bg-yellow-400 dark:text-black rounded-full shadow-lg transition-all hover:scale-105 hover:bg-gray-900 dark:hover:bg-yellow-300"
      >
        <span class="relative z-10">Enroll Now</span>
        <span
          class="absolute inset-0 rounded-full border-4 border-yellow-300 dark:border-white animate-pulse"
          style="filter: drop-shadow(0 0 12px rgba(250, 204, 21, 0.7))"
        ></span>
      </button>
    </div>
  </section>

  <!-- 🔷 Enroll Modal -->
  <transition name="fade-scale">
    <div
      v-if="showModal"
      class="fixed inset-0 p-4 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', stiffness: 120 },
        }"
        :leave="{ opacity: 0, scale: 0.8 }"
        class="bg-white dark:bg-gray-900 rounded-2xl p-8 w-full max-w-md shadow-2xl text-center relative transition-colors duration-500"
      >
        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-yellow-300">
          Enroll Form
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Please contact us or visit our office to confirm your enrollment.
        </p>

        <div class="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            class="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            class="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            class="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Submit
          </button>
        </div>

        <button
          @click="closeModal"
          class="absolute top-2 right-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-yellow-300 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
