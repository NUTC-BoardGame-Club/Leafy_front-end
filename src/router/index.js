
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Setting from '../views/Setting.vue'
import StyleEditor from '../views/StyleEditor.vue'
const routes = [
  {
    path:"/",
    name:Login,
    component:Login
  },
  {
    path: '/index/:id',
    name: 'Main',
    params:true,
    component: Main
  },
  {
    path: '/setting',
    name: 'Setting',
    component:Setting
  },
  {
    path: '/styleEditor',
    name: 'StyleEditor',
    component: StyleEditor
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
