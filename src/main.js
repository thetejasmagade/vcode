import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCodemirror from 'vue-codemirror'
import VueSplit from 'vue-split-panel'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase/app'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'codemirror/lib/codemirror.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCodemirror)
Vue.use(VueSplit)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC_lbaDkvMi7dAExiIY3L8SiFT0s3-hqlQ",
  authDomain: "v-code-auth.firebaseapp.com",
  projectId: "v-code-auth",
  storageBucket: "v-code-auth.appspot.com",
  messagingSenderId: "839533859075",
  appId: "1:839533859075:web:0d748671d9f90c10fc1936"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
