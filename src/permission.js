// 全局路由拦截
import router from './router/index';

import store from "@/store";
import {removeItem } from './utils/storage';

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    removeItem('X-Token')
    next();
    return
  }
  const token = store.state.token;
  if (token) {
    next();
  } else {
    next('/login');
  }
});