/**
 * shanshan的路由
 */
import { Notebook as iconNotebook } from "@element-plus/icons-vue";
import { TypeRouteConfig } from "./typings";
import { defaultRoute } from "../config";
const demoRoute = defaultRoute + "/demo";
export const demoUtilsIcons = [iconNotebook];
export const demoUtilsRoutes: Array<TypeRouteConfig> = [
  {
    path: demoRoute + "/info",
    name: demoRoute + "/info",
    icon: "icon-notebook",
    meta: {
      title: "demo测试",
    },
    component: () => import("@/pages/Demo/InfoPage.vue"),
  },
];
