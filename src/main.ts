import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
const app = createApp(App)

app.use(router)
app.use(ToastPlugin)
app.use(LoadingPlugin)
app.use(VueSplide)

app.mount('#app')
