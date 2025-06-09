// src/stores/cartStore.ts
import { defineStore } from 'pinia';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    updateQuantity(itemId: string, newQuantity: number) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity = newQuantity;
      }
    },

    removeItem(itemId: string) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
  },

  getters: {
    totalPrice(): number {
      return this.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
  },
});
