<script setup>
import { ref, onMounted, computed } from "vue";
import { useMotion } from "@vueuse/motion";

const courseSection = ref(null);

const carCourses = [
  {
    name: "WagonR",
    image: "https://www.stridecabs.com/upload/car/wegnar-removebg-preview.png",
  },
  {
    name: "Swift",
    image:
      "https://www.varunmaruti.com/uploads/products/colors/new-swift-pearlr-arctic-white-with-midnight-black-roof.png",
  },
  {
    name: "Honda Amaze",
    image:
      "https://www.pngarts.com/files/4/Honda-Amaze-Transparent-Background-PNG.png",
  },
  {
    name: "Renault Kiger",
    image:
      "https://cdn.cars24.com/prod/new-car-cms/Renault_kiger_Silver_b41d9dc2ce.png",
  },
  {
    name: "Punch",
    image:
      "https://ackodrive-prod.ackoassets.com/image/tata/punch/orcus-white/images_cdn/small/Transparent.webp",
  },
  {
    name: "Tiago/Automatic",
    image:
      "https://ackodrive-prod.ackoassets.com/image/tata/tiago-2020-2025/flame-red-with-black-roof/images_cdn/large/Transparent.webp",
  },
  {
    name: "Auto/Celerio",
    image:
      "https://mda.spinny.com/sp-file-system/public/2025-06-27/77076666bdff46e2b9f61963be7251e9/raw/file.JPG?q=85&w=350",
  },
  {
    name: "Two Wheeler",
    image:
      "https://images.tractorjunction.com/Red_Velocity_1_5a77774505.png?format=webp&quality=40&width=760&height=424",
  },
];

onMounted(() => {
  useMotion(courseSection, {
    initial: { opacity: 0, y: 80 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: 0.1,
      },
    },
  });
});
</script>

<template>
  <section
    ref="courseSection"
    class="pt-20 pb-32 px-6 xl:px-12 lg:px-20 bg-gradient-to-br from-yellow-50 to-white dark:from-black dark:to-gray-800"
  >
    <div class="text-center mb-16">
      <h2
        class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Our <span class="text-yellow-500">Cars</span>
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Choose the best training program that fits your car preference and
        experience level.
      </p>
    </div>

    <div
      class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10"
    >
      <div
        v-for="(car, index) in carCourses"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 30, scale: 0.95 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay: index * 0.1, type: 'spring' },
        }"
        class="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden group p-4"
      >
        <img
          :src="car.image"
          :alt="car.name"
          class="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
        <div class="p-6 space-y-3 flex flex-col justify-center">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-yellow-300 text-center">
            {{ car.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
