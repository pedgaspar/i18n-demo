import { createApp } from 'vue'
import {createI18n} from 'vue-i18n'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import en from './assets/languages/en.json'
import pt from './assets/languages/pt.json'

const app = createApp(App)

let lang = localStorage.getItem('lang') || 'pt'
axios.defaults.headers['Accept-Language'] = lang

const i18n = createI18n({
    locale: lang,
    messages: {
        en: en,
        pt: pt
    }
})

app.use(i18n)
app.mount('#app')
