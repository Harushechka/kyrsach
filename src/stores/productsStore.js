import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    categories: [
      { 
        name: 'Уход за лицом', 
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        name: 'Уход за телом', 
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        name: 'Уход за волосами', 
        image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        name: 'Макияж', 
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        name: 'Наборы', 
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        name: 'Аксессуары', 
        image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      }
    ],
    faceProducts: [
      {
        id: 1,
        name: 'MIX PEEL PEPTIDE',
        description: 'Пилинг-сыворотка для лица',
        price: '3 790 ₽',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
      },
      {
        id: 2,
        name: 'NISSEHA B5 ACID',
        description: 'Увлажняющая сыворотка',
        price: '5 980 ₽',
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
      },
      {
        id: 3,
        name: 'PEEL LACTO TONER',
        description: 'Очищающий тоник',
        price: '4 690 ₽',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400'
      }
    ],
    bodyProducts: [
      { 
        id: 4, 
        name: 'SOME BY MI AHA BHA', 
        description: 'Очищающий гель для тела', 
        price: '2640 ₽', 
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&w=400&h=400&fit=crop&q=80'
      },
      { 
        id: 5, 
        name: 'PEPTIDE POLISHER', 
        description: 'Роллер-крем для лица и шеи', 
        price: '2320 ₽', 
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      },
      { 
        id: 6, 
        name: 'PEEL SILK SHINING', 
        description: 'Гель-скраб для тела', 
        price: '2510 ₽', 
        image: 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80' 
      }
    ]
  }),
  getters: {
    getProductById: (state) => (id) => {
      return [...state.faceProducts, ...state.bodyProducts].find(p => p.id === id)
    },
    allProducts: (state) => {
      return [...state.faceProducts, ...state.bodyProducts]
    }
  },
})