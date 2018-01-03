import Vue from 'vue'
import App from './App.vue'

var vm1 = new Vue({
  el: '#app',
  render: h => h(App)
});
global.vm1 = vm1;
