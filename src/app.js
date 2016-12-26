
import Learn from './Learn.vue';
import DappList from './DappList.vue';
import Explorer from './Explorer.vue';

var css = require('./styles.css');

// import Vue from 'vue'; // not working through webpack yet
import VueRouter from 'vue-router';

const routes = [
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: DappList }
]

const router = new VueRouter({
  routes: routes,
   mode: 'history'
})


const app = new Vue({
  router
}).$mount('#app')
