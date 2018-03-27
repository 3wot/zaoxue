<template>
  <div class="mate">
    <button>aaaaa</button>
    <h1 id="circle" @click="fnA">circle</h1>




  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
    Header,Tabbar,TabItem
  },
  name: 'Mate',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mate{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}

</style>
