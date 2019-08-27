<template>
 <div class="wallet">
     <Head>
        <div class="title">
            <img src="./img/icon1@2x.png" alt="">
            <h3>钱包</h3>    
            <img src="./img/icon2@2x.png" alt="">
        </div>
     </Head>
     <My></My>
     <Card></Card>
     <Foot></Foot>
 </div>
</template>

<script>
import Head from "../head/head"
import My from "./my"
import Card from "./card"
import Foot from "./wallet_foot"
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
     Head,My,Card,Foot
 },
};
</script>

<style scoped lang="less">
.wallet {
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
