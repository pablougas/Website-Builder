import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/app-bar",
    name: "appBar",
    component: () =>
      import(
        /* webpackChunkName: "app-bar" */ "../views/shared/navigation/AppBarStory.vue"
      ),
  },
  {
    path: "/app-header",
    name: "appHeader",
    component: () =>
      import(
        /* webpackChunkName: "app-header" */ "../views/shared/headers/AppHeaderStory.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
