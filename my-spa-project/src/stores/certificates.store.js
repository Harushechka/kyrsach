import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCertificateStore = defineStore('certificates', () => {
  const certificates = ref([])
  const selectedCertificate = ref(null)

  async function fetchCertificates() {
    const res = await fetch('/api/certificates.json')
    certificates.value = await res.json()
  }

  function selectCertificate(id) {
    selectedCertificate.value = certificates.value.find(c => c.id === id)
  }

  function resetSelection() {
    selectedCertificate.value = null
  }

  return {
    certificates,
    selectedCertificate,
    fetchCertificates,
    selectCertificate,
    resetSelection
  }
})
