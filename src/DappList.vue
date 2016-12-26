<template>
  <div>Dapps are coming soon...</div>
</template>

<!-- <div id="routerDiv">
  <input type="text" v-model="searchString" placeholder="Dapp list testing" />
  <ul>
    <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp"></dapp-item>
  </ul>
</div>

Vue.component('dapp-item', {
  props: ['dapp'],
  template: '<li><h3>{{ dapp.title }}</h3><p>{{dapp.description}}</p></li>'
}); -->


<script>
export default {
  name: 'app',
  data () {
    return {
      searchString: "",
      dappList: [
        { title: 'Golem', description: 'Golem is great' },
        { title: 'Augur', description: 'Augur is a prediction market'  },
        { title: 'Whatever else Ethereum can do', description: 'Ethereum is the new kid on the block'  }
      ]
    }
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
}
</script>
