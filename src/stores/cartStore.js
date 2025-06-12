import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'my-cart'

export const useCartStore = defineStore('cart', () => {
  // Попытка загрузить из localStorage
  const saved = localStorage.getItem(STORAGE_KEY)
  const cartItems = ref(saved ? JSON.parse(saved) : [])

  const addToCart = (product) => {
    const existing = cartItems.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const totalItems = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  // Следим за изменениями cartItems и сохраняем в localStorage
  watch(cartItems, (newVal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
  }, { deep: true })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems
  }
})
