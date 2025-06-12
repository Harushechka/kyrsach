<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const totalPrice = computed(() => {
  return cartStore.cartItems.reduce((sum, item) => {
    const numeric = parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0
    return sum + numeric * item.quantity
  }, 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
})
</script>

<template>
  <div class="container py-5">
    <h2 class="mb-4">🛒 Ваша корзина</h2>

    <div v-if="cartStore.cartItems.length === 0" class="alert alert-warning text-center">
      Корзина пуста.
    </div>

    <div v-else>
      <div class="row g-4">
        <div
          v-for="item in cartStore.cartItems"
          :key="item.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card h-100 shadow-sm border-0">
            <img :src="item.image" class="card-img-top" :alt="item.name">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text small">{{ item.description }}</p>
              <p class="mb-1 fw-bold">Цена: {{ item.price }}</p>
              <p class="mb-2">Кол-во: {{ item.quantity }}</p>
              <button
                @click="cartStore.removeFromCart(item.id)"
                class="btn btn-outline-danger mt-auto"
              >
                <i class="bi bi-trash"></i> Удалить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="text-end mt-5">
        <h4>Итог: <span class="text-success">{{ totalPrice }}</span></h4>
        <button class="btn btn-dark mt-3">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
