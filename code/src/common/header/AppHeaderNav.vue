<template>
  <div class="app-top-nav">
    <div class="app-top-nav-left">
      <img :src="titleUtils" alt="">
      <div>工具箱</div>
    </div>
    <div class="app-top-nav-right">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="item in headerNav" :key="item.key" :label="item.label" :name="item.key"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,toRefs } from 'vue'
import titleUtils from "@/assets/img/title_utils.png"
import { headerNavType } from "@/constant/global-config"
export default defineComponent({
  name: 'AppTopNav',
  props:{
    headerNav:{
      type: Array<headerNavType>,
      default: () => [],
      required: true,
    },
    routeCategory:{
      type: String,
      default: () => "",
      required: true,
    }
  },
  emits: ['set-nav'],
  setup(props,{emit}) {
    const activeName = ref<string>(props.routeCategory)
    const handleClick = (e:any)=>{
      const routes = props.headerNav.find(item=>item.key === e.props.name)
      emit('set-nav', routes)
    }
    return {
      ...toRefs(props),
      activeName,
      titleUtils,
      handleClick
    }
  }
})  
</script>
<style scoped lang="scss">
.app-top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  border-bottom: solid 1px #dcdfe6;
  
  &-left {
    height: 40px;
    display: flex;
    margin-right: 100px;
    overflow: visible;

    img {
      width: 40px;
      margin: 0px 10px;
    }

    div {
      white-space: nowrap;
      font-weight: 700;
      color: rgb(173, 97, 25);
    }
  }

  &-right {
    flex: 1;
    height: 100%;
  }
}
:deep(.el-tabs__nav-wrap::after) {
  height: 0px;
}
</style>