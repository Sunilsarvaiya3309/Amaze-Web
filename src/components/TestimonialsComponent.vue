
<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const testimonialRefs = ref([]);

const testimonials = [
  {
    name: "Aarti Sharma",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    feedback:
      "Amaze Driving School gave me the confidence I needed. The instructors were super patient and professional!",
    location: "Ahmedabad",
    rating: 5,
  },
  {
    name: "Vikas Mehta",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    feedback:
      "Their cars are well-maintained and training is structured. Highly recommended!",
    location: "Surat",
    rating: 5,
  },
  {
    name: "Neha Joshi",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    feedback:
      "Very polite staff and flexible timings. I passed my driving test on the first attempt.",
    location: "Vadodara",
    rating: 5,
  },
  {
    name: "Rahul Jain",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    feedback:
      "Superb instructors and professional environment. They made learning fun and safe.",
    location: "Rajkot",
    rating: 5,
  },
];

onMounted(() => {
  testimonialRefs.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, y: 60, scale: 0.95 },
      enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: 0.2 + index * 0.2,
        },
      },
    });
  });
});
</script>

<template>
  <section class="bg-yellow-100 text-black dark:bg-gray-900 dark:text-white py-20 px-6 sm:px-10">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-extrabold text-black dark:text-yellow-400 mb-4">
        What Our Students Say
      </h2>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        Real feedback from happy drivers who trained with Amaze Driving School
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        ref="testimonialRefs"
        class="bg-white text-black dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-2xl relative group overflow-hidden border border-yellow-400/10 transition duration-300"
      >
        <div class="flex items-center space-x-4 mb-4">
          <img
            :src="testimonial.image"
            alt="photo"
            class="w-16 h-16 rounded-full border-4 border-yellow-400 shadow"
          />
          <div>
            <h3 class="font-semibold text-lg text-black dark:text-yellow-300">
              {{ testimonial.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ testimonial.location }}</p>
          </div>
        </div>

        <div class="flex mb-3 animate-pulse-slow">
          <svg
            v-for="n in testimonial.rating"
            :key="n"
            class="w-5 h-5 text-yellow-400 drop-shadow-glow"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.04 3.21a1 1 0 00.95.69h3.376c.969 0 1.371 1.24.588 1.81l-2.732 1.986a1 1 0 00-.364 1.118l1.04 3.21c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.732 1.986c-.784.57-1.838-.197-1.539-1.118l1.04-3.21a1 1 0 00-.364-1.118L3.672 8.637c-.783-.57-.38-1.81.588-1.81h3.376a1 1 0 00.95-.69l1.04-3.21z"
            />
          </svg>
        </div>

        <p class="text-gray-800 dark:text-gray-200 leading-relaxed relative z-10">
          "{{ testimonial.feedback }}"
        </p>

        <!-- glow hover effect -->
        <div
          class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-5 blur-lg transition duration-700"
        ></div>
      </div>
    </div>

    <div class="mt-16 flex justify-center">
      <a
        href="https://www.google.com/search?q=Amaze+motor+driving+school+reviews"
        target="_blank"
        rel="noopener"
        class="relative inline-flex items-center px-8 py-4 rounded-full text-lg font-bold text-black bg-yellow-400 dark:text-gray-900 dark:bg-yellow-400 shadow-xl ring-4 ring-yellow-500/50 animate-[pulseSlow_2s_ease-in-out_infinite] transition hover:scale-105"
      >
        <span
          class="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 opacity-10 blur-2xl rounded-full z-[-1]"
        ></span>
        ⭐ Give Google Review
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Custom glow for stars */
.drop-shadow-glow {
  filter: drop-shadow(0 0 5px #facc15);
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.85;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 2s infinite;
}
</style>
