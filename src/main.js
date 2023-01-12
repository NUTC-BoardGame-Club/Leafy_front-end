import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementPlus from "element-plus";
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store"

// vuex

console.log(store);


const app = createApp(App).use(store);

app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");