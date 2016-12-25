
const Learn = { template: '<div>Developer Resources coming soon...</div>' };
const Explorer = { template: '<div>Explorer coming later...</div>' };
const Dapps = { template: '<div>dapps</div>' };

var css = require('./styles.css');

// import Vue from 'vue'; // not working through webpack yet
import VueRouter from 'vue-router';


Vue.component('dapp-item', {
  props: ['dapp'],
  template: '<li><h3>{{ dapp.title }}</h3><p>{{dapp.description}}</p></li>'
});

var app7 = new Vue({
  el: '#dappListDiv',
  data: {
    searchString: "",
    dappList: [
      { title: 'Golem', description: 'Golem is great' },
      { title: 'Augur', description: 'Augur is a prediction market'  },
      { title: 'Whatever else Ethereum can do', description: 'Ethereum is the new kid on the block'  }
    ]
  },
  computed: {
    // A computed property that holds only those articles that match the searchString.
    filteredDapps: function () {
        var dappList_array = this.dappList,
            searchString = this.searchString;

        if(!searchString){
            return dappList_array;
        }

        searchString = searchString.trim().toLowerCase();

        dappList_array = dappList_array.filter(function(item){
            if(item.description.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })

        // Return an array with the filtered data.
        return dappList_array;;
    }
  }
});


const routes = [
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: Dapps }
]

const router = new VueRouter({
  routes: routes,
   mode: 'history'
})


const app = new Vue({
  router
}).$mount('#app')
