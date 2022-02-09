import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


Vue.use(new VueSocketIO({
  debug: false,
  connection: 'ws://localhost:8000',
  vuex: {
      store,
      actionPrefix: 'socket_',
  }
}));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
