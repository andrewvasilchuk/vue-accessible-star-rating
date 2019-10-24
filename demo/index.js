import Vue from 'vue'
import App from './App.vue'
import VueAccessibleStarRating from '../src'

Vue.config.productionTip = false

Vue.use(VueAccessibleStarRating)

new Vue({
  el: '#app',
  render: h => h(App),
})
