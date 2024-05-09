import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      { path: 'products', component: () => import('../views/ProductList.vue') },
      { path: 'orders', component: () => import('../views/OrdersView.vue') },
      { path: 'coupons', component: () => import('../views/CouponsView.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/UserBoard.vue'),
    children: [
      { path: 'cart', component: () => import('../views/UserCart.vue') },
      { path: 'product/:productId', component: () => import('../views/UserProduct.vue') },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue'),
        name: 'checkout'
      },
      { path: 'blogs', component: () => import('../views/UserBlogs.vue') },
      { path: 'blog/:blogId', component: () => import('../views/UserBlog.vue') },
      { path: 'qa', component: () => import('../views/UserQA.vue') }
    ]
  }
]

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
