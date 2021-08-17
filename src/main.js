import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCodemirror from 'vue-codemirror'
import VueSplit from 'vue-split-panel'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'codemirror/lib/codemirror.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCodemirror)
Vue.use(VueSplit)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
