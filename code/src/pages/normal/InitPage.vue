<template>
  <div class="contain">
    <span>这是基础信息页</span>
  </div>
  <button @click="getContent()">点击跳转</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()  
const getContent = ()=>{
  console.log('点击跳转');
  router.push("/utils/home")
}
</script>
<style scoped lang="scss">
.contain{
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
}
button{
  width: 100%;
  height: 5vh;
  line-height: 5vh;
  font-size: 20px;
  font-weight: 700;
  background-color: aquamarine;
}
</style>
