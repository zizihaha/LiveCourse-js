import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/Products.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue")
      }
    ]
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/dashboard/Products.vue")
      },
      {
        path: "coupons",
        component: () => import("../views/dashboard/Coupons.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
