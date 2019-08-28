<template>
  <div class="shop">
    <Head>
         <div class="title">
          <img src="./img/btn1@2x.png" alt="" @click="back">
          <h3>门店信息</h3>    
          <img src="./img/btn2@2x.png" alt="">
        </div>
    </Head>
    <Title></Title>
    <User></User>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Head from "../../components/head/head";
import Title from "./shoptitle";
import User from "./use_";
import Bottom from "./bottom";

export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.go(-1);
    }
  },
  components: {
    Title,
    User,
    Bottom,
    Head
  }
};
</script>

<style scoped lang="less">
.shop {
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
