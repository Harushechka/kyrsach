import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/pages/CertificateView.vue'
import About from '../views/AboutView.vue' 

const routes = [
  { path: '/certificate', component: CertificateView },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
