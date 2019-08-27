<template>
    <div class="content">
      <van-popup v-model="show" position="left"
                 :style="{ width: '70%',height:'100%' }">
        <div class="user-content">
          <div class="user">
            <img src="./../../personal/img/img_1@2x.png" alt="" class="user-img">
            <div class="number">
              <p></p>
              <span></span>
              <button @click="login">未登录</button>
            </div>
          </div>
          <div class="user-bg"></div>
          <ul>
            <li>
              <img src="./../../personal/img/icon-1@2x.png" alt="">
              <p>我的钱包</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
            <li>
              <img src="./../../personal/img/icon-2@2x.png" alt="">
              <p @click="order">我的订单</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
            <li>
              <img src="./../../personal/img/icon-3@2x.png" alt="">
              <p>我的消息</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
            <li>
              <img src="./../../personal/img/icon-4@2x.png" alt="">
              <p>帮助中心</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
            <li>
              <img src="./../../personal/img/icon-5@2x.png" alt="">
              <p>设置</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
            <li>
              <img src="./../../personal/img/icon-6@2x.png" alt="">
              <p>检测更新</p>
              <img src="./../../personal/img/icon-7@2x.png" alt="">
            </li>
          </ul>
        </div>
      </van-popup>

      <Head>
        <img src="./../../head/img/icon3@2x.png" alt="" class="search_icon">
        <div class="title">
          <van-button type="primary" @click="showPopup">
            <img src="./../../head/img/icon1@2x.png" alt="">
          </van-button>

          <div class="search">
            <input type="text" placeholder="查找车型/店面">
          </div>
          <img src="./../../head/img/icon2@2x.png" alt="">
        </div>
      </Head>
      <div class="banner">
          <img src="./img/banner@2x.png" alt="" @click="go">
      </div>
      <div class="bg">
          <div class="drop-box">
            <div class="top">
            <span>取车门店</span>
              <select class="on">
                <option value ="volvo">郑州</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select class="on-address">
                <option value ="volvo">金水区花园路门店</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="bottom">
              <span>还车门店</span>
              <select class="to">
                <option value ="volvo">郑州</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select class="to-address">
                <option value ="volvo">金水区花园路门店</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
          <div class="go">
              <p><span>取车时间</span><span>还车时间</span></p>
            <div class="time">
              <div class="on-time">
                <p>8月20日</p>
                <p>10:00</p>
              </div>
              <div class="img">
                <span>2天</span>
                <img src="./img/icon-5@2x.png" alt="">
              </div>
              <div class="to-time">
                <p>8月22日</p>
                <p>10:00</p>
              </div>
            </div>
          </div>
          <div class="door">
            <img src="./img/icon-selected-4@2x.png" alt="">
            <span>送车上门</span>
          </div>
          <div class="button">
            <button @click="go">立即选车</button>
          </div>
          <div class="recommend">
            <div class="text">
              <div class="models">
                <p>推荐车型：</p>
              </div>
              <div class="all">
                <span>查看全部 ＞</span>
              </div>
            </div>
          </div>
          <div class="car-details">
            <div class="one">
              <img src="./img/jpg1@2x.png" alt="">
              <p>
                <span>法拉利</span>
                <span><a>￥</a><a>199</a>/小时</span>
              </p>
            </div>
            <div class="two">
              <img src="./img/pic-2@2x.png" alt="">
              <p>
                <span>奥迪Q5</span>
                <span><a>￥</a><a>199</a>/小时</span>
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import Head from '../../../components/head/head'
    export default {
        data() {
            return {
              show: false
            };

        },
        computed: {},
        components: {
          Head
        },
        created() {
        },
        methods: {
          go(){

            this.$router.push('');
          }

            this.$router.push('/all');
          },
          showPopup() {
            this.show = true;
          },
          login(){
            this.$router.push('/login');
          },
          order(){
            this.$router.push('/order');
          },

        }
    }
</script>

<style scoped lang="less">
.content{
  /*font-size: 0;*/
  width: 100%;

.head {

  .head {

    font-size: 0;
    height: .44rem;
    background-color: rgb(255, 224, 9);
    .search_icon {
      width: .27rem;
      height: .27rem;
      position: absolute;
      left: 1.23rem;
      top: .09rem;
    }
    .title {
      width: 100%;
      height: .44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .15rem;
      img {
        width: .22rem;
        height: .22rem;
      }
      .search {
        display: flex;
        width: 2.25rem;
        height: .32rem;
        border-radius: .16rem;
        background-color: #fff;
        justify-content: center;

        input {
          text-align: center;
          font-size: .12rem;
        }
      }
    }
  }
  .banner{
    font-size: 0;
    img{
      width: 100%;
      height: 1.94rem;
    }
  }
  .bg{
    width: 100%;
    position: absolute;
    z-index: 1000;
    font-size: .2rem;
    background-color: #fff;
    border-radius: .2rem;
    margin-top: -.15rem;
    .drop-box{
      width: 100%;
      height: .85rem;
      font-size: .12rem;
      text-align: left;

      .top{
        padding-left: .3rem;
        height: .42rem;
        line-height: .42rem;
        color: #999;
        border-bottom: 1px solid #f1f1f1;
        .on{
          width: .5rem;
          font-size: .15rem;
          background: url("./img/icon4.png") no-repeat .3rem -.01rem;
          margin-left: .19rem;
        }
        .on-address{
          font-size: .15rem;
          width: 1.5rem;
          margin-left: .3rem;
          background: url("./img/icon4.png") no-repeat 1.2rem -.01rem;
        }
      }
      .bottom{
        padding-left: .3rem;
        height: .42rem;
        line-height: .42rem;
        color: #999;
        border-bottom: 1px solid #f1f1f1;
        .to{
          font-size: .15rem;
          width: .5rem;
          margin-left: .19rem;
          background: url("./img/icon4.png") no-repeat .3rem -.01rem;
        }
        .to-address{
          margin-left: .3rem;
          font-size: .15rem;
          width: 1.5rem;
          background: url("./img/icon4.png") no-repeat 1.2rem -.01rem;
        }
      }
    }
    .go{
      padding: 0 .3rem;
      margin-top: .12rem;
      &>p{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: .12rem;
        color: #999;
      }
      .time{
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        color: rgb(51,51,51);
        font-weight: 600;
        margin-top: .15rem;
        text-align: left;
        .img{
          font-size: .12rem;
          color: #999;
          font-weight: 500;
          text-align: center;
          img{
            width: .65rem;
            height: .13rem;
            margin-top: -.05rem;
          }
        }
      }
    }
    .door{
      display: flex;
      font-size: .12rem;
      align-items: center;
      color: rgb(102,102,102);
      padding-left: .3rem;
      margin-top: .12rem;
      img{
        text-align: left;
        width: .12rem;
        height: .12rem;
        margin-right: .05rem;
      }
    }
    .button{
      button{
        width: 1.75rem;
        height: .38rem;
        background-color: rgb(255,225,9);
        border-radius: .19rem;
        color: rgb(51,51,51);
        margin-top: .13rem;
      }
    }
    .recommend{
      padding: 0 .15rem;
      margin-top: .21rem;
      .text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .models{
          font-size: .18rem;
          color: rgb(51,51,51);
        }
        .all{
          font-size: .12rem;
          color: rgb(102,102,102);
        }
      }
    }
    .car-details{
      overflow-x: auto;
      overflow-y: hidden;
      font-size: 0;
      white-space: nowrap;
      .one{
        display: inline-block;
        width: 1.97rem;
        height: 1.27rem;
        background-color: #f6f6f6;
        border-radius: .1rem;
        margin-left: .15rem;
        margin-top: 1px;
        font-size: .15rem;
        /*padding: 17px 1px 1px 1px;*/
        span:first-child{
          font-weight: 600;
          color: rgb(51,51,51);
        }
        span:last-child{
          font-weight: 600;
          font-size: .12rem;
          color: rgb(51,51,51);

        }
        span{
          a:first-child{
            font-size: .12rem;
            color: rgb(212,23,42);
          }
          a:last-child{
            font-size: .18rem;
            color: rgb(212,23,42);
          }

        }
        img{
          width: 1.68rem;
          height: .78rem;
          display: inline-block;
          /*margin-bottom: 16px;*/
          margin: .1rem 0 16px .1rem;
        }

        p{
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          margin-top: -3px;

        }
      }
      .two{
        display: inline-block;
        width: 1.97rem;
        height: 1.27rem;
        background-color: #f6f6f6;
        border-radius: .1rem;
        margin-left: .15rem;
        margin-top: 15px;
        font-size: .15rem;
        p{
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          margin-top: -3px;
          span:first-child{
            font-weight: 600;
            color: rgb(51,51,51);
          }
          span:last-child{
            font-weight: 600;
            font-size: .12rem;
            color: rgb(51,51,51);

          }
          span{
            a:first-child{
              font-size: .12rem;
              color: rgb(212,23,42);
            }
            a:last-child{
              font-size: .18rem;
              color: rgb(212,23,42);
            }

          }
        }

        img{
          display: inline-block;
          width: 1.63rem;
          height: .95rem;
          margin: .1rem 0 0 .1rem;
        }
      }
    }
  }
/*个人中心*/
  .van-overlay{
    .van-popup{

    }
  }

  .van-button{
    background-color: rgba(0,0,0,0);
    border: none;
  }
  .user-content{
    background: url('./../../personal/img/img_2@2x.png')no-repeat 0 4.75rem;
    background-size: 100%;
    width: 100%;
    height: 100%;
    font-size: 0;
    color: #000;
    .user{
      display: flex;
      align-items: center;
      .user-img{
        width: .6rem;
        height: .6rem;
        margin: .28rem .22rem .28rem .25rem;
      }
      .number{
        button{
          width: .64rem;
          height: .24rem;
          font-size: .1rem;
          border-radius: .12rem;
          background-color: #ffe009;
        }
      }
    }
    .user-bg{
      height: .1rem;
      background-color: #f6f6f6;
    }
    ul{
    margin-top: .14rem;

      li{
        height: .42rem;
        font-size: .16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .15rem;
        text-align: left;
        p{
          flex: 2;
          padding-left: .1rem;
        }
        img:first-child{
          width: .22rem;
          height: .22rem;
        }
        img:last-child{
          width: .07rem;
          height: .13rem;
        }
      }

      li:hover{
        background-color: #fff6b7;
      }
    }
  }

}
</style>
