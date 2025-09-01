import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/tailwind.css';
import { MotionPlugin } from '@vueuse/motion'

<<<<<<< HEAD
if (process.env.NODE_ENV === 'development') {
  const observerErrorHandler = window.onerror;
  window.onerror = function (message, ...args) {
    if (
      typeof message === "string" &&
      message.includes("ResizeObserver loop completed")
    ) {
      return true; // Suppress it
    }
    return observerErrorHandler?.(message, ...args);
  };

  window.addEventListener("error", (e) => {
    if (e.message.includes("ResizeObserver loop completed")) {
      e.stopImmediatePropagation();
    }
  });
}

=======
>>>>>>> 28bc77c11c43f8163eb3709cafb1f76c49fbe40a
const app = createApp(App);

app.use(router).use(MotionPlugin).mount('#app');
