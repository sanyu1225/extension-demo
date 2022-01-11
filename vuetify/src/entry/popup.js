import Vue from 'vue'
import App from '../view/popup.vue'
import vuetify from '../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
