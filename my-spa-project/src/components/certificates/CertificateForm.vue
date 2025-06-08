<template>
  <form @submit.prevent="submitForm" class="form">
    <h2>Оформление сертификата</h2>
    <input v-model="form.name" placeholder="Ваше имя" required />
    <input v-model="form.email" placeholder="Email" required />
    <input v-model="form.phone" placeholder="Телефон" required />
    <input v-model="form.recipient" placeholder="Получатель" />
    <textarea v-model="form.message" placeholder="Сообщение" />

    <button type="submit">Отправить</button>
    <button type="button" @click="$emit('back')">Назад</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  recipient: '',
  message: ''
})

function submitForm() {
  console.log('Отправка формы:', form.value)
  alert('Форма отправлена!')
}
</script>

<style scoped>
.form {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  margin: 2rem auto;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
