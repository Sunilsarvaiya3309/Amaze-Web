// src/router/index.js
<<<<<<< HEAD
import { createRouter, createWebHashHistory } from "vue-router";
=======
import { createRouter, createWebHistory } from "vue-router";
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
import Home from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PageCourse from "@/pages/PageCourse.vue";
import PageInstructor from "@/pages/PageInstructor.vue";
import PageTestimonials from "@/pages/PageTestimonials.vue";
import PagePricing from "@/pages/PagePricing.vue";
import PageGallery from "@/pages/PageGallery.vue";
import PageContact from "@/pages/PageContact.vue";
import PageEnroll from "@/pages/PageEnroll.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Homepage",
    component: Home,
  },
  {
    path: "/about",
    name: "PageAbout",
    component: PageAbout,
  },
  {
    path: "/courses",
    name: "PageCourse",
    component: PageCourse,
  },
  {
    path: "/instructors",
    name: "PageInstructors",
    component: PageInstructor,
  },
  {
    path: "/testimonials",
    name: "Pagetestimonials",
    component: PageTestimonials,
  },
  {
    path: "/pricing",
    name: "PagePricing",
    component: PagePricing,
  },
  {
    path: "/gallery",
    name: "PageGallery",
    component: PageGallery,
  },
  {
    path: "/contact",
    name: "PageContact",
    component: PageContact,
  },
  {
    path: "/enroll",
    name: "PageEnroll",
    component: PageEnroll,
  },
];

const router = createRouter({
<<<<<<< HEAD
  history: createWebHashHistory(), // or createWebHashHistory()
=======
  history: createWebHistory(), // or createWebHashHistory()
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
  routes,
});

export default router;
