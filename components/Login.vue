<template>
  <div class="login">
    <img class="bg" src="../assets/login.jpg">

    <div class="content-in">
      

      <div style="">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
           <mt-field label="图片验证" placeholder="请输入图片码" v-model="captcha">
            <img src="../assets/login001.png" height="27px" width="90px">
          </mt-field>

        <mt-field label="验证码" placeholder="请输入验证码" type="password" v-model="password">
            <mt-button size="small" :disabled="disabledTemp" @click.native="handleClick" type="primary">发送验证码</mt-button>
        </mt-field>  
      </div>
      
      <mt-button @click.native="loginClick" style="margin-top:1rem;" size="large" type="primary">登录</mt-button>
      

    </div>




  </div>
</template>

<script>
import { Button } from 'mint-ui'
import { Field } from 'mint-ui'
import Router from 'vue-router'

export default {
  components:{
    Button,Field
  },
  name: 'Login',
  data () {
    return {
      phone:'',
      password:'',
      captcha:'',
      disabledTemp:true,//控制是否可以点击发送验证码
      hasSend:false//标志是否请求过验证码
    }
  },
  methods:{
    handleClick(){
      console.log('点击发送验证码');
      if(this.phone){//如果号码不为空

      }
      this.hasSend = false;//修改为已经发送
    },

    loginClick(){
      //点击登录
      this.$router.push({name:"Index"});


    }
  },
  watch:{
    captcha:function(n,o){
      if(n&&!this.hasSend){
        let str = n.toUpperCase();
        if(str=="V9AM"){
          this.disabledTemp = false;
        }else{
          this.disabledTemp = true;
        }
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login img.bg{
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}
.login .content-in{
  padding: 20px;
}
.login .mint-cell{
  background-color: rgba(255,255,240,0.3);
}
.login .mint-button--small{
  height: 27px;
  border-radius: 0px;
}

</style>
