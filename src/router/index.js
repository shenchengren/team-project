import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodsDetail from '../page/goodsDetail/goodsDetail'
import login from '../page/login/login'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
