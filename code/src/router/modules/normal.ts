/**
 * 默认路由
 */
import Init from "@/pages/normal/InitPage.vue";
import { TypeRouteConfig } from "./typings.d";
export const normalRoutes: Array<TypeRouteConfig> = [
  {
    path: "/",
    name: "Init",
    component: Init,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      title: "404",
    },
    component: () => import("@/pages/normal/ErrorPage.vue"),
  },
];
