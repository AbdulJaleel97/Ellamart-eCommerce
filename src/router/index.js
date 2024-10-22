import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    name: "products-category",
    path: "/products/:category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    name: "product-details",
    path: "/product/:id/:description",
    component: () => import("../views/ProductDetails.vue"),
  },
  {
    name: "cart",
    path: "/shopping-cart",
    component: () => import("../views/CartView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
