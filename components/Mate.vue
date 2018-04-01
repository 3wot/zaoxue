<template>
  <div class="mate">
    
    <mt-header title="同学圈">
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>

  <div class="content-in">
      <div class="panel">
          <div class="panel-in">
            <img src="../assets/bg.png">
            
            <img class="img-f-70 mate-img" src="../assets/person.png">
            
          </div>
      </div>


      <MatePic v-for="item in pics" :pic="item" :key="item.index">
  
      </MatePic>

  </div>



  




  </div>
</template>

<script>
import Router from 'vue-router'
// import { Header } from 'mint-ui'
// import { Tabbar, TabItem } from 'mint-ui'
// import { Cell } from 'mint-ui'
import MatePic from '@/components/MatePic'






// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  components:{
    MatePic
  },
  name: 'Mate',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pics:[
        {
          id:'001',
          name:'李金荣',
          img:'./static/111.png',
          imglist:['./static/person.png','./static/bg.png','./static/bg.png','./static/bg.png','./static/333.png'],
          content:'好风景带来好心情！',
          commentList:{
            '张静来':true,
            '高飞':true,
          }
        },
        {
          id:'002',
          name:'琪琪',
          img:'./static/person.png',
          imglist:['./static/bg.png'],
          content:'愿你有不老的心情',
          commentList:{
            '阿达':false,
            '鱼王':true,
          }
        },
        {
          id:'001',
          name:'happy',
          img:'./static/bg.png',
          imglist:[],
          content:'请你一起来happy',
          commentList:{
            '小姐姐':true,
            '大飞':true,
          }
        }
      ]
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
.mate .panel{
  width: 100%;
  padding-top: 45%;
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
.img-f-70{
  height: 4.5rem !important;
  width: 4.5rem !important;
}
.mate-img{
  position: absolute;
  bottom: -20px;
  right: 20px;
}
</style>
