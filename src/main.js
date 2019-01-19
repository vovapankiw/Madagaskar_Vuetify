import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router =  new VueRouter({
  routes,
  mode:'history',
});

Vue.use(VueResource);
Vue.http.options.root ='https://madagascar-test.firebaseio.com'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
