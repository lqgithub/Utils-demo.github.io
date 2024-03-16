type TypeRouteExtend = {
    nav?: 'top' | 'left'
    title?: string
    icon?: string
    children?: Array<TypeRouteConfig> | any
};

export type TypeRouteConfig = RouteRecordRaw & TypeRouteExtend;
