export const headerNavHandler = () => [
  {
    label:"Leo_Qi",
    key:"leoqi_utils",
    link:"/utils/home/leoqi/info"
  },
  {
    label:"Demo",
    key:"demo_utils",
    link:"/utils/home/demo/info"
  },
]
export interface headerNavType {
  label:string
  key:string
  link:string
  type?:string
}