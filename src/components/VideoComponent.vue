<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";
import MainVIdeo from "@/assets/videos/Main.mov";

const galleryRefs = ref([]);
const galleryVideos = [MainVIdeo];

onMounted(() => {
  galleryRefs.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, y: 60, scale: 0.95 },
      enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 150,
          delay: index * 0.1,
        },
      },
    });
  });
});
</script>

<template>
  <section
    class="bg-yellow-100 text-black dark:bg-gray-950 dark:text-white py-20 px-6 sm:px-10"
  >
    <div class="text-center mb-14">
      <h2 class="text-4xl font-extrabold text-black dark:text-yellow-400 mb-4">
        Video Gallery
      </h2>
      <p class="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        Real moments from training, practice sessions and amazing students!
      </p>
    </div>

    <div v-for="(video, index) in galleryVideos" :key="index" ref="galleryRefs">
      <video autoplay loop playsinline class="rounded-lg sm:w-4/12 mx-auto">
        <source :src="video" type="video/mov" />
      </video>
    </div>
  </section>
</template>

<style scoped>
@keyframes zoomInfinite {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-zoomInfinite {
  animation: zoomInfinite 15s ease-in-out infinite;
}
</style>
