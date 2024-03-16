<template>
  <div class="error">
    <span>404~~</span>
    <span>没有找到页面</span>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.error{
  width: 5rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); 
  display: flex; 
  flex-direction: column;
  span{
    text-align: center;
    font-size: 0.4rem;
    height: 1rem;
    font-weight: 700;
  }
}
</style>
