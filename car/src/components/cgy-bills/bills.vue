<template>
  <div class="pay_box">
    <!-- <Head></Head> -->
    <div class="head">
      <div class="top"></div>
      <div class="bottom">
        <img src="./img/icon-1.png" @click="back">
        <h1>支付订单</h1>
      </div>
    </div>
    <div class="content">
      <div class="one">
        <p>
          支付剩余时间
          <span>20:00</span>
        </p>
        <p>
          <span>￥</span>1064
        </p>
        <div @click="back">
          订单详情
          <img src="./img/icon-2.png" alt />
        </div>
      </div>
      <div class="two">
        <div class="two_one">
          <img src="./img/icon-3.png" alt />
          <p>驾驶券支付</p>
          <img src="./img/icon-6.png" alt />
          <span>推荐</span>
        </div>
        <div class="two_two">
          <p>每单最多可减99元！</p>
          <img src="./img/icon-7.png" alt />
        </div>
        <div class="weixin">
          <img src="./img/icon-4.png" alt />
          <span>微信支付</span>
          <img src="./img/icon-8.png" alt />
        </div>
        <div class="zhifubao">
          <img src="./img/icon-5.png" alt />
          <span>支付宝支付</span>
          <img src="./img/icon-8.png" alt />
        </div>
        <button @click="done">确认支付</button>
      </div>
    </div>
  </div>
</template>
 
<script>
// import Head from "./../head/head";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    done(){
      this.$router.push('/done');
    }
  },
  components: {
    // Head
  }
};
</script>

<style scoped lang="less">
.pay_box {
  width: 100%;
  .head {
    width: 100%;
    .top {
      width: 100%;
      height: 0.2rem;
      background: #ffe009;
    }
    .bottom {
      width: 100%;
      height: 0.44rem;
      background: #ffe009;
      border: 1px solid #ffe009;
      img {
        width: 0.22rem;
        height: 0.22rem;
        margin: 0.1rem 0.15rem;
      }
      h1 {
        font-size: 0.18rem;
        color: #333;
        margin-top: -0.32rem;
        // font-weight:600;
      }
    }
  }
  .content {
    width: 100%;
    background: #f6f6f6;
    padding: 0.1rem 0.15rem;
    box-sizing: border-box;
    .one {
      width: 3.45rem;
      height: 0.89rem;
      background: white;
      border-radius: 0.1rem;
      padding: 0.1rem;
      box-sizing: border-box;
      p {
        font-size: 0.12rem;
        color: #333;
      }
      p:nth-child(1) span {
        color: #d4172a;
      }
      p:nth-child(2) {
        font-size: 0.35rem;
        font-weight: 600;
        margin-top: -0.04rem;
      }
      p:nth-child(2) span {
        font-size: 0.23rem;
      }
      div {
        font-size: 0.12rem;
        display: flex;
        margin-left: 1.35rem;
        margin-top: -3px;
        img {
          width: 0.06rem;
          height: 0.12rem;
          margin: 0.03rem 0.1rem;
        }
      }
    }
    .two {
      width: 100%;
      height: 4.86rem;
      background: white;
      margin-top: 0.1rem;
      border-radius: 0.1rem;
      padding: 0.2rem 0.1rem;
      box-sizing: border-box;
      position: relative;
      .two_one {
        font-size: 0.12rem;
        overflow: hidden;
        position: relative;
        img:nth-child(1) {
          float: left;
        }
        p {
          font-size: 0.16rem;
          font-weight: 600;
          float: left;
          margin-left: 0.08rem;
        }
        img:nth-child(3) {
          float: left;
          margin-left: 0.05rem;
          margin-top: 0.02rem;
        }
        span {
          float: left;
          position: absolute;
          color: white;
          font-weight: 600;
          left: 1.19rem;
          top: 0.03rem;
        }
      }
      .two_two {
        width: 100%;
        font-size: 0.12rem;
        margin-top: 0.05rem;
        p {
          float: left;
          margin-left: 0.29rem;
        }
        img {
          float: right;
          margin-top: -0.08rem;
        }
      }
      .weixin {
        width: 100%;
        margin-top: 0.55rem;
        font-size: 0;
        overflow: hidden;
        img:nth-child(1) {
          float: left;
        }
        span {
          float: left;
          font-size: 0.12rem;
          margin: 0.03rem 0.06rem;
        }
        img:nth-child(3) {
          float: right;
          margin-top: 0.02rem;
        }
      }
      .zhifubao {
        width: 100%;
        margin-top: 0.4rem;
        font-size: 0;
        overflow: hidden;
        img:nth-child(1) {
          float: left;
        }
        span {
          float: left;
          font-size: 0.12rem;
          margin: 0.03rem 0.06rem;
        }
        img:nth-child(3) {
          float: right;
          margin-top: 0.02rem;
        }
      }
      button {
        width: 3.25rem;
        height: 0.44rem;
        color: #333;
        font-size: 0.18rem;
        border-radius: 0.22rem;
        background: #ffe009;
        position: absolute;
        left: 0.1rem;
        bottom: 0.1rem;
      }
    }
  }
}
</style>
