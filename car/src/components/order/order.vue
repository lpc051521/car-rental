<template>
  <div class="order">
    <Head>
      <img src="./img/icon1@2x.png" alt="" @click="back">
      <p>我的订单</p>
    </Head>
    <ul>
      <li>
        <router-link to="/allorder">全部订单</router-link>
      </li>
      <li>
        <router-link to="/not">未完成</router-link>
      </li>
      <li>
        <router-link to="/evaluate">待评价</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import Head from './../head/head'

  export default {
    data() {
      return {
        // show:true
      }
    },
    computed: {},
    components: {
      Head
    },
    created() {
    },
    methods: {
      back() {
        this.$router.push('/index');
        // this.$emit('chang_show',this.show)
      }
    }
  }
</script>

<style scoped lang="less">
  .head {
    font-size: .18rem;
    line-height: .44rem;
    height: .44rem;
    background-color: rgb(255, 224, 9);
    display: flex;
    align-items: center;
    img {
      width: .22rem;
      height: .22rem;
      margin-left: .15rem;
    }
    p {
      margin-left: 1.2rem;
    }
  }
  .order{
    font-size: 0;
    ul{
      display: flex;
      background-color: #fff;
      li{
        flex: 1;
        text-align: center;
        height: .37rem;
        line-height: .37rem;

        a{
          display: block;
          color: #333333;
          font-size: .15rem;
        }
        a.router-link-active{
          background: url("./img/icon-active@2x.png")no-repeat .4rem .33rem;
          background-size: 37%;
        }
      }
    }
    &>.alloredr{

    }
  }

</style>
