import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia' //commented-out, because not-using--for-now

import App from './App.vue'
// import router from './router' //commented-out, because not-using--for-now

const app = createApp(App)

// app.use(createPinia()) //commented-out, because not-using--for-now
// app.use(router) //commented-out, because not-using--for-now

app.mount('#app')
