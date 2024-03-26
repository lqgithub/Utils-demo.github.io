import { createRouter, createWebHistory } from "vue-router";
import { normalRoutes } from "./modules/normal";
import { leoqiUtilsRoutes, leoqiUtilsIcons } from "./modules/leoqi_utils";
import { demoUtilsRoutes, demoUtilsIcons } from "./modules/demo_utils";
import { defaultRoute } from "./config";
const routesContext = import.meta.glob("./modules/*.ts");
console.log(routesContext);
const routes = [
  {
    path: defaultRoute,
    name: "Home",
    meta: {
      title: "Home",
    },
    component: () => import("@/pages/normal/HomePage.vue"),
    children: [...leoqiUtilsRoutes,...demoUtilsRoutes],
  },
  ...normalRoutes,
  // 更多路由...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // (缩写) 相当于 routes: routes
});
export const globalRoutes = {
  leoqi_utils: leoqiUtilsRoutes,
  demo_utils:demoUtilsRoutes,
};
export const routeIcons = [...leoqiUtilsIcons,...demoUtilsIcons];
export default router;
