// src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // <- router/index.js를 자동 인식함
import './assets/reset.css' // <- 전역 CSS 경로

const app = createApp(App)
app.use(router)
app.mount('#app')
