import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/pages/CertificateView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/certificate', component: CertificateView },
  { path: '/home', component: HomeView},
  // Добавь другие маршруты по заданию
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
