<!-- src/components/Header.vue -->
<template>
  <header class="site-header">
    <nav class="nav">
      <router-link to="/" class="logo">K-Glow</router-link>
      <ul class="nav-links">
        <li><router-link to="/homeq">Главная</router-link></li>
        <li><router-link to="/certificate">Сертификаты</router-link></li>
        <li><router-link to="/about">О нас</router-link></li>
        <li>
          <router-link to="/cart" class="cart-icon">
            <i class="bi bi-cart"></i>
            <span class="cart-badge" v-if="cartCount > 0">{{ cartCount }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.totalItems);
</script>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links li a {
  text-decoration: none;
  color: #555;
  transition: color 0.2s;
  font-weight: 500;
  display: flex;
  align-items: center;
  position: relative;
}

.nav-links li a:hover {
  color: #000;
}

.cart-icon {
  font-size: 1.25rem;
  padding: 0.5rem;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff4757;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
}
</style>