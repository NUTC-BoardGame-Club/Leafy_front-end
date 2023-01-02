
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
