import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/tailwind.css';
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App);

app.use(router).use(MotionPlugin).mount('#app');
