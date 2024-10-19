import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/pages/Index.vue";
import Shop from "../views/pages/shop/Shop.vue";
import Seller from "../views/pages/seller/Seller.vue";
import WishList from "../views/pages/wishlist/WishList.vue";
import Login from "../views/pages/Login.vue";
import Register from "../views/pages/Register.vue";

const routes = [
  { path: "/", name: "index", component: Index },
  { path: "/shop", name: "shop", component: Shop },
  { path: "/seller", name: "seller", component: Seller },
  { path: "/wishlist", name: "wishlist", component: WishList },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register, meta: { title: "Nittonoton | Profile", albab: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
