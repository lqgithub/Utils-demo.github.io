/**
 * 默认路由
 */
import {
  Setting as iconSetting
} from '@element-plus/icons-vue';
import Home from "./../../pages/normal/Home.vue"
import { TypeRouteConfig } from './typings.d';
export const normaIcons = [iconSetting];

export const normalRoutes: Array<TypeRouteConfig> = [
  {  
    path: '/',  
    name: 'Home',  
    component: Home  
  },
  {  
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
        title: 'Error',
    },
    component: import("./../../pages/normal/error.vue")  
  },
]