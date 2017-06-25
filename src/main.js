// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from "./App.vue";
import Vue from "vue";
import Router from 'vue-router'
import routes from "./router";
import "./config/initRem"


Vue.config.productionTip = false
Vue.use(Router)

new Vue({
  el: '#app',
  router: new Router({
    routes
  }),
  template: '<app/>',
  components: { app: App }
})
