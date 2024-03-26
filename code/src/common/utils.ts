import { TypeRouteConfig } from "./type"

export const editTreeField = (tree: Array<TypeRouteConfig>): Array<TypeRouteConfig> => {
  const treeRouteStack = (root: TypeRouteConfig): TypeRouteConfig => {
      if (Array.isArray(root.children)) {
          const havChild = root.children?.reduce((result: boolean, node: TypeRouteConfig) => {
              if (!node.meta.hideNav) {
                  return true;
              }
              return result;
          }, false);
          const childrenRoot = root.children?.reduce((result: Array<TypeRouteConfig>, node: TypeRouteConfig) => ([
              ...result,
              node,
          ]), []);
          return {
              ...root,
              meta: {
                  ...root.meta,
                  havChild,
              },
              children: childrenRoot,
          };
      }
      return root;
  };
  const data = tree.map(item => treeRouteStack(item));
  return data;
};