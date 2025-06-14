import { defineStore } from 'pinia';
import { Modal } from 'bootstrap';

export const useCertificateStore = defineStore('certificates', {
  state: () => ({
    certificates: [],
    selectedCertificate: null,
    modalInstance: null,
    apiProductImage: '',
    defaultImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    unsplashAccessKey: 'P7DCJqgu3OLLQBA3UYGOltgoMc2OdR5JXKsMzB0s9WA',
    formData: {
      name: '',
      email: '',
      recipient: '',
      phone: '',
      agreement: false
    }
  }),

  actions: {
    initModal(modalElement) {
      this.modalInstance = new Modal(modalElement);
    },

    showModal() {
      if (this.modalInstance) {
        this.modalInstance.show();
      }
    },

    hideModal() {
      if (this.modalInstance) {
        this.modalInstance.hide();
        this.removeBackdrop();
      }
    },

    removeBackdrop() {
      const backdrops = document.getElementsByClassName('modal-backdrop');
      while (backdrops.length > 0) {
        backdrops[0].remove();
      }
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    },

    async fetchProductImage() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=cosmetics&client_id=${this.unsplashAccessKey}`
        );
        const data = await response.json();
        this.apiProductImage = data.urls?.small || this.defaultImage;
      } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
        this.apiProductImage = this.defaultImage;
      }
    },

    createCertificate(cartStore) {
      const certificate = {
        id: `cert-${Date.now()}`,
        type: 'certificate',
        name: 'Подарочный сертификат K-Glow',
        amount: 5000,
        price: '5 000 ₽',
        description: `Сертификат на сумму 5000 ₽${this.formData.recipient ? ' для ' + this.formData.recipient : ''}`,
        recipient: this.formData.recipient || 'Не указано',
        customer: {
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone
        },
        createdAt: new Date().toLocaleDateString('ru-RU'),
        expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU'),
        image: this.apiProductImage || 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80'
      };

      this.certificates.push(certificate);
      
      if (cartStore) {
        cartStore.addToCart(certificate);
      }

      this.hideModal();
      this.resetForm();
      
      return certificate;
    },

    resetForm() {
      this.formData = {
        name: '',
        email: '',
        recipient: '',
        phone: '',
        agreement: false
      };
    },

    async fetchCertificates() {
      try {
        const res = await fetch('/api/certificates.json');
        this.certificates = await res.json();
      } catch (error) {
        console.error('Ошибка загрузки сертификатов:', error);
        this.certificates = [];
      }
    },

    selectCertificate(id) {
      this.selectedCertificate = this.certificates.find(c => c.id === id);
    },

    resetSelection() {
      this.selectedCertificate = null;
    }
  },

  getters: {
    activeCertificates: (state) => state.certificates.filter(c => new Date(c.expiresAt) > new Date()),
    expiredCertificates: (state) => state.certificates.filter(c => new Date(c.expiresAt) <= new Date())
  }
});