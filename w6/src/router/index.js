import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      {
        // 動態路由
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
