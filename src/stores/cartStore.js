import { defineStore } from 'pinia'

const STORAGE_KEY = 'my-cart'

export const useCartStore = defineStore('cart', {
  state: () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return {
      cartItems: saved ? JSON.parse(saved) : []
    }
  },

  getters: {
    totalItems: (state) => state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.cartItems.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
      this.saveToLocalStorage()
    },

    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId)
      this.saveToLocalStorage()
    },

    clearCart() {
      this.cartItems = []
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cartItems))
    }
  }
})

