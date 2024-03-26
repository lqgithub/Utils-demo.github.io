<template>
  <header>
    <AppHeaderNav :header-nav="headerNav" @set-nav="setHeaderNav" :route-category="routeCategory"></AppHeaderNav>
  </header>
  <main>
    <AppLeftMenu :category="routeCategory" :global-routes="globalRoutes" @handle-router="setRouter"></AppLeftMenu>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppLeftMenu from "@/common/menu/AppNav.vue"
import AppHeaderNav from "@/common/header/AppHeaderNav.vue"
import { headerNavHandler,headerNavType } from "@/constant/global-config"
import { globalRoutes } from "@/router"

const router = useRouter()
const headerNav = headerNavHandler()
console.log('headerNavHandler', headerNav);
const routeCategory = ref<string>("leoqi_utils")
const setRouter = (route: string) => {
  router.push(route)
}
const setHeaderNav = (data: headerNavType) => {
  if (data.type === 'out-side') {
    window.location.href = data.link;
  } else {
    routeCategory.value = data.key;
    router.push(data.link);
  }
}
</script>
<style scoped lang="scss">
main {
  flex: 1;
  display: flex;
  flex-direction: row;
  .container{
    width: 100%;
    height: 100%;
  }
}
</style>
