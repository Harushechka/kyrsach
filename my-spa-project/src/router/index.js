import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/pages/CertificateView.vue'

const routes = [
  { path: '/certificate', component: CertificateView },
  // Добавь другие маршруты по заданию
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
