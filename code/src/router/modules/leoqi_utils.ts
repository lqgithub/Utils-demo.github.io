/**
 * shanshan的路由
 */
import { Setting as iconSetting } from "@element-plus/icons-vue";
import { TypeRouteConfig } from "./typings";
import { defaultRoute } from "../config";
const leoqiRoute = defaultRoute + "/leoqi";
export const leoqiUtilsIcons = [iconSetting];
export const leoqiUtilsRoutes: Array<TypeRouteConfig> = [
  {
    path: leoqiRoute + "/info",
    name: leoqiRoute + "/info",
    icon: "icon-setting",
    meta: {
      title: "个人信息",
    },
    component: () => import("@/pages/Leo_Qi/InfoPage.vue"),
  },
];
