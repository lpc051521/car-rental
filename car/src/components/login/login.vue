<template>
  <div class="login">
    <div class="content">
      <div class="back">
        <img src="./img/icon_1@2x.png" alt="" @click="back">
      </div>
      <div class="login-box">
        <p><span>登录</span>/<span @click="register">注册</span></p>
        <h2><span>+86</span><input type="text" placeholder="请输入手机号"></h2>
        <h2 class="psw"><span><img src="./img/icon_2@2x.png" alt=""></span><input type="text" placeholder="请输入密码"></h2>
        <h3>忘记密码</h3>
        <button>登录</button>
      </div>
      <div class="login-more">
        <p><span>—————</span><a>其他方式登录</a><span>—————</span></p>
        <div class="img">
          <img src="./img/icon-3@2x.png" alt="">
          <img src="./img/icon-4@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {msg: 'hello'}
    },
    computed: {},
    components: {},
    created() {
    },
    methods: {
      register(){
        this.$router.push('/register');
      },
      back(){
        this.$router.push('/index');
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    .content {
      width: 100%;
      height: 100%;
      background: url("./img/login_bg@2x.png") no-repeat;
      background-size: 100%;
      overflow: hidden;
      font-size: .12rem;
      .back {
        height: .44rem;
        margin-top: .12rem;
        margin-left: .15rem;
        padding-top: .12rem;
        img {
          width: .2rem;
          height: .2rem;
        }
      }
      .login-box {
        margin-top: 1rem;
        text-align: left;
        p {
          font-size: .16rem;
          margin-left: .7rem;
          span:first-child {
            font-size: .25rem;
          }
        }
        h2 {
          color: #999999;
          font-size: .16rem;
          width: 2.46rem;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: .13rem;
          margin: 0 auto;
          margin-top: .61rem;
          span:first-child {
            display: inline-block;
            width: .49rem;
            text-align: center;
            border-right: 1px solid #d6d6d6;
          }
          input {
            text-indent: .13rem;
            font-size: .16rem;
          }
        }
        .psw {
          margin-top: .38rem;
          span:first-child {
            border: none;
            img {
              width: .13rem;
              height: .17rem;
              margin: 0 auto;
            }

          }
        }
        h3{
          display: inline-block;
          font-size: .12rem;
          color: #999999;
          margin-top: .08rem;
          margin-left: 2.58rem;
        }
        button{
          width: 2.46rem;
          height: .39rem;
          border-radius: .2rem;
          background-color: #ffe009;
          font-size: .16rem;
          color: #333333;
          margin: .37rem 0 0 50%;
          transform: translateX(-50%);
        }
      }
      .login-more{
        p{
          font-size: .12rem;
          color: #999999;
          margin-top: 1.13rem;
          a{
            color: #999999;
            margin: 0 .12rem;
          }
        }
        .img{
          margin-top: .24rem;
          display: flex;
          justify-content: space-between;
          padding: 0 1.14rem;
          img{
            width: .39rem;
            height: .39rem;
          }
        }
      }
    }

  }
</style>
