<template>
  <div class="mate-pic">
    <div class="mate-left">
      <img class="img-r-70" src="../assets/person.png">
    </div>

    <div class="mate-right">
      <p class="font-1e pic-name">{{pic.name}}</p>
      <p class="font-1e pic-content">{{pic.name}}</p>
      <h1>{{pic.name}}</h1>
      <h2>{{pic.name}}</h2>
      <h3>{{pic.name}}</h3>
      <h4>{{pic.name}}</h4>
      <h5>{{pic.name}}</h5>
      <h6>{{pic.name}}</h6>



    </div>




  </div>
</template>

<script>
export default {
  
  name: 'MatePic',
  props: ['pic'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mate-pic{
  padding: 10px;
  margin: 5px 0px;
}
.mate-pic .mate-left{
  width: 3rem;
  float: left;
}
.mate-pic .mate-left img{
  width: 3rem;
  height: 3rem;
}
.mate-pic .mate-right{
  width:calc(100% - 20px - 3rem);
  float: left;
  padding-left: 10px;
}
.font-1e{
  font-size: 1em;
}
.mate-pic p{
  margin: 0px;
}
.pic-name{
  color:#dddddd;
  margin-bottom: .7rem !important;
}
.pic-content{
  color: #000000;
}

</style>
