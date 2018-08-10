import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodsDetail from '../page/goodsDetail/goodsDetail'
import login from '../page/login/login'
import register from '../page/register/register'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/goods',
      name:'goodsDetail',
      component:goodsDetail
    }
  ]
})
