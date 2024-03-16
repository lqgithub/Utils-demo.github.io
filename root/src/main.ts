import { createApp } from 'vue'
import '@/assets/style/normal.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router,{ routeIcons } from './router';  
import "@/assets/rem"
const init = ()=>{
  const app = createApp(App)
  app.use(router)
  app.use(ElementPlus)
  routeIcons.forEach(item => {
    app.component(`icon${item.name}`, item);
  });

  
  app.mount('#app')
  
}
init()