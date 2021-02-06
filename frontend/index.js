import Vue from 'vue'
import App from './src/App'

const vm = new Vue({
  el: '#app',
  name: 'VueApp',
  render: h => h(App)
})

vm.$mount()
