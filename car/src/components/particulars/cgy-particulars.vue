<template>
  <div class="car_box">
    <div class="head">
      <h1>车辆详情</h1>
      <img src="./img/icon-1.png" />
    </div>
    <div class="car_img">
      <img src="./img/图层3.png" />
    </div>
    <div class="name">
      <h4>奥迪Q5</h4>
      <p>自动·5座·三厢车·汽油</p>
      <div class="blue_green">
        <div class="blue">芝麻信用免押金</div>
        <div class="green">免车辆违章押金</div>
      </div>
    </div>
    <div class="site">
      <div class="top">
        <img src="./img/icon@2x.png" alt class="barn" />
        <h4>郑州花园路门店</h4>
        <p>></p>
        <img src="./img/icon3.png" alt class="star" />
      </div>
    </div>
    <div class="text">
      <div class="one">
        <img src="./img/icon4.png" alt />
        <span>距您1.3km</span>
      </div>
      <div class="two">
        <span>4.8分</span>
        <p>评论7条</p>
        <p class="time">
          <span>￥</span>
          <span>168</span>/小时
        </p>
      </div>
      <div class="three">
        <p>本月被租车次数: 10次</p>
        <p class="two_p">￥199/小时</p>
      </div>
    </div>
    <div class="button">预约此车</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.car_box {
  width: 100%;
  border: 0.01rem solid red;
  border-radius: 0.1rem;
  padding: 0.15rem;
  box-sizing: border-box;
  .head {
    overflow: hidden;
    h1 {
      font-size: 0.18rem;
      color: rgb(51, 51, 51);
      text-align: center;
    }
    img {
      width: 0.22rem;
      height: 0.22rem;
      float: right;
      margin-top: -0.2rem;
    }
  }
  .car_img {
    margin-top: 0.15rem;
    margin-left: 0.22rem;
  }
  .name {
    // border: 0.01rem solid green;
    margin-top: 0.1rem;
    h4 {
      font-size: 0.16rem;
      color: rgb(51, 51, 51);
      margin-left: -2.97rem;
    }
    p {
      font-size: 0.11rem;
      color: rgb(51, 51, 51);
      margin-left: -2.45rem;
      margin-top: 0.07rem;
    }
    .blue_green {
      font-size: 0.11rem;
      display: flex;
      color: rgb(255, 255, 255);
      margin-top: 0.07rem;
      line-height: 0.18rem;
      .blue {
        width: 0.97rem;
        height: 0.18rem;
        background: rgb(68, 139, 246);
        border-radius: 0.09rem;
      }
      .green {
        width: 0.97rem;
        height: 0.18rem;
        background: rgb(106, 211, 91);
        margin-left: 0.1rem;
        border-radius: 0.09rem;
      }
    }
  }
  .site {
    width: 100%;
    // border: 0.01rem solid blue;
    font-size: 0.15rem;
    margin-top: 0.1rem;
    padding-top: 0.1rem;
    border-top: 0.01rem solid #f6f6f6;
    position: relative;
    .top {
      display: flex;
      .barn {
        width: 0.23rem;
        height: 0.22rem;
      }
      h4 {
        margin-left: 0.13rem;
      }
      p {
        margin-left: 0.1rem;
      }
      .star {
        width: 0.22rem;
        height: 0.21rem;
        position: absolute;
        right: 0;
      }
    }
  }
  .text {
    width: 100%;
    // border: 0.01rem solid #ccc;
    font-size: 0.1rem;
    color: rgb(51, 51, 51);
    margin-top: 0.1rem;
    .one {
      display: flex;
      img {
        margin: -0.05rem;
      }
    }
    .two {
      margin-top: 0.05rem;
      width: 100%;
      height: 0.15rem;
      line-height: 0.15rem;
      display: flex;
      position: relative;
      span {
        font-size: 0.14rem;
        color: rgb(255, 218, 12);
      }
      p {
        margin-left: 0.1rem;
      }
      .time {
        width: 1.6rem;
        position: absolute;
        right: -0.46rem;
        span {
          color: rgb(212, 23, 42);
        }
      }
    }
    .three {
      margin-top: 0.05rem;
      display: flex;
      .two_p {
        position: absolute;
        right: 0.18rem;
      }
    }
  }
  .button {
    width: 1.75rem;
    height: 0.42rem;
    background: rgb(255, 224, 9);
    color: rgb(51, 51, 51);
    font-size: 0.15rem;
    line-height: 0.42rem;
    font-weight: 600;
    border-radius: 0.21rem;
    margin: 0.3rem auto;
  }
}
</style>
