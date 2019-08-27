<template>
 <div class="city">
     <Head>
        <div class="title">
            <img src="./img/icon1@2x.png" alt="">
            <h3>选择城市</h3>
            <img src="./img/btn1h@2x.png" alt="">
        </div>
     </Head>
     <Now></Now>
     <Hot></Hot>
 </div>
</template>

<script>
import Head from "../head/head"
import Now from "./now"
import Hot from "./hot"
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
     Head,Now,Hot
 },
};
</script>

<style scoped lang="less">
.city {
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
