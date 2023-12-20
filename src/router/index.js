import Vue from 'vue'
import VueRouter from 'vue-router'

// 防止连续点击多次路由报错
let originPush =  VueRouter.prototype.push;  //备份原push方法
VueRouter.prototype.push = function (location, resolve, reject){
  // return routerPush.call(this, location).catch(err => err)
    if (resolve && reject) {    //如果传了回调函数，直接使用
        originPush.call(this, location, resolve, reject);
    }else {                     //如果没有传回调函数，手动添加
        originPush.call(this, location, ()=>{}, ()=>{}); 
    }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('@/components/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/index.vue')
      },
      {
        path: '/product/list',
        name: 'productList',
        component: () => import('@/views/product/list.vue')
      },
      {
        path: '/product/cost',
        name: 'productCost',
        component: () => import('@/views/product/cost.vue')
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
