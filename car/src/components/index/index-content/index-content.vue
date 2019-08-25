<template>
    <div class="content">
      <div class="banner">
          <img src="./img/banner@2x.png" alt="">
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
            <button>立即选车</button>
          </div>
          <div class="recommend">
            <div class="text">
              <div class="models">
                <p>推荐车型：</p>
              </div>
              <div class="all">
                <span @click="go">查看全部 ＞</span>
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
    export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {},
        created() {
        },
        methods: {
          go(){
            this.$router.push('/all');
          }
        }
    }
</script>

<style scoped lang="less">
.content{
  font-size: 0;
  width: 100%;

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
    z-index: 9999;
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

}
</style>
