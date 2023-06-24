import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SummerView from '../views/SummerView.vue'
import WinterView from '../views/WinterView.vue'
import CartView from '../views/CartView.vue'
// import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
        path: '/summer',
        name: 'summer',
        component: SummerView
    }, 
    {
        path: '/winter',
        name: 'winter',
        component: WinterView
    }, 
    {
        path: '/cart',
        name: 'cart',
        component: CartView
    }, 
    {
        path: '/log-in',
        name: 'login',
        component: LoginView
    }
  ]
})

export default router
