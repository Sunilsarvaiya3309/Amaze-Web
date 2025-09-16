// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PageCourse from "@/pages/PageCourse.vue";
import PageInstructor from "@/pages/PageInstructor.vue";
import PageTestimonials from "@/pages/PageTestimonials.vue";
import PagePricing from "@/pages/PagePricing.vue";
import PageGallery from "@/pages/PageGallery.vue";
import PageContact from "@/pages/PageContact.vue";
import PagePackages from "@/pages/PageEnroll.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

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
    path: "/cars",
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
  // {
  //   path: "/pricing",
  //   name: "PagePricing",
  //   component: PagePricing,
  // },
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
    path: "/packages",
    name: "PagePackages",
    component: PagePackages,
  },
  // ✅ Catch-all route for 404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory()
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
