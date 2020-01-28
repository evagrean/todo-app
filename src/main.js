import Vue from 'vue'
import App from './App.vue'
import { MdField, MdButton, MdCard, MdCheckbox, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdCheckbox);
Vue.use(MdIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
