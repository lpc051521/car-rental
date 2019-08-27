<template>
  <div class="autonym_box">
    <div class="head">
      <div class="h_top"></div>
      <div class="h_bottom">
        <img src="./img/icon1.png" alt />
        <h1>实名认证</h1>
      </div>
    </div>
    <div class="content">
      <div class="content_top">
        <p>上传身份证照片</p>
        <div class="identity">
          <div class="person">
            <img src="./img/icon2.png" alt />
          </div>
          <div class="state">
            <img src="./img/icon2.png" alt />
          </div>
        </div>
        <span>身份证人面像</span>
        <span>身份证国徽面</span>
      </div>
      <div class="content_center">
        <p>上传驾驶证照片</p>
        <div class="identity_c">
          <div class="person_c">
            <img src="./img/icon2.png" alt />
          </div>
          <div class="state_c">
            <img src="./img/icon2.png" alt />
          </div>
        </div>
        <span>驾驶证主页</span>
        <span>驾驶证副页</span>
      </div>
      <div class="content_bottom">
        <div class="prove">
          <p>证件未在身边？手动填写信息</p>
          <ul>
            <li>
              <span>真实姓名</span>
              <input type="text" placeholder="请填写真实姓名" />
            </li>
            <li>
              <span>身份证号</span>
              <input type="text" placeholder="请输入18位身份证号" />
            </li>
            <li>
              <span>驾驶证号</span>
              <input type="text" placeholder="请输入驾驶证编号" />
            </li>
          </ul>
          <button>立即认证</button>
          <p class="privacy">《用户隐私协议》</p>
        </div>
      </div>
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
.autonym_box {
  width: 100%;
  .head {
    width: 100%;
    .h_top {
      width: 100%;
      height: 0.18rem;
      background: #ffe009;
    }
    .h_bottom {
      width: 100%;
      height: 0.44rem;
      background: #ffe009;
      padding: 0.15rem;
      box-sizing: border-box;
      img {
        margin-top: -.05rem;
      }
      h1 {
        font-size: 0.18rem;
        color: #333;
        margin-top: -.22rem;
      }
    }
  }
  .content {
    width: 100%;
    background: #f6f6f6;
    padding: .1rem .15rem;
    .content_top {
      width: 3.45rem;
      height: 1.6rem;
      background: white;
      border-radius: .05rem;
      font-size: 0;
      padding: .05rem 0;
      box-sizing: border-box;
      overflow: hidden;
      p {
        font-size: .14rem;
        color: #333;
        float: left;
        margin-left: .1rem;
      }
      .identity {
        width: 3.26rem;
        display: flex;
        margin: 0 auto;
        margin-top: .25rem;
        .state {
          margin-left: .2rem;
        }
      }
      span {
        font-size: .13rem;
        color: #999;
        float: left;
        margin-top: .09rem;
        margin-left: .49rem;
      }
      span:nth-child(4) {
        margin-left: .93rem;
      }
    }
    .content_center {
      width: 3.45rem;
      height: 1.6rem;
      background: white;
      border-radius: .05rem;
      font-size: 0;
      padding: .05rem 0;
      box-sizing: border-box;
      overflow: hidden;
      margin-top: .1rem;
      p {
        font-size: .14rem;
        color: #333;
        float: left;
        margin-left: .1rem;
      }
      .identity_c {
        width: 3.26rem;
        display: flex;
        margin: 0 auto;
        margin-top: .25rem;
        .state_c {
          margin-left: 0.2rem;
        }
      }
      span {
        font-size: .13rem;
        color: #999;
        float: left;
        margin-top: .09rem;
        margin-left: .54rem;
      }
      span:nth-child(4) {
        margin-left: 1.08rem;
      }
    }
    .content_bottom {
      width: 3.45rem;
      height: 2.45rem;
      border-radius: .05rem;
      margin-top: .1rem;
      .prove {
        width: 100%;
        background: white;
        padding: .1rem .09rem .05rem .09rem;
        font-size: 0;
        p {
          font-size: .14rem;
          color: #333;
          margin-left: -1.39rem;
        }
        ul {
          li {
            border-bottom:.01rem solid #ccc;
            padding-bottom:.15rem;
            span {
              font-size: .12rem;
              color: #333;
              margin-left: -.46rem;
            }
            input {
              width:2.25rem;
              font-size: .11rem;
              color: #999;
              text-indent:.4rem;
            }
          }
          li:nth-child(1) {
            margin-top: .17rem;
          }
          li:nth-child(2) {
            margin-top: .15rem;
          }
          li:nth-child(3) {
            margin-top: .15rem;
          }
        }
        button{
          width:2.07rem;
          height:.37rem;
          background: #ffe009;
          border-radius:.19rem;
          font-size:.18rem;
          color:#333;
          margin-top:.1rem;
        }
        .privacy{
          font-size:.11rem;
          color:#999999;
          text-decoration:underline;
          margin-top:.05rem;
          margin-left:-.02rem;
        }
      }
    }
  }
}
</style>
