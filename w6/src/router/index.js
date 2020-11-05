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
    component: () => import('../views/frontend/Layout.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/frontend/About.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        // 動態路由
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: 'favorite',
        name: '收藏清單',
        component: () => import('../views/frontend/Favorite.vue')
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: 'order',
        name: '訂單填寫',
        component: () => import('../views/frontend/Order.vue')
      },
      {
        path: 'check/:orderId',
        name: '訂單確認',
        component: () => import('../views/frontend/Check.vue')
      },
      {
        path: 'thank-you',
        name: '感謝購買',
        component: () => import('../views/frontend/Thanks.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backend/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'todolist',
        component: () => import('../views/backend/TodoList.vue')
      },
      {
        path: 'products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: 'storages',
        component: () => import('../views/backend/Storages.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active', // 替換 class name

  // 切路由時，回到最上方
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
