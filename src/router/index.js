import { createRouter, createWebHistory } from 'vue-router'
import CertificateView from '@/pages/CertificateView.vue'
import About from '../views/AboutView.vue' 
import HomeView from '@/views/HomeView.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  { path: '/certificate', component: CertificateView },
  {
    path: '/about', name: 'About', component: About },
  {path: '/home', component: HomeView},
  {path: '/cart', name: 'Cart', component: Cart},
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
