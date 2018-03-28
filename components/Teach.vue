<template>
  <div class="teach">

  <!-- 顶部 -->
  <mt-header fixed title="固定在顶部">
  	

  </mt-header>

  <div class="content-in">

  	<div class="panel">
  		<div class="panel-in">
  			<mt-swipe :auto="0">
  		  <mt-swipe-item>
  		  	<img src="../assets/111.png">
  		  </mt-swipe-item>
  		  <mt-swipe-item>
  		  	<img src="../assets/222.png">
  		  </mt-swipe-item>
  		  <mt-swipe-item>
  		  	<img src="../assets/333.png">
  		  </mt-swipe-item>
  		</mt-swipe>
  		</div>
      
  	</div>


		<div class="m-sm radius">
			<div class="panel">
			  	<div class="panel-in">
			  		<img src="../assets/333.png">
			  		<div class="font-middle">
			  			<h3 class="font-white text-center">我的加血</h3>
			  		</div>
			  	</div>
		  </div>	
		</div>
		
    <div class="m-sm radius">
      <div class="panel">
          <div class="panel-in">
            <img src="../assets/333.png">
            <div class="font-middle">
              <h3 class="font-white text-center">我的加血</h3>
            </div>
          </div>
      </div>  
    </div>

    <div class="m-sm radius">
      <div class="panel">
          <div class="panel-in">
            <img src="../assets/333.png">
            <div class="font-middle">
              <h3 class="font-white text-center">我的加血</h3>
            </div>
          </div>
      </div>  
    </div>

	 
   </div>
  
    





  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Cell } from 'mint-ui';


// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
    Header,Tabbar,TabItem,Swipe,SwipeItem,Cell
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
.teach .panel{
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;	
}
.content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
}
.panel img{
  width: 100%;
  height: 100%;
}
.m-sm{
  margin: 10px;
}
.radius{
	border-radius: 7px;
	overflow: hidden;
}
.font-middle{
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.font-white{
	color: #ffffff;
}


</style>
