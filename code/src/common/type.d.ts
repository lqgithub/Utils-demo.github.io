import type { RouteRecordRaw } from 'vue-router';

type TypeRouteExtend = {
    icon?: string
    path: string
    name: string
    meta: {
        title: string  // 菜单展示
        group?: boolean
        hideNav?: boolean  // 隐藏
        disabled?: boolean  //禁用
    }
    component?: () => Promise<typeof import('*.vue')>
    children?: Array<TypeRouteConfig>
};

export type TypeRouteConfig = TypeRouteExtend & RouteRecordRaw;

export type TypeGlobalRoutes = {
    [props: string]: Array<TypeRouteConfig>
};
