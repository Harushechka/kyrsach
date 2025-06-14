<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
  <div>
    <!-- Индикатор загрузки -->
    <div v-if="productsStore.isLoading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>

    <!-- Основной контент -->
    <template v-else>
      <!-- Промо-блок -->
      <section class="d-flex flex-wrap">
        <div class="col-md-6 p-0">
          <img src="https://static.tildacdn.com/tild6237-3632-4137-b537-333966643539/foto_4.jpg" class="img-fluid w-100" alt="Promo bubbles">
        </div>
        <div class="col-md-6 p-0 position-relative">
          <div class="position-absolute w-100 h-100" style="
            background-image: url('https://pibig.info/uploads/posts/2022-07/1657191065_4-pibig-info-p-nezhno-rozovii-fon-odnotonnii-4.png');
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            z-index: 0;">
          </div>
          
          <div class="d-flex align-items-center justify-content-center h-100 p-5 position-relative" style="z-index: 1;">
            <div class="text-center">
              <h3>СКИДКА 8% НА ВСЕ ТОВАРЫ<br>ПО ПРОМОКОДУ: <strong>WOMAN</strong></h3>
              <button class="btn btn-dark mt-3" disabled>
                ПЕРЕЙТИ К ПОКУПКАМ
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Текстовый блок -->
      <section class="py-5 text-center">
        <div class="container"> 
          <p class="lead">
            <strong>Уход за кожей</strong> — это не просто рутина, а <em>проявление любви к себе</em>.<br>
            Чистота, увлажнение и забота о коже делают её не только здоровой, но и сияющей изнутри.
          </p>
        </div>
      </section>

      <!-- Категории -->
      <section class="container py-5">
        <h2 class="mb-2">КАТЕГОРИИ</h2>
        <div class="row g-3">
          <div v-for="(category, index) in productsStore.categories" :key="index" class="col-6 col-md-2 text-center">
            <img :src="category.image" class="img-fluid rounded" :alt="category.name">
            <p class="mt-2 small">{{ category.name }}</p>
          </div>
        </div>
      </section>

      <!-- Уход за лицом -->
      <section class="container py-5">
        <h2 class="mb-2">УХОД ЗА ЛИЦОМ</h2>
        <p class="mb-4">Глубокий уход за кожей лица для сохранения молодости и сияния.</p>

        <div class="row g-4">
          <div v-for="product in productsStore.faceProducts" :key="product.id" class="col-12 col-md-4">
            <div class="product-card p-3 text-center">
              <img :src="product.image" class="img-fluid mb-3" :alt="product.name">
              <h5 class="product-name">{{ product.name }}</h5>
              <p class="product-description mb-2">{{ product.description }}</p>
              <p class="product-price fw-bold">{{ product.price }}</p>
              <button @click="addToCart(product)" class="btn btn-outline-dark mt-2">
                <i class="bi bi-cart"></i> В корзину
              </button>
            </div>
          </div>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-link text-dark text-decoration-none p-0 fw-bold" disabled>
            СМОТРЕТЬ ВСЕ →
          </button>
        </div>
      </section>

      <!-- Скидки -->
      <section class="text-center py-5" style="background: url('https://static.tildacdn.com/tild3864-3138-4361-b864-336363343931/photo_2024-03-10_14-10-04.jpg') no-repeat center/cover">
        <div class="container bg-white bg-opacity-75 p-4">
          <h4 class="mb-3">СКИДКА 10% ПО ПРОМОКОДУ K‑GLOW</h4>
          <p>Не откладывайте уход за собой — выбирайте любимые средства.</p>
          <button class="btn btn-dark" disabled>
            ВСЕ АКЦИИ И СКИДКИ →
          </button>
        </div>
      </section>

      <!-- Уход за телом -->
      <section class="container py-5">
        <h2 class="mb-2 text-uppercase">УХОД ЗА ТЕЛОМ</h2>
        <p class="mb-4">Уход за телом — это не только забота о коже, но и способ наполнить себя энергией и гармонией.</p>
        
        <div class="row g-4">
          <div v-for="product in productsStore.bodyProducts" :key="product.id" class="col-12 col-md-4">
            <div class="product-card p-3 text-center border-0">
              <img :src="product.image" class="img-fluid mb-3" :alt="product.name">
              <h5 class="product-name fw-bold mb-2">{{ product.name }}</h5>
              <p class="product-description mb-3">{{ product.description }}</p>
              <p class="product-price fw-bold mb-3">{{ product.price }}</p>
              <button @click="addToCart(product)" class="btn btn-outline-dark">
                <i class="bi bi-cart"></i> В корзину
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-end mt-4">
          <button class="btn btn-link text-dark text-decoration-none p-0 fw-bold" disabled>
            СМОТРЕТЬ ВСЕ →
          </button>
        </div>
      </section>

      <!-- О магазине -->
      <section class="py-5 bg-light">
        <div class="container d-md-flex align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 class="img-fluid rounded" 
                 alt="Корейская косметика от K-GLOW">
          </div>
          <div class="col-md-6 px-md-5">
            <h2>K‑GLOW</h2>
            <p>
              Наш магазин — это тщательно отобранная коллекция лучших косметических средств из Кореи. Мы предлагаем бренды COSRX,
              Medi‑Peel, Missha и другие.
            </p>
            <button class="btn btn-dark mt-3" disabled>
              ЗА ПОКУПКАМИ →
            </button>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useProductsStore } from '@/stores/productsStore'
import { onMounted } from 'vue'

const cartStore = useCartStore()
const productsStore = useProductsStore()

onMounted(() => {
  if (productsStore.categories.length === 0) {
    productsStore.fetchProducts()
  }
})

const addToCart = (product) => {
  cartStore.addToCart(product)
}
</script>

<style scoped>
/* Стили для неактивных кнопок */
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* Основные стили */
section {
  margin-bottom: 2rem;
}

.btn {
  border-radius: 50px !important; 
  padding: 10px 25px !important;
  transition: all 0.3s ease;
}

.btn-dark {
  background-color: #e84393 !important; 
  border-color: #c21a6b !important;
  color: white !important;
}

.btn-dark:hover:not(:disabled) {
  background-color: #ad175f !important;
  border-color: #e84393 !important;
}

.btn-outline-dark {
  border-color: #ce106c !important;
  color: #e84393 !important;
  background-color: transparent !important;
}

.btn-outline-dark:hover:not(:disabled) {
  background-color: #960f50 !important;
  color: white !important;
}

.btn-link {
  color: #e84393 !important;
  background: none;
  border: none;
  padding: 0;
}

.btn-link:hover:not(:disabled) {
  color: #e84393 !important;
  text-decoration: underline !important;
}
</style>