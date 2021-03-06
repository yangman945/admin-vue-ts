import { createApp } from 'vue'
import App from './App.vue'
import router from './permission'
import {store} from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './i18n'
import './styles/normalize.css'
import svgIcon from '@/icons'
const app = createApp(App)
svgIcon(app)
app.use(router).use(store).use(ElementPlus).use(i18n).mount('#app')
