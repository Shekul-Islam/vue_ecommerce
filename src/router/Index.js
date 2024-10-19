import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/pages/Index.vue";
import Shop from "../views/pages/shop/Shop.vue";
import { SellerPage, SellerList } from "@/views/pages/seller";
import WishList from "../views/pages/wishlist/WishList.vue";
import { Login, Register } from "@/views/auth";

const routes = [
  { path: "/", name: "index", component: Index, meta: { title: "Home" } },
  { path: "/shop", name: "shop", component: Shop, meta: { title: "Shop" } },
  {
    path: "/seller-page",
    name: "seller-page",
    component: SellerPage,
    meta: { title: "Seller-Page" },
  },
  {
    path: "/seller-list",
    name: "seller-list",
    component: SellerList,
    meta: { title: "Seller-List" },
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: WishList,
    meta: { title: "Wish-List" },
  },
  { path: "/login", name: "login", component: Login },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "Register", shekul: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const defaul_title = "404";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaul_title;
  next();
});

export default router;
