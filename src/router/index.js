import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
// 捕获双击vue-router返回的promise错误
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location,onResolve,onReject){
  if( onResolve || onReject ) return originalPush.call(this,location,onResolve,onReject);
  return originalPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
