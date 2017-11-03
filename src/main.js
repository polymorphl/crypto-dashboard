import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App'
import DoughnutChart from './components/DoughnutChart'
import router from './router'
import {store} from './store.js'

Vue.use(VueAxios, axios)
Vue.component('doughnut-chart', DoughnutChart)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App },
  data: {
    sharedState: store.state
  },
  created () {
    store.getCryptoCurrencies()
    store.getTotalMarketCapEUR()
    store.resolveWallets()
  }
})
