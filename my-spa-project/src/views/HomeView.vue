<template>
  <div class="gift-card-page">
    <main class="container">
      <div class="gift-card-layout">
        <aside class="promo">
          <div class="brand-info">
            <h3>K‑GLOW</h3>
            <p>Интернет‑магазин корейской косметики</p>
          </div>
          <div class="promo-img">
            <img :src="promoImage" alt="Корейская косметика">
          </div>
          <div class="socials">
            <h4>СОЦИАЛЬНЫЕ СЕТИ</h4>
            <div class="social-icons">
              <a href="#"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-telegram"></i></a>
              <a href="#"><i class="bi bi-vk"></i></a>
              <a href="#"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </aside>

        <section class="card-section">
          <div class="card">
            <h1>K‑GLOW</h1>
            <div class="title">ПОДАРОЧНЫЙ СЕРТИФИКАТ</div>
            <div class="value">5 000 ₽</div>
            <form @submit.prevent="openModal">
              <div class="fields">
                <label>
                  Кому:
                  <input v-model="recipient" placeholder="Имя получателя">
                </label>
                <label>
                  Дата выдачи:
                  <input v-model="date" type="date">
                </label>
              </div>
              <div class="conditions">
                <p>Срок действия сертификата 3 месяца</p>
                <p>г. Краснодар, ул. Ленина д. 113</p>
                <p>Тел. +7 938 353‑35‑41</p>
              </div>
              <button type="submit">Заказать сертификат →</button>
            </form>
          </div>
        </section>
      </div>
    </main>

    <!-- Модалка -->
    <div v-if="showModal" class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h5>Заказать сертификат</h5>
        <p>Заполните ваши контакты, и мы свяжемся с вами.</p>
        <form @submit.prevent="submitForm">
          <input v-model="name" type="text" placeholder="Ваше имя*" required>
          <input v-model="email" type="email" placeholder="Email*" required>
          <input v-model="phone" type="tel" placeholder="+7 (999) 999‑99‑99" required>
          <label>
            <input v-model="agree" type="checkbox" required>
            Я согласен на обработку персональных данных
          </label>
          <button type="submit">Отправить заявку</button>
          <button type="button" @click="closeModal">Закрыть</button>
        </form>
      </div>
    </div>

    <!-- Футер -->
    <footer class="site-footer">
      <p>© 2025 K‑GLOW — Интернет‑магазин корейской косметики :contentReference[oaicite:1]{index=1}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const promoImage = '...'; // ваш URL
const recipient = ref('')
const date = ref('')
const name = ref('')
const email = ref('')
const phone = ref('')
const agree = ref(false)
const showModal = ref(false)

function openModal() { showModal.value = true }
function closeModal() { showModal.value = false }
function submitForm() {
  // логика отправки...
  alert('Заявка отправлена!')
  closeModal()
}
</script>

<style scoped>
/* ваш стиль, оптимизированный под текущий дизайн сайта */
.gift-card-layout {
  display: flex;
  gap: 30px;
}
/* добавьте остальные стили из вашего шаблона с адаптацией */
</style>
