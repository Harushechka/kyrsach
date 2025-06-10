<template>
  <div class="card" @click="$emit('select', certificate.id)">
    <img :src="certificate.image" :alt="certificate.title" />
    <h3>{{ certificate.title }}</h3>
    <p>{{ certificate.description }}</p>
    <strong>{{ certificate.price }} ₽</strong>
  </div>
</template>

<script setup>
defineProps({
  certificate: Object
})
</script>

<style scoped>
.card {
  background: white;
  color: black;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.03);
}
.card img {
  width: 100%;
  border-radius: 6px;
}
</style>
