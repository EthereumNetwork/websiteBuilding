// import Vue from 'vue'; // not working through webpack yet
import VueRouter from 'vue-router';

import Learn from './Learn.vue';
import DappList from './DappList.vue';
import Explorer from './Explorer.vue';

var css = require('./styles.css');



//Vue router
const routes = [
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: DappList }
]

const router = new VueRouter({
  routes: routes,
   mode: 'history'
})

// mount app to div #app
const app = new Vue({
  router: router,
  data : {
    searchField: "",
  }
}).$mount('#app')
