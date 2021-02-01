import Vue from 'vue'
import axios from 'axios'

import Element from 'element-ui'
import './styles/element-variables.scss'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import './icons' // icon
import App from './App'
import store from './store'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import $ from 'jquery'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Element, {
  locale,
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>'
}).$mount('#app')
