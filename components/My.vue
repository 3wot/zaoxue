<template>
  <div class="my">



    <h1>my</h1>





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
  name: 'My',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}

</style>
