<template>
  <div class="top_up">
    <div class="head">
      <div class="top"></div>
      <div class="buttom">
        <img src="./img/icon1.png" alt />
        <h1>充值</h1>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <ul>
          <li>
            <p>充1000驾驶券</p>
            <p>
              送
              <span>100</span>积分
            </p>
          </li>
          <li>
            <p>充2000驾驶券</p>
            <p>
              送
              <span>300</span>积分
            </p>
          </li>
          <li>
            <p>充5000驾驶券</p>
            <p>
              送
              <span>1000</span>积分
            </p>
          </li>
          <li>
            <p>充8000驾驶券</p>
            <p>
              送
              <span>2000</span>积分
            </p>
          </li>
        </ul>
        <div class="plan">
          <p>累计充值礼包:</p>
          <div class="plan_buttom">
            <div class="big">
              <span>0</span>
              <div class="gray"></div>
              <div class="yellow"></div>
              <span>1000</span>
            </div>
          </div>
          <img src="./img/icon2.png" alt class="gift" />
          <div class="hint">
            <span>200</span>
          </div>
          <div class="custom">
            <p>
              自定义金额:
              <span>请输入充值金额</span>
            </p>
          </div>
        </div>
      </div>
      <div class="center">
        <p>请选择充值方式</p>
        <div class="zfb">
          <img src="./img/jpg1.png" alt />
          <span>支付宝</span>
          <img src="./img/btn1h.png" alt />
        </div>
        <div class="weixin">
          <img src="./img/jpg2.png" alt />
          <span>微信</span>
          <img src="./img/btn1n.png" alt />
        </div>
        <div class="yinlian">
          <img src="./img/jpg3.png" alt />
          <span>银联</span>
          <img src="./img/btn1n.png" alt />
        </div>
        <p class="scheme">《平价分时租车协议》</p>
        <button>确认充值</button>
      </div>
      <footer>
        <p>1· 由于苹果政策限制，安卓端和网页充值的驾驶券无法在ios设备上使用</p>
        <p>2· 驾驶券到账偶有延迟，敬请谅解; 如有问题，请在我的-问题反馈中反馈</p>
      </footer>
    </div>
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
.top_up {
  .head {
    width: 100%;
    .top {
      width: 100%;
      height: 0.2rem;
      background: #ffe009;
    }
    .buttom {
      width: 100%;
      height: 0.4rem;
      background: #ffe009;
      border: 0.01rem solid #ffe009;
      font-size: 0;
      img {
        margin: 0.07rem;
      }
      h1 {
        font-size: 0.18rem;
        color: rgb(51, 51, 51);
        margin-top: -0.31rem;
      }
    }
  }
  .content {
    width: 100%;
    background: #f6f6f6;
    padding: 0.1rem 0.15rem;
    box-sizing: border-box;
    .top {
      width: 3.45rem;
      height: 2.39rem;
      border-radius: 0.05rem;
      background: white;
      padding: 0.15rem;
      box-sizing: border-box;
      ul {
        overflow: hidden;
        li {
          width: 1.5rem;
          height: 0.55rem;
          background: #f1f1f1;
          font-size: 0.12rem;
          color: #666666;
          float: left;
          border-radius: 0.05rem;
          p:nth-child(1) {
            margin-top: 11px;
          }
          p:nth-child(2) {
            margin-top: 2px;
          }
          span {
            font-size: 0.15rem;
          }
        }
        li:nth-child(2) {
          margin-left: 0.15rem;
        }
        li:nth-child(3) {
          margin-top: 0.16rem;
        }
        li:nth-child(4) {
          margin-top: 0.16rem;
          margin-left: 0.15rem;
        }
        li:hover {
          color: #333333;
          background: #ffe009;
        }
      }
      .plan {
        width: 3.2rem;
        height: 0.55rem;
        margin-top: 0.15rem;
        // overflow: hidden;
        position: relative;
        border: 1px solid white;
        p {
          font-size: 0.12rem;
          color: #333;
          float: left;
        }
        .plan_buttom {
          overflow: hidden;
          margin-top: 0.2rem;
          .big {
            font-size: 0;
            position: relative;
            span {
              font-size: 0.11rem;
              color: #999;
              float: left;
            }
            span:nth-child(1) {
              margin-left: 0.1rem;
            }
            span:nth-child(4) {
              margin-left: 2.46rem;
            }
            .gray {
              width: 2.34rem;
              height: 0.1rem;
              background: #e9e9e9;
              border-radius: 0.05rem;
              position: absolute;
              top: 0.03rem;
              left: 0.2rem;
            }
            .yellow {
              width: 0.4rem;
              height: 0.1rem;
              background: #ffe009;
              border-radius: 0.05rem;
              position: absolute;
              top: 0.03rem;
              left: 0.2rem;
            }
          }
        }
        .gift {
          position: absolute;
          top: 0.14rem;
          right: 0;
        }
        .hint {
          width: 0.3rem;
          height: 0.2rem;
          font-size: 0;
          background: url("./img/sign.png") no-repeat 0.04rem 0;
          margin: -0.01rem 0.45rem;
          text-indent: -0.02rem;
          span {
            color: white;
            font-size: 0.09rem;
            line-height: 0.2rem;
          }
        }
        .custom {
          margin-top: 0.05rem;
          span {
            font-size: 0.11rem;
            color: #999999;
            margin-left: 0.05rem;
          }
        }
      }
    }
    .center {
      width: 3.45rem;
      height: 3rem;
      background: white;
      border-radius: 0.05rem;
      margin-top: 0.1rem;
      font-size: 0;
      padding: 0.15rem 0.11rem;
      box-sizing: border-box;
      overflow: hidden;
      p {
        font-size: 0.14rem;
        color: #333;
        margin-left: -2.23rem;
      }
      span {
        font-size: 0.12rem;
        color: #333;
        margin-top: 0.1rem;
        margin-left: 0.15rem;
      }
      div {
        display: flex;
      }
      .zfb {
        margin-top: 0.13rem;
        img:nth-child(3) {
          width: 0.22rem;
          height: 0.22rem;
          margin-top: 0.08rem;
          margin-left: 2.08rem;
        }
      }
      .weixin {
        margin-top: 0.13rem;
        img:nth-child(3) {
          width: 0.22rem;
          height: 0.22rem;
          margin-top: 0.08rem;
          margin-left: 2.2rem;
        }
      }
      .yinlian {
        margin-top: 0.13rem;
        img:nth-child(3) {
          width: 0.22rem;
          height: 0.22rem;
          margin-top: 0.08rem;
          margin-left: 2.2rem;
        }
      }
      .scheme {
        font-size: 0.1rem;
        color: #999;
        text-decoration: underline;
        margin-top: 0.16rem;
        float: right;
      }
      button {
        width: 2.07rem;
        height: 0.37rem;
        background: #ffe009;
        border-radius: 0.19rem;
        font-size: 0.18rem;
        color: #333;
        margin-top: 0.63rem;
      }
    }
    footer {
      margin-top: .11rem;
      p {
        font-size: 0.1rem;
        color: #999;
      }
      p:nth-child(1){
        margin-left:-.26rem;
      }
      p:nth-child(2){
        margin-left:-.18rem;
        margin-top:.01rem;
      }
    }
  }
}
</style>
