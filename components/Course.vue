<template>
  <div class="course">

    <!-- 顶部 -->
    <mt-header fixed title="课件">

    </mt-header>


    <div class="content-in">
        
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">产品策划</mt-tab-item>
          <mt-tab-item id="2">技术MOOC</mt-tab-item>
        </mt-navbar>

        
        <mt-tab-container v-model="selected" style="border-top:1px solid #dddddd;margin-top:3px;">
          
          <mt-tab-container-item id="1">
            
            <div class="panel">
              <div class="panel-in">
                  <div class="panel-left">
                    <div class="left-img">
                      <img src="../assets/bg.png"/>
                    </div>
                  </div>

                  <div class="panel-right">
                     <p class="right-title">
                       技术MOOC技术MOOC技术MOOC技术MOOC技术MOOC技术MOOC技术MOOC技术MOOC
                     </p>
                     <p style="margin:0px;">
                       <span class="right-span">资料</span>
                       <span class="right-span">回放</span>
                     </p>

                     <p class="price">
                       <span class="price-span">¥ 4600</span>
                       <span class="free-span">免费</span>
                     </p>

                  </div>
              </div>
            </div> 

          </mt-tab-container-item>


          <mt-tab-container-item id="2">
            


          </mt-tab-container-item>


        </mt-tab-container>




    </div>



    





  </div>
</template>

<script>
import { Header } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'



export default {
  components:{
    Header,Navbar, TabItem,TabContainer, TabContainerItem
  },
  name: 'Course',
  data () {
    return {
      selected:'1',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.course{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 55px;
}
.course .content-in{
  position: absolute;
  left: 0px;
  right: 0px;
  top: 40px;
  bottom: 0px;
  overflow: auto;
  background-color: #fdfdfd;
}

.panel{
  width: 100%;
  padding-top: 30%;
  position: relative;
  border-bottom: 1px solid #dddddd;
  /*background-color: #dddddd*/
}
.panel .panel-in{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}
.panel .panel-in .panel-left{
  width: 50%;
  height: 100%;
  position: relative;
  float: left;
}
.panel .panel-in .panel-right{
  width: 50%;
  height: 100%;
  position: relative;
  float: right;
}
.panel .panel-in .panel-left .left-img{
  position: absolute;
  left: 1rem;
  top: 1rem;
  right: 1rem;
  bottom: 1rem;
}
.panel .panel-in .panel-left .left-img img{
  width: 100%;
  height: 100%;
}

.panel .panel-in .panel-right .right-title{
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4rem;
  font-size: .8rem;
  margin-bottom: 5px;
}
.panel .panel-in .panel-right .right-span{
  border:1px solid lightblue;
  color: lightblue;
  font-size: .7rem;
  padding: 2px;
}
.panel .panel-in .panel-right .price{
  margin-top: .7rem;
}
.panel-right .price-span{
  color: red;
}
.panel-right .free-span{
  color: green;
}
</style>
