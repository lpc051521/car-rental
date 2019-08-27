<template>
 <div class="details">
     <Head>
         <div class="title">
          <img src="./img/icon-1@2x.png" alt="">
          <h3>订单详情</h3>    
          <img src="./img/icon-2@2x.png" alt="">
        </div>
     </Head>
     <Carde></Carde>
     <Also></Also>
     <Money></Money>
     <Favorable></Favorable>
     <Butn></Butn>
 </div>
</template>

<script>
import Head from "../head/head"
import Carde from "./car_details"
import Also from "./also"
import Money from "./money"
import Favorable from "./favorable"
import Butn from "./butn"
export default {
 props: {

 },
 data() {
 return {

 };
 },
 methods: {

 },
 components: {
     Head,Carde,Also,Money,Favorable,Butn
 },
};
</script>

<style scoped lang="less">
.details {
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
