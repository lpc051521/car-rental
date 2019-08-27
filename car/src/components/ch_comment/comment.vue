<template>
 <div class="comment">
     <Head>
        <div class="title">
            <img src="./img/icon_1@2x.png" alt="">
            <h3>评论</h3>
            <img src="./img/icon2@2x.png" alt="">
        </div>
     </Head>
     <Car></Car>
     <Button></Button>
 </div>
</template>

<script>
import Head from "../head/head"
import Car from "./car_start"
import Button from "./button"
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
     Head,Car,Button
 },
};
</script>

<style scoped lang="less">
.comment {
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
