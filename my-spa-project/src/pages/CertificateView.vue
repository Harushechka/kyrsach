<template>
  <div class="certificate-page">
    <section class="page-header">
      <h1>Подарочные сертификаты</h1>
      <p>Выберите подходящий сертификат и подарите заботу</p>
    </section>

    <div class="certificates-grid">
      <CertificateCard
        v-for="certificate in certificates"
        :key="certificate.id"
        :certificate="certificate"
        @select="selectCertificate"
      />
    </div>

    <CertificateForm
      v-if="selectedCertificate"
      :certificate="selectedCertificate"
      @back="resetSelection"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCertificateStore } from '@/stores/certificates.store'
import CertificateCard from '@/components/certificates/CertificateCard.vue'
import CertificateForm from '@/components/certificates/CertificateForm.vue'

const store = useCertificateStore()
const { certificates, selectedCertificate } = storeToRefs(store)
const { fetchCertificates, selectCertificate, resetSelection } = store

onMounted(fetchCertificates)
</script>

<style scoped>
.certificate-page {
  padding: 2rem;
  background: url('/images/new-certificate-bg.jpg') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  color: #fff;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
