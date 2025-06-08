<!-- src/components/Header.vue -->
<template>
  <header class="site-header">
    <nav class="nav">
      <router-link to="/" class="logo">K-Glow</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/certificate">Сертификаты</router-link></li>
        <li><router-link to="/about">О нас</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.nav-links li a {
  text-decoration: none;
  color: #555;
  transition: color 0.2s;
}

.nav-links li a:hover {
  color: #000;
}
</style>
