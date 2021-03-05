import Vue from 'vue'
import App from './App.vue'

// Plagins Vue-validate https://vuelidate.js.org/#sub-installation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
// если много плагинов то пишем через запятую
// Vue.use(Vuelidate,Vuelidate2,Vuelidate3 и тд)


// SCSS подключил
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
