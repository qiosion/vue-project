// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App).use(vuetify).mount('#app')
