import Vue from 'vue'
import App from './App.vue'


import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false

import VueScrollActive from 'vue-scrollactive';
Vue.use(VueScrollActive);



import router from "./router";

import '@/assets/scss/style.scss';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

