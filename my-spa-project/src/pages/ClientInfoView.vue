<template>
  <div class="client-info">
    <h1>ИНФОРМАЦИЯ ДЛЯ КЛИЕНТОВ</h1>

    <section class="delivery-section">
      <h2>Доставка</h2>
      <p>
        Доставка по России осуществляется через СДЭК и Почту России. При заказе на сумму от 10 000 рублей доставка предоставляется бесплатно. 
        Срок обработки заказа составляет 3 рабочих дня. Заказы на доставку принимаются с понедельника по пятницу. 
        Если вы оформили заказ в выходной, его обработка начнется в ближайший рабочий день.
      </p>

      <h3>Сроки доставки:</h3>
      <ul>
        <li>
          Доставка по Краснодару и Краснодарскому краю: при оформлении и оплате заказа до 14:00 доставка будет выполнена уже на следующий день.
        </li>
        <li>
          Доставка в другие города России: Обычно доставка занимает от 3 до 5 рабочих дней. 
          Отправка в другие города производится через СДЭК или Почту России, при этом расходы на доставку несет покупатель.
        </li>
      </ul>
    </section>

    <section class="payment-section">
      <h2>Способы оплаты</h2>
      <!-- Здесь можно добавить способы оплаты -->
    </section>

    <section class="return-section">
      <h3>Возврат товара</h3>
      <!-- Здесь можно добавить информацию о возврате -->
    </section>

    <section class="pickup-section">
      <h3>Самовывоз</h3>
      <!-- Здесь можно добавить информацию о самовывозе -->
    </section>

    <section class="social-section">
      <h3>СОЦИАЛЬНЫЕ СЕТИ</h3>
      <!-- Здесь можно добавить ссылки на соцсети -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'ClientInfoView'
}
</script>

<style scoped>
.client-info {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  text-transform: uppercase;
}

h2 {
  margin: 25px 0 15px;
  font-size: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

h3 {
  margin: 20px 0 10px;
  font-size: 18px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

section {
  margin-bottom: 30px;
}
</style>