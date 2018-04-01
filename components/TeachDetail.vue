<template>

  <div class="teach-detail">
  
  <div v-for="item in teachCourseList" :key="item.index" v-if="$route.params.id==item.id">
    
    <div class="panel">

          <div class="panel-in">
              <img :src="item.img">
              <div class="font-bottom">

                <h4 class="font-white font-1e panel-b-title">{{item.title}}</h4>
              </div>
          </div>

        </div>

        <div class="detail-content">
          <h4>
            <span>适合群体：</span>
            <span>{{item.for}}</span>
          </h4>
          <div class="detail-introduce font-8e">
          {{item.introduce}}
          
          </div>

          <div class="m-t-1e"></div>

        </div>

        <div class="cell-8e">
          <mt-cell :title="item.provider">
            
          </mt-cell>
        
          <!-- <mt-cell title="地址：北京市" to="/MapDetail/北京市海淀区清华大学" is-link value="详情"> -->
            <mt-cell :title="item.address" :to="{ name: 'mapdetail', params: { address: item.address }}" is-link value="详情">
            
          </mt-cell>

        </div>

        <mt-navbar v-model="selected">
          <mt-tab-item id="1">评论</mt-tab-item>
          <mt-tab-item id="2">温馨提示</mt-tab-item>
        </mt-navbar>

        
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" style="padding:1rem;">
            <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->

          </mt-tab-container-item>
          <mt-tab-container-item id="2" style="padding:1rem;">
            asdasdasdasdasdasdasdasdasd


          </mt-tab-container-item>
        </mt-tab-container>
        



  </div>  
    
  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'

export default {
  comments:{
    Cell,Navbar, TabItem
  },
  name: 'TeachDetail',
  data () {
    return {
      teachCourseList:[
      	{
          id:'001',
      		title: "社会实践-世界青少年夏令营",
      		img:'./static/bg.png',
      		type:"practice",
      		price:180,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区清华大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]

      	},
      	{
          id:'002',
      		title: "社会实践-青少年FE大赛",
      		img:'./static/bg.png',
      		type:"practice",
      		price:80,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：青岛市崂山区中国海洋大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'003',
      		title: "社会实践-oppo手机观世界",
      		img:'./static/bg.png',
      		type:"practice",
      		price:280,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区清华大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'004',
      		title: "社会科学-原来如此",
      		img:'./static/bg.png',
      		type:"science",
      		price:598,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区清华大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'005',
      		title: "社会实践-科学家的日常",
      		img:'./static/bg.png',
      		type:"science",
      		price:480,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区清华大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'006',
      		title: "社会实践-汝窑文化",
      		img:'./static/bg.png',
      		type:"culture",
      		price:465,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"地址：北京市海淀区清华大学",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	},
      	{
          id:'007',
      		title: "社会实践-诺贝奖的前世今生",
      		img:'./static/bg.png',
      		type:"science",
      		price:245,
          for:'18以内',
          introduce:'5元能做什么？也许是一包零食，或许是一瓶饮料，甚至就是一包烟的钱，今天我们将让你您的孩子拿着5元钱，完成一系列的城市生存挑战。',
          provider:"服务商：早学网旗舰店",
          address:"北京市",
          tip:"1.5元钱生存资金\n2.一个便携式背包\n3.一个收纳袋子\n4.一瓶矿泉水",
          comments:[]
      	}
      ],
      selected:'1',
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
.font-8e{
  font-size: .8rem;
}
.m-t-1e{
  margin-top: 1rem;
}

.detail-introduce{
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4rem;
}
.detail-content{
  padding:0px 1rem 1rem;
}

.line-b{
  border-bottom: 1px solid #dddddd;
}

.mint-cell-allow-right::after{
  right: 5px !important;
}
.cell-8e .mint-cell-wrapper{
  font-size: .8rem;
}

</style>
