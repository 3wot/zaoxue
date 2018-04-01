
<template>
  <div class="teach-type">
      <!-- 顶部 -->
	  <mt-header fixed :title="typeObj[$route.params.type]">
	  	  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>

	  </mt-header>

	  <div class="content-in">
	  	
	  	<div class="m-sm radius" v-for="item in teachCourseList" v-if="item.type==$route.params.type">
			<div class="panel">
				<router-link :to="{ name: 'teachdetail', params: { id: item.id }}">
					<div class="panel-in">
				  		<img :src="item.img">
				  		<div class="font-bottom">
				  			<h4 class="font-white font-1e panel-b-title">{{item.title}}</h4>
				  		</div>
				  	</div>
				</router-link>
		  	</div>	
		</div>
		
	  </div>



  </div>
</template>

<script>
import { Header } from 'mint-ui'

export default {
  components:{
    Header
  },
  name: 'TeachType',
  data () {
    return {
      typeObj:{
      	practice:"社会实践",
      	science:"社会科学",
      	culture:"文化遗产"
      },
      teachCourseList:[
      	{
      		id:'001',
      		title: "社会实践-世界青少年夏令营",
      		img:'./static/bg.png',
      		type:"practice",
      		price:180
      	},
      	{
      		id:'002',
      		title: "社会实践-青少年FE大赛",
      		img:'./static/bg.png',
      		type:"practice",
      		price:80
      	},
      	{
      		id:'003',
      		title: "社会实践-oppo手机观世界",
      		img:'./static/bg.png',
      		type:"practice",
      		price:280
      	},
      	{
      		id:'004',
      		title: "社会科学-原来如此",
      		img:'./static/bg.png',
      		type:"science",
      		price:598
      	},
      	{
      		id:'004',
      		title: "社会实践-科学家的日常",
      		img:'./static/bg.png',
      		type:"science",
      		price:480
      	},
      	{
      		id:'005',
      		title: "社会实践-汝窑文化",
      		img:'./static/bg.png',
      		type:"culture",
      		price:465
      	},
      	{
      		id:'006',
      		title: "社会实践-世界文化遗产日",
      		img:'./static/bg.png',
      		type:"culture",
      		price:480
      	},
      	{
      		id:'007',
      		title: "社会实践-诺贝奖的前世今生",
      		img:'./static/bg.png',
      		type:"science",
      		price:245
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel{
  width: 100%;
  padding-top: 50%;
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
  background-color: #fdfdfd;
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
.font-bottom{
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
}
.font-white{
	color: #ffffff;
}
.panel-b-title{
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
	padding-left: 1rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.font-1e{
	font-size: 1rem;
}
</style>
