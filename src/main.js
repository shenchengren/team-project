import Flexible from '../static/js/flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Flexible(window, window['lib'] || (window['lib'] = {}))