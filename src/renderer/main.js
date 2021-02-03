import Vue from 'vue';
import Element from 'element-ui';
import '/static/styles/element-variables.scss';
//import 'normalize.css/normalize.css'
import '/static/styles/index.scss';
import '/static/icons' // icon
import App from './App';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import $ from 'jquery';


Vue.config.productionTip = false;

Vue.use(Element, {
    locale,
});
/* eslint-disable no-new */
new Vue({
    components: {App},
    template: '<App/>'
}).$mount('#app');
