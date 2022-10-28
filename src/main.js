import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementPlus from "element-plus";
import 'element-plus/theme-chalk/index.css'


const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");