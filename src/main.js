import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import StarRating from 'vue-star-rating';
import VueGlide from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)
Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag)
Vue.component('star-rating', StarRating)

new Vue({
  render: h => h(App),

}).$mount('#app')
