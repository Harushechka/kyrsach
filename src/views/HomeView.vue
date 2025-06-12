<template>
  <div>
    <!--промоокд-->
    <section class="d-flex flex-wrap">
  <div class="col-md-6 p-0">
    <img src="https://static.tildacdn.com/tild6237-3632-4137-b537-333966643539/foto_4.jpg" class="img-fluid w-100" alt="Promo bubbles">
  </div>
  <div class="col-md-6 p-0 position-relative">
    <!--фоновое изображение для женщин-->
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
        <router-link to="/catalog" class="btn btn-dark mt-3">ПЕРЕЙТИ К ПОКУПКАМ</router-link>
      </div>
    </div>
  </div>
</section>

    <!-- текстик-->
    <section class="py-5 text-center">
      <div class="container"> 
        <p class="lead">
          <strong>Уход за кожей</strong> — это не просто рутина, а <em>проявление любви к себе</em>.<br>
          Чистота, увлажнение и забота о коже делают её не только здоровой, но и сияющей изнутри.
        </p>
      </div>
    </section>

    <!--категории-->
    <section class="container py-5">
      <h2 class="mb-2">КАТЕГОРИИ</h2>
      <div class="row g-3">
        <div v-for="(category, index) in categories" :key="index" class="col-6 col-md-2 text-center">
          <img :src="category.image" class="img-fluid rounded" :alt="category.name" >
          <p class="mt-2 small">{{ category.name }}</p>
        </div>
      </div>
    </section>

    <!--уход за лицом-->
    <section class="container py-5">
      <h2 class="mb-2">УХОД ЗА ЛИЦОМ</h2>
      <p class="mb-4">Глубокий уход за кожей лица для сохранения молодости и сияния.</p>
  
      <div class="row g-4">
        <div v-for="product in faceProducts" :key="product.id" class="col-12 col-md-4">
          <div class="product-card p-3 text-center">
            <img :src="product.image" class="img-fluid mb-3" :alt="product.name" >
            <h5 class="product-name">{{ product.name }}</h5>
            <p class="product-description mb-2">{{ product.description }}</p>
            <p class="product-price fw-bold">{{ product.price }}</p>
          </div>
        </div>
      </div>
  
      <div class="text-end mt-4">
        <router-link to="/catalog/body" class="btn btn-link text-dark text-decoration-none p-0 fw-bold">
          СМОТРЕТЬ ВСЕ →
        </router-link>
      </div>
  </section>

    <!--скидки-->
    <section class="text-center py-5" style="background: url('https://static.tildacdn.com/tild3864-3138-4361-b864-336363343931/photo_2024-03-10_14-10-04.jpg') no-repeat center/cover">
      <div class="container bg-white bg-opacity-75 p-4">
        <h4 class="mb-3">СКИДКА 10% ПО ПРОМОКОДУ K‑GLOW</h4>
        <p>Не откладывайте уход за собой — выбирайте любимые средства.</p>
        <router-link to="/sales" class="btn btn-dark">ВСЕ АКЦИИ И СКИДКИ →</router-link>
      </div>
    </section>

   <!-- Уход за телом -->
<section class="container py-5">
  <h2 class="mb-2 text-uppercase">УХОД ЗА ТЕЛОМ</h2>
  <p class="mb-4">Уход за телом — это не только забота о коже, но и способ наполнить себя энергией и гармонией.</p>
  
  <div class="row g-4">
    <div v-for="product in bodyProducts" :key="product.id" class="col-12 col-md-4">
      <div class="product-card p-3 text-center border-0">
        <img :src="product.image" class="img-fluid mb-3" :alt="product.name" >
        <h5 class="product-name fw-bold mb-2">{{ product.name }}</h5>
        <p class="product-description mb-3">{{ product.description }}</p>
        <p class="product-price fw-bold mb-3">{{ product.price }}</p>
      </div>
    </div>
  </div>
  
  <div class="text-end mt-4">
    <router-link to="/catalog/body" class="btn btn-link text-dark text-decoration-none p-0 fw-bold">
      СМОТРЕТЬ ВСЕ →
    </router-link>
  </div>
</section>


    <!--о магазие-->
    <section class="py-5 bg-light">
      <div class="container d-md-flex align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img src="https://placehold.co/400x400/png?text=About" class="img-fluid rounded" alt="About">
        </div>
        <div class="col-md-6 px-md-5">
          <h2>K‑GLOW</h2>
          <p>
            Наш магазин — это тщательно отобранная коллекция лучших косметических средств из Кореи. Мы предлагаем бренды COSRX,
            Medi‑Peel, Missha и другие.
          </p>
          <router-link to="/about" class="btn btn-dark mt-3">ЗА ПОКУПКАМИ →</router-link>
        </div>
      </div>
    </section>

    
  </div>
</template>

<script setup>
const categories = [
  { name: 'Уход за лицом', image: 'https://placehold.co/400x400/png?text=Face' },
  { name: 'Уход за телом', image: 'https://placehold.co/400x400/png?text=Body' },
  { name: 'Уход за волосами', image: 'https://placehold.co/400x400/png?text=Hair' },
  { name: 'Макияж', image: 'https://placehold.co/400x400/png?text=Makeup' },
  { name: 'Наборы', image: 'https://placehold.co/400x400/png?text=Kits' },
  { name: 'Аксессуары', image: 'https://placehold.co/400x400/png?text=Accessories' },
]

const faceProducts = [
  { id: 1, name: 'MIX PEEL PEPTIDE', description: 'Пилинг-сыворотка для лица', price: '3 790 ₽', image: 'https://placehold.co/400x400/png?text=Serum' },
  { id: 2, name: 'NISSEHA B5 ACID', description: 'Увлажняющая сыворотка', price: '5 980 ₽', image: 'https://placehold.co/400x400/png?text=Oil'},
  { id: 3, name: 'PEEL LACTO TONER', description: 'Очищающий тоник', price: '4 690 ₽', image: 'https://placehold.co/400x400/png?text=Toner'}
]

const bodyProducts = [
  { id: 4, name: 'SOME BY MI AHA BHA', description: 'Очищающий гель для тела', price: '2640 ₽', image: 'https://placehold.co/400x400/png?text=Bodywash' },
  { id: 5, name: 'PEPTIDE POLISHER', description: 'Роллер-крем для лица и шеи',price: '2320 ₽', image: 'https://placehold.co/400x400/png?text=Polisher' },
  { id: 6, name: 'PEEL SILK SHINING',description: 'Гель-скраб для тела', price: '2510 ₽', image: 'https://placehold.co/400x400/png?text=Showercream' },
]

</script>


<style scoped>
section {
  margin-bottom: 2rem;
}

/*стили для всех кнопок */
.btn {
  border-radius: 50px !important; 
  padding: 10px 25px !important;
  transition: all 0.3s ease;
}

/* Основные розовые кнопки */
.btn-dark {
  background-color: #e84393 !important; 
  border-color: #c21a6b !important;
  color: white !important;
}

.btn-dark:hover {
  background-color: #ad175f !important; /*темнее при наведении */
  border-color: #e84393 !important;
}

/*кнопка "ВСЕ АКЦИИ И СКИДКИ"*/
.btn-outline-dark {
  border-color: #ce106c !important;
  color: #e84393 !important;
  background-color: transparent !important;
}

.btn-outline-dark:hover {
  background-color: #960f50 !important;
  color: white !important;
}

/*текстовые ссылки со стрелкой*/
.btn-link {
  color: #e84393 !important;
}

.btn-link:hover {
  color: #e84393 !important;
  text-decoration: underline !important;
}
</style>
