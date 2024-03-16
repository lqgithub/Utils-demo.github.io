const draftWidth = 1980  // 设计图宽度
const n = 100 //缩放比
function getRem() {
  var w = document.body.clientWidth || document.documentElement.clientWidth;
  return (w / draftWidth) * n;
}
(function () {
  var html = document.querySelector("html");
  var rem = getRem();
  html.style.fontSize = rem + "px";
  window.addEventListener("resize", function () {
    var rem = getRem();
    html.style.fontSize = rem + "px";
  });
})();
export const rem = getRem()