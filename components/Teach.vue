<template>
  <div class="teach">

  <div class="panel">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/logo.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/logo.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/logo.png">
      </mt-swipe-item>
    </mt-swipe>

  </div>
  <div class="panel"></div>
  <div class="panel"></div>
    





  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';


// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
    Header,Tabbar,TabItem,Swipe,SwipeItem
  },
  name: 'Teach',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teach{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.teach>.panel{
  width: 100%;
  padding-top: 56.25%;
}

</style>
