<template>
  <div class="app-left-menu">
    <div class="app-left-menu-top">
      <el-menu :collapse="menuStatus" :key="currentRouterActiveComputed" :default-active="currentRouterActiveComputed"
        @select="selectMenuHandler">
        <template v-for="(item, index) in routerNavComputed" :key="index">
          <el-sub-menu v-if="item.children && item.children.length > 0 && !!item.meta.havChild" :index="item.name">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span class="component-page-left-nav-content">{{ item.meta?.title }}</span>
            </template>

            <template #default>
              <template v-for="(itemChildren) in item.children" :key="itemChildren">
                <el-menu-item v-show="!itemChildren.meta?.hideNav" :index="(itemChildren.name as string)">
                  <span>{{ itemChildren.meta?.title }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>

          <el-menu-item v-else v-show="!item.meta?.hideNav" :disabled="item.meta.disabled" :index="item.name">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span class="component-page-left-nav-content">{{ item.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="app-left-menu-bottom" @click="menuHandler">
      <el-menu :collapse="menuStatus">
        <el-menu-item>
          <el-icon>
            <iconDArrowRight v-if="menuStatus"></iconDArrowRight>
            <iconDArrowLeft v-else></iconDArrowLeft>
          </el-icon>
          <template #title>
            {{ menuStatus ? '展开侧边栏' : '收起侧边栏' }}
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from 'vue'
import { useRoute } from 'vue-router'
import {
  DArrowRight as iconDArrowRight,
  DArrowLeft as iconDArrowLeft,
} from '@element-plus/icons-vue';
import { TypeRouteConfig, TypeGlobalRoutes } from "../type"
import { editTreeField } from "../utils"
export default defineComponent({
  name: 'AppLeftMenu',
  components: {
    iconDArrowRight,
    iconDArrowLeft
  },
  props: {
    category: {
      type: String as PropType<keyof TypeGlobalRoutes>,
      default: () => '',
      required: true,
    },
    globalRoutes: {
      type: Object as PropType<TypeGlobalRoutes>,
      default: () => null,
      required: true,
    },
  },
  emits: ['handle-router'],
  setup(props, { emit }) {
    const route = useRoute()
    const routerNavComputed = computed<Array<TypeRouteConfig>>(() => (editTreeField(props.globalRoutes[props.category])));
    const currentRouterActiveComputed = computed<string>(() => route.name as string);
    const menuStatus = ref<boolean>(false)
    const menuHandler = () => {
      menuStatus.value = !menuStatus.value;
    };
    const selectMenuHandler = (index: string) => {
      console.log('selectMenuHandler', index);
      emit('handle-router', index)
    }
    return {
      menuStatus,
      routerNavComputed,
      currentRouterActiveComputed,
      menuHandler,
      selectMenuHandler,
    }
  }
})  
</script>
<style scoped lang="scss">
.app-left-menu {
  max-width: 210px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #dcdfe6;
  scrollbar-width: none;
  box-sizing: border-box;

  &-top {
    height: calc(100% - 50px);
  }

  &-bottom {
    height: 50px;
    border-top: 1px solid #dcdfe6;

    .component-page-left-nav__telescoping__icon {
      margin-right: 10px;
      line-height: 36px
    }

    .component-page-left-nav__telescoping__text {
      flex: 1;
      font-size: initial;
      line-height: 30px;
      color: #303133;
      vertical-align: bottom;
    }

    .component-page-left-nav__telescoping__text {
      flex: 1;
      font-size: initial;
      line-height: 30px;
      color: #303133;
      vertical-align: bottom;
    }
  }

  .component-page-left-nav-content {
    width: 141px;
    margin-left: 12px;
  }
}
</style>
