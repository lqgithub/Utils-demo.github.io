type TypeRouteExtend = {
    nav?: 'top' | 'left'
    title?: string
    icon?: string
    children?: Array<TypeRouteConfig>
};

export type TypeRouteConfig = RouteRecordRaw & TypeRouteExtend;

