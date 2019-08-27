<template>
  <div class="register">
    <div class="content">
      <div class="back">
        <img src="./img/icon_1@2x.png" alt="" @click="back">
      </div>
      <div class="login-box">
        <p><span @click="login">登录</span>/<span>注册</span></p>
        <h2><span>+86</span><input type="text" placeholder="请输入手机号"></h2>
        <h2 class="psw"><span><img src="./img/icon_2@2x.png" alt=""></span><input type="text" placeholder="请输入验证码"></h2>
        <h2 class="psw"><span><img src="./img/icon_3@2x.png" alt=""></span><input type="text" placeholder="请输入密码"></h2>
        <button>注册</button>
      </div>
      <div class="login-more">
        <p>注册即视为您同意<a>《平驾用户服务协议》</a></p>
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
      login(){
        this.$router.push('/login');
      },
      back(){
        this.$router.push('/index');
      }
    }
  }
</script>

<style scoped lang="less">
  .register {
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
          span:last-child {
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
          text-align: center;
          font-size: .12rem;
          color: #999999;
          margin-top: .08rem;
          a{
            color: #3366ff;
          }
        }
        margin-bottom: 1.35rem;
      }
    }

  }
</style>
