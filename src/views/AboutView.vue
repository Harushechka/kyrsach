<template>
  <div class="about-page">
  
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

    <section class="info-section">
      <div class="container">
        <div class="info-card">
          <h2 class="section-title text-center">Информация для клиентов</h2>
          
          <div class="accordion-container">
            <div class="accordion-item" x-data="{ open: false }">
              <button class="accordion-header" @click="open = !open">
                <span>Доставка</span>
                <span class="accordion-icon" x-text="open ? '−' : '+'"></span>
              </button>
              <div class="accordion-content" x-show="open" x-collapse>
                <p>Доставка по России осуществляется через СДЭК и Почту России. При заказе на сумму от 10 000 рублей доставка предоставляется бесплатно. Срок обработки заказа составляет 3 рабочих дня. Заказы на доставку принимаются с понедельника по пятницу. Если вы оформили заказ в выходной, его обработка начнется в ближайший рабочий день.</p>
                <h3 class="mt-4 font-medium">Сроки доставки:</h3>
                <ul class="list-disc pl-5 mt-2">
                  <li>Доставка по Краснодару и Краснодарскому краю: при оформлении и оплате заказа до 14:00 доставка будет выполнена уже на следующий день.</li>
                  <li>Доставка в другие города России: Обычно доставка занимает от 3 до 5 рабочих дней. Отправка в другие города производится через СДЭК или Почту России, при этом расходы на доставку несет покупатель.</li>
                </ul>
              </div>
            </div>
            
            <div class="accordion-item" x-data="{ open: false }">
              <button class="accordion-header" @click="open = !open">
                <span>Способы оплаты</span>
                <span class="accordion-icon" x-text="open ? '−' : '+'"></span>
              </button>
              <div class="accordion-content" x-show="open" x-collapse>
                <p>Мы принимаем следующие способы оплаты:</p>
                <ul class="list-disc pl-5 mt-2">
                  <li>Банковские карты (Visa, Mastercard, МИР)</li>
                  <li>Онлайн-платежи через Сбербанк Онлайн, Тинькофф и другие банки</li>
                  <li>Наложенный платеж (при получении в отделении СДЭК или Почты России)</li>
                  <li>Электронные кошельки (QIWI, ЮMoney)</li>
                </ul>
              </div>
            </div>
            
            <div class="accordion-item" x-data="{ open: false }">
              <button class="accordion-header" @click="open = !open">
                <span>Возврат товара</span>
                <span class="accordion-icon" x-text="open ? '−' : '+'"></span>
              </button>
              <div class="accordion-content" x-show="open" x-collapse>
                <p>Вы можете вернуть товар в течение 14 дней с момента получения заказа. Для возврата необходимо:</p>
                <ul class="list-disc pl-5 mt-2">
                  <li>Сохранить оригинальную упаковку и товарный вид продукции</li>
                  <li>Написать заявление на возврат</li>
                  <li>Отправить товар обратно нам за свой счет</li>
                </ul>
                <p class="mt-4">Возврат денежных средств осуществляется в течение 10 рабочих дней после получения нами товара.</p>
              </div>
            </div>
            
            <div class="accordion-item" x-data="{ open: false }">
              <button class="accordion-header" @click="open = !open">
                <span>Самовывоз</span>
                <span class="accordion-icon" x-text="open ? '−' : '+'"></span>
              </button>
              <div class="accordion-content" x-show="open" x-collapse>
                <p>Вы можете забрать свой заказ самостоятельно из нашего офиса в Краснодаре:</p>
                <p class="mt-2 font-medium">Адрес:</p>
                <p>г. Краснодар, ул. Красная, 123, офис 45</p>
                <p class="mt-2 font-medium">Часы работы:</p>
                <p>Пн-Пт: 10:00 - 19:00<br>Сб: 11:00 - 16:00<br>Вс: выходной</p>
                <p class="mt-4">Перед приездом обязательно свяжитесь с нами для подтверждения наличия заказа.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="team-section">
      <div class="container">
        <h2 class="section-title text-center">Наша команда</h2>
        <div class="team-grid">
         
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
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  mounted() {
    this.loadAlpineJS();
  },
  methods: {
    loadAlpineJS() {
      if (window.Alpine) return;

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }
}
</script>

<style scoped>
.about-page {
  padding: 60px 0 0;
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}


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


.info-section {
  margin-bottom: 60px;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.accordion-container {
  margin-top: 30px;
}

.accordion-item {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 12px;
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  padding: 16px 20px;
  text-align: left;
  background-color: #f8fafc;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #2d3748;
  cursor: pointer;
  transition: background-color 0.2s;
}

.accordion-header:hover {
  background-color: #edf2f7;
}

.accordion-icon {
  font-size: 1.2rem;
  font-weight: bold;
  color: #d6336c;
}

.accordion-content {
  padding: 0 20px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-content p, .accordion-content ul {
  padding: 16px 0;
}


.team-section {
  padding: 40px 0 60px;
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


@media (max-width: 768px) {
  .about-card, .info-card {
    padding: 25px;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
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
}

@media (max-width: 480px) {
  .about-card, .info-card {
    padding: 20px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .social-icons {
    gap: 15px;
  }
  
  .full-width-social-section .social-icon {
    font-size: 22px;
  }
  
  .accordion-header {
    padding: 12px 16px;
    font-size: 0.95rem;
  }
  
  .accordion-content {
    padding: 0 16px;
  }
}
</style>