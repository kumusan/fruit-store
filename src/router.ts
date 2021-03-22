import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./page/Home.vue");
const A = () => import("./page/a.vue");

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: "/", component: Home },
    { path: "/a", component: A },
  ],
});

export default router;
