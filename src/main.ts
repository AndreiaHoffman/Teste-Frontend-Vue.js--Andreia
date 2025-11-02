import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import DynamicDialog from 'primevue/dynamicdialog'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  theme: {
    options: {
      darkModeSelector: '.my-app-dark'
    }
  },
  unstyled: true,
})
app.component('DynamicDialog', DynamicDialog)

app.mount('#app')

