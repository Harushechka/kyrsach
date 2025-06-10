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

        <!-- Новый блок с фото товара из API -->
        <div class="additional-product-photo">
          <img :src="apiProductImage" 
               alt="Дополнительный товар" 
               class="api-product-image"
               @error="handleImageError">
          <p class="product-description">Популярный товар месяца</p>
        </div>
      </div>
    </div>

    <div class="full-width-social-section">
      <div class="social-content">
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
import { ref, onMounted } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

const apiProductImage = ref('');
const defaultImage = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
const unsplashAccessKey = 'P7DCJqgu3OLLQBA3UYGOltgoMc2OdR5JXKsMzB0s9WA'; // Здесь ваш ключ API Unsplash

// Функция для загрузки изображения из Unsplash API
const fetchProductImage = async () => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=cosmetics&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    apiProductImage.value = data.urls?.small || defaultImage;
  } catch (error) {
    console.error('Ошибка при загрузке изображения:', error);
    apiProductImage.value = defaultImage;
  }
};

// Обработчик ошибки загрузки изображения
const handleImageError = () => {
  apiProductImage.value = defaultImage;
};

// Загружаем изображение при монтировании компонента
onMounted(() => {
  fetchProductImage();
});
</script>

<style scoped>
.certificate-page {
  font-family: 'Arial', sans-serif;
  padding: 20px 0;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.certificate-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
  flex: 1;
  padding: 0 20px;
}

.promo-section {
  flex: 1;
  display: flex;
  flex-direction: column;
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

.certificate-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.certificate-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  flex-grow: 0.75;
  display: flex;
  flex-direction: column;
}

/* Стили для нового блока с фото из API */
.additional-product-photo {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  margin-top: auto;
}

.api-product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-description {
  color: #666;
  font-size: 14px;
  margin-top: 10px;
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

/* Новые стили для блока социальных сетей */
.full-width-social-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: white;
  padding: 40px 0;
  margin-top: 40px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}

.social-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}

.full-width-social-section h4 {
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.full-width-social-section .divider {
  height: 1px;
  background-color: #e0e0e0;
  margin: 15px auto;
  max-width: 200px;
}

.full-width-social-section .social-text {
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  font-size: 15px;
}

.full-width-social-section .social-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.full-width-social-section .social-icon {
  color: #e84393;
  font-size: 30px;
  transition: all 0.3s;
}

.full-width-social-section .social-icon:hover {
  color: #d63073;
  transform: translateY(-3px);
}

/* Адаптивность */
@media (max-width: 768px) {
  .certificate-layout {
    flex-direction: column;
    padding: 0 15px;
  }
  
  .full-width-social-section {
    margin-top: 20px;
    padding: 30px 0;
  }
  
  .social-icons {
    gap: 20px;
  }
  
  .full-width-social-section .social-icon {
    font-size: 24px;
  }

  .api-product-image {
    height: 150px;
  }
}

@media (max-width: 480px) {
  .social-icons {
    gap: 15px;
  }
  
  .full-width-social-section .social-icon {
    font-size: 22px;
  }

  .additional-product-photo {
    padding: 10px;
  }

  .product-description {
    font-size: 12px;
  }
}
</style>