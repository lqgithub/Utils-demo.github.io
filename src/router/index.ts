import { createRouter, createWebHistory } from 'vue-router'; 
import { normalRoutes,normaIcons } from "./modules/normal"
  
const routesContext = import.meta.glob('./modules/*.ts');
console.log(routesContext);
const routes = [
  ...normalRoutes,
  // 更多路由...  
];  
  
const router = createRouter({  
  history: createWebHistory(process.env.BASE_URL),  
  routes // (缩写) 相当于 routes: routes  
});  
export const routeIcons = [
  ...normaIcons,
]
export default router;