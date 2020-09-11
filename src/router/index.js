import Vue from "vue";
import VueRouter from "vue-router";
import AllTodos from "@/views/AllTodos.vue";
import CompletedTodos from "@/views/CompletedTodos.vue";
import ActiveTodos from "@/views/ActiveTodos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: AllTodos,
  },
  {
    path: "/complete",
    name: "Home",
    component: CompletedTodos,
  },
  {
    path: "/active",
    name: "Home",
    component: ActiveTodos,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
