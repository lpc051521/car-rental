<template>
 <div class="done">
    <Head>
        <div class="title">
            <img src="./img/icon1@2x.png" alt="" @click="back">
            <h3>完成订单</h3>    
            <img src="./img/icon2@2x.png" alt="">
        </div>
     </Head>
     <Cd></Cd>
     <Do></Do>
     <Low></Low>
 </div>
</template>

<script>
import Head from "../head/head"
import Cd from './car_done';
import Do from './do'
import Low from './low'
export default {
 props: {

 },
 data() {
 return {

 };
 },
 methods: {
back(){
  this.$router.go(-1);
}
 },
 components: {
     Head,Cd,Do,Low
 },
};
</script>

<style scoped lang="less">
.done {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  .head {
    font-size: 0;
    height: .44rem;
    background-color: rgb(255, 224, 9);
    .title {
      width: 100%;
      height: .44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .15rem;
      h3{
        font-size: 0.18rem;
      }
      img {
        width: .22rem;
        height: .22rem;
      }
    }
  }
}
</style>
