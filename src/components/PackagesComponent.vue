<script setup>
import { ref } from "vue";

// Tabs
const packageTypes = [
  "Standard",
  "Platinum",
  "Gold",
  "Premium",
  "Emerald",
  "TwoWheeler",
];

const selectedTab = ref("Standard");

// Packages Data
const packages = {
  Standard: [
    {
      title: "Standard Automatic",
      vehicleType: "Hatchback",
      price: 3500,
      duration: "15 Days",
      features: ["30 Minutes per Session", "5–7 KM Distance", "No A/C"],
      note: "Valid for 18 days including Sundays. AC available at additional charge of ₹300.",
    },
    {
      title: "Standard Manual",
      vehicleType: "Sedan",
      price: 2800,
      duration: "15 Days",
      features: ["30 Minutes per Session", "5–7 KM Distance", "No A/C"],
      note: "Valid for 18 days including Sundays. AC available at additional charge of ₹300.",
    },
    {
      title: "Standard Manual",
      vehicleType: "Hatchback",
      price: 2500,
      duration: "15 Days",
      features: ["30 Minutes per Session", "5–7 KM Distance", "No A/C"],
      note: "Valid for 18 days including Sundays. AC available at additional charge of ₹300.",
    },
  ],
  Platinum: [],
  Gold: [],
  Premium: [],
  Emerald: [],
  TwoWheeler: [],
};
</script>

<template>
  <section
    class="py-16 px-4 bg-yellow-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen"
  >
    <div class="max-w-6xl mx-auto text-center">
      <h2
        class="text-3xl sm:text-4xl font-bold text-black dark:text-yellow-500 mb-2"
      >
        Book Your Driving Lessons
      </h2>
      <p class="text-gray-700 dark:text-gray-300 mb-8">
        Follow the steps below to schedule your driving lessons
      </p>

      <!-- Step Indicators -->
      <div
        class="flex sm:flex-row flex-col gap-4 sm:justify-center sm:space-x-8 mb-10"
      >
        <div class="flex sm:flex-col items-center gap-2">
          <div
            class="bg-black dark:bg-yellow-400 text-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center font-bold"
          >
            1
          </div>
          <span class="font-bold text-black dark:text-yellow-400"
            >Select Package</span
          >
        </div>
        <div class="flex sm:flex-col items-center gap-2">
          <div
            class="bg-gray-600 dark:bg-yellow-100 text-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center font-bold"
          >
            2
          </div>
          <span class="">Your Details</span>
        </div>
        <div class="flex sm:flex-col items-center gap-2">
          <div
            class="bg-gray-600 dark:bg-yellow-100 text-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center font-bold"
          >
            3
          </div>
          <span class="">Pick Time</span>
        </div>
        <div class="flex sm:flex-col items-center gap-2">
          <div
            class="bg-gray-600 dark:bg-yellow-100 text-white dark:text-black w-8 h-8 rounded-full flex items-center justify-center font-bold"
          >
            4
          </div>
          <span class="">Confirm Booking Inquiry</span>
        </div>
      </div>

      <!-- Tabs -->
      <div
        class="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 flex-wrap justify-center gap-2 mb-10"
      >
        <button
          v-for="tab in packageTypes"
          :key="tab"
          @click="selectedTab = tab"
          class="px-4 py-2 rounded-md font-medium text-sm sm:text-base transition"
          :class="
            selectedTab === tab
              ? 'bg-black text-yellow-500 dark:bg-yellow-400 dark:text-black'
              : 'dark:bg-yellow-50 bg-gray-200 text-gray-700 hover:bg-black hover:text-yellow-400 hover:dark:bg-yellow-400 hover:dark:text-black'
          "
        >
          {{ tab }}
        </button>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(pkg, index) in packages[selectedTab]"
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 p-6 hover:shadow-lg transition"
          :class="
            index === 0 && selectedTab === 'Standard' ? 'border-blue-600' : ''
          "
        >
          <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-1">
            {{ pkg.title }}
          </h3>
          <span
            class="inline-block text-sm text-white bg-blue-800 px-2 py-1 rounded mb-2"
          >
            {{ pkg.vehicleType }}
          </span>
          <div
            class="text-xl font-semibold text-blue-600 dark:text-yellow-300 mb-2"
          >
            ₹{{ pkg.price }}
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {{ pkg.duration }}
          </p>
          <ul class="text-sm space-y-1 mb-4">
            <li
              v-for="(feat, i) in pkg.features"
              :key="i"
              class="text-green-500 flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ feat }}
            </li>
          </ul>
          <div
            class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded"
          >
            Note: {{ pkg.note }}
          </div>
        </div>

        <div
          v-if="packages[selectedTab].length === 0"
          class="col-span-full text-center text-gray-500 dark:text-gray-400 italic"
        >
          No packages available for "{{ selectedTab }}"
        </div>
      </div>

      <!-- Next Button -->
      <div class="mt-10 text-center">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>
