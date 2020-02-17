import Vue from 'vue'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

