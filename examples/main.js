import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './static/common.styl'

import commonNav from '../packages/index'

Vue.use(ViewUI)
Vue.use(commonNav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
