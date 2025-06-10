<template>
  <div class="about-page">
    <!-- Основной блок о компании -->
    <section class="about-section">
      <div class="container">
        <div class="about-card">
          <h1 class="section-title">О нас</h1>
          <div class="about-text">
            <p>Мы — команда, влюблённая в корейскую косметику и культуру ухода за кожей. Наш магазин создан, чтобы делиться с вами лучшими бьюти-средствами из Кореи.</p>
            <p>Мы отбираем только оригинальную продукцию от проверенных брендов, таких как COSRX, Innisfree, Missha, Some By Mi и другие. Наша миссия — сделать эффективный и безопасный уход доступным для каждого.</p>
            <p>Доставка по всей России, консультации специалистов и поддержка 24/7 — всё это для вашего комфорта.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок команды -->
    <section class="team-section">
      <div class="container">
        <h2 class="section-title text-center">Наша команда</h2>
        <div class="team-grid">
          <!-- Карточка 1 -->
          <div class="team-card">
            <div class="team-photo">
              <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" alt="Анна Ким">
            </div>
            <div class="team-info">
              <h3>Анна Ким</h3>
              <p class="position">Основатель и CEO</p>
              <p class="bio">Эксперт по корейской косметике с 10-летним опытом работы в индустрии красоты.</p>
            </div>
          </div>

          <!-- Карточка 2 -->
          <div class="team-card">
            <div class="team-photo">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" alt="Дмитрий Пак">
            </div>
            <div class="team-info">
              <h3>Дмитрий Пак</h3>
              <p class="position">Технический директор</p>
              <p class="bio">Отвечает за логистику и контроль качества продукции. 7 лет в сфере поставок косметики.</p>
            </div>
          </div>

          <!-- Карточка 3 -->
          <div class="team-card">
            <div class="team-photo">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" alt="Елена Ли">
            </div>
            <div class="team-info">
              <h3>Елена Ли</h3>
              <p class="position">Главный косметолог</p>
              <p class="bio">Сертифицированный специалист по корейскому уходу. Проводит индивидуальные консультации.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding: 60px 0;
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Стили для блока "О нас" */
.about-section {
  margin-bottom: 60px;
}

.about-card {
  background: linear-gradient(135deg, #f7dbe8 0%, #f8f1f5 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(214, 51, 108, 0.1);
}

.section-title {
  color: #d6336c;
  font-size: 2.2rem;
  margin-bottom: 25px;
  font-weight: 600;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 15px;
}

/* Стили для блока команды */
.team-section {
  padding: 40px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.team-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(214, 51, 108, 0.15);
}

.team-photo {
  height: 300px;
  overflow: hidden;
}

.team-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-photo img {
  transform: scale(1.05);
}

.team-info {
  padding: 25px;
  text-align: center;
}

.team-info h3 {
  color: #d6336c;
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.position {
  color: #666;
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 1rem;
}

.bio {
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .about-card {
    padding: 30px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
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