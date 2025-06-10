<template>
  <div class="certificate-page">
    <div class="certificate-layout">
      <!-- Левая часть -->
      <div class="promo-section">
        <div class="shop-info">
          <h3>K-GLOW</h3>
          <p>Интернет-магазин корейской косметики</p>
        </div>

        <div class="photo-area">
          <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
               alt="Корейская косметика" 
               class="product-image">
        </div>

        <!-- Блок социальных сетей внизу -->
        <div class="social-section">
          <h4>СОЦИАЛЬНЫЕ СЕТИ</h4>
          <div class="divider"></div>
          <p class="social-text">Подпишись на наши социальные сети, чтобы быть в курсе всех новостей.</p>
          <div class="social-icons">
            <a href="#" class="social-icon"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-telegram"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-vk"></i></a>
            <a href="#" class="social-icon"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <!-- Правая часть -->
      <div class="certificate-section">
        <div class="certificate-card">
          <div class="certificate-header">
            <h1>K-Glow</h1>
          </div>

          <div class="certificate-body">
            <h2>ПОДАРОЧНЫЙ СЕРТИФИКАТ</h2>
            <div class="amount">5000 ₽</div>

            <div class="details">
              <div class="detail-row">
                <span>Кому:</span>
                <div class="underline-field"></div>
              </div>
              <div class="detail-row">
                <span>Дата выдачи:</span>
                <div class="underline-field"></div>
              </div>

              <div class="additional-info">
                <p>Срок действия сертификата 3 месяца</p>
                <p>Г. Краснодар ул. Поляна д.113</p>
                <p>Тел. +9-98-989-90-78</p>
              </div>
            </div>

            <div class="certificate-footer">
              <button type="button" class="add-certificate-btn" data-bs-toggle="modal" data-bs-target="#certificateModal">
                Заказать сертификат
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div class="modal fade" id="certificateModal" tabindex="-1" aria-labelledby="certificateModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h5 class="modal-title" id="certificateModalLabel">ПОДАРОЧНЫЙ СЕРТИФИКАТ</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
              <p class="text-muted mb-3">Оставьте ваши контакты, и мы свяжемся с вами.</p>

              <div class="mb-3">
                <label for="name" class="form-label">Ваше имя <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="name" required>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="email" required>
              </div>

              <div class="mb-3">
                <label for="recipient" class="form-label">На чье имя сертификат</label>
                <input type="text" class="form-control" id="recipient">
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Телефон <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" id="phone" placeholder="+7 (999) 999-99-99" required>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="agreement" required>
                <label class="form-check-label" for="agreement">
                  Я согласен на обработку персональных данных
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary w-100" style="background-color: #e84393; border: none;">
                Заказать сертификат →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<style scoped>
.certificate-page {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.certificate-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
  min-height: calc(100vh - 40px);
}

.promo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.shop-info {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.shop-info h3 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.shop-info p {
  color: #666;
}

.photo-area {
  flex-grow: 1;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}

.social-section {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: auto;
}

.social-section h4 {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
}

.social-text {
  color: #666;
  text-align: center;
  margin-bottom: 15px;
  font-size: 14px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.social-icon {
  color: #e84393;
  font-size: 24px;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #d63073;
}

.certificate-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.certificate-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.certificate-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0;
}

.certificate-header h1 {
  font-size: 28px;
  color: #333;
}

.certificate-body h2 {
  font-size: 22px;
  text-align: center;
  margin: 15px 0;
  color: #222;
}

.amount {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #e84393;
  margin: 20px 0;
}

.details {
  margin: 20px 0;
}

.detail-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.detail-row span {
  min-width: 80px;
}

.underline-field {
  flex-grow: 1;
  border-bottom: 1px solid #333;
  margin-left: 15px;
  height: 20px;
}

.additional-info {
  margin-top: 30px;
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.certificate-footer {
  margin-top: auto;
  text-align: center;
  padding-top: 15px;
  border-top: 1px dashed #e0e0e0;
}

.add-certificate-btn {
  background-color: #e84393;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-certificate-btn:hover {
  background-color: #d63073;
}

@media (max-width: 768px) {
  .certificate-layout {
    flex-direction: column;
  }
  
  .social-section {
    margin-top: 20px;
  }
}

/* Стили для модального окна */
.modal-content {
  border-radius: 10px;
}

.modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-title {
  font-weight: bold;
  color: #333;
}

.modal-footer {
  border-top: none;
}
</style>