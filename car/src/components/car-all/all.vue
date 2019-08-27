<template>
  <div class="all">
    <Screen2 v-show="itShow" :itShow="itShow" @chang_show="change_show"></Screen2>
    <Head>
      <div class="head">
        <img src="./img/icon1@2x.png" alt="" class="back" @click="back">
        <span>为您推荐</span>
        <img src="./img/icon2@2x.png" alt="">
      </div>
    </Head>
    <div class="title">
      <p @click="show" class="comp">综合排序</p>
      <p @click="show2">筛选</p>
    </div>
    <Screen v-show="isShow"></Screen>
    <div class="list">
      <ul>
        <li v-for="(item,index) in data" :key="index">
          <van-button type="primary" @click="showPopup" >
            <!--<div class="cont">-->
              <img src="./img/1.jpg" alt="">
              <p>{{ item.name }}</p>
              <h2><span>豪华/自动/1.5L</span><span><a>￥</a><a>{{ item.money }}</a>/小时</span></h2>
            <!--</div>-->
            <!--<img :src="item.img_url" alt="">-->

          </van-button>
          <van-popup v-model="upshow" position="bottom"
                     :style="{ height: '75%',width:'100%' }" round>
            <div class="car_box">
              <div class="cgy-head">
                <h1>车辆详情</h1>
                <img src="./cgy-img/icon-1.png" />
              </div>
              <div class="car_img">
                <div class="img-box" @touchmove="move">
                  <ul id="img_all">
                    <li class="move show"><img src="./list_img/1.png" alt=""></li>
                    <li v-for="(item,index) in img_arr" class="move" :key="index"  >
                      <img :src="item.url" alt="">
                    </li>
                  </ul>
                </div>
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
                  <img src="./cgy-img/icon3.png" alt class="star" />
                </div>
              </div>
              <div class="text">
                <div class="one">
                  <img src="./cgy-img/icon4.png" alt />
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
          </van-popup>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Head from '../../components/head/head'
  import Screen from './screen/screen'
  import Screen2 from './screen2/screen2'

  export default {
    data() {
      return {
        nums: 0,
        touch: 0,
        endX: 0,
        num:0,
        isShow: false,
        itShow: false,
        upshow: false,
        data: [
          {
            name: '奥迪Q5',
            money: 69,
            img_url: '@/components/car-all/img/1.jpg'
          },
          {
            name: '迈巴赫',
            money: 199,
            img_url: './img/2.jpg'
          },
          {
            name: '奥迪Q5',
            money: 169,
            img_url: './img/3.jpg'
          },
          {
            name: '大众帕萨特',
            money: 119,
            img_url: './img/4.jpg'
          },
          {
            name: '别克',
            money: 89,
            img_url: './img/5.jpg'
          },
          {
            name: '福克斯',
            money: 129,
            img_url: './img/6.jpg'
          },
        ],
        img_arr:[
          {url: './list_img/2.png'},
          {url: './list_img/3.png'},
          {url: './list_img/4.png'},
          {url: './list_img/5.png'},
          {url: './list_img/6.png'},
          {url: './list_img/7.png'},
          {url: './list_img/8.png'},
          {url: './list_img/9.png'},
          {url: './list_img/10.png'},
          {url: './list_img/11.png'},
          {url: './list_img/12.png'},
          {url: './list_img/13.png'},
          {url: './list_img/14.png'},
          {url: './list_img/15.png'},
          {url: './list_img/16.png'},
          {url: './list_img/17.png'},
          {url: './list_img/18.png'},
          {url: './list_img/19.png'},
          {url: './list_img/20.png'},
          {url: './list_img/21.png'},
          {url: './list_img/22.png'},
          {url: './list_img/23.png'},
          {url: './list_img/24.png'},
          {url: './list_img/25.png'},
          {url: './list_img/26.png'},
          {url: './list_img/27.png'},
          {url: './list_img/28.png'},
          {url: './list_img/29.png'},
      ]
      }
    },
    computed: {},
    components: {
      Head, Screen, Screen2
    },
    created() {
    },
    mounted() {
    },
    methods: {
      back() {
        this.$router.push('/index');
      },
      show() {
        this.isShow = !this.isShow
      },

      show2() {
        this.itShow = !this.itShow;
        this.isShow = false;
      }
      , change_show(v) {
        console.log(v);
        this.itShow = v;
      },
      showPopup() {
        this.upshow = true;
      },
      move(event) {
        this.touch = event.targetTouches[0];
        this.endX = this.touch.pageX;
        this.nums = parseInt((this.endX / 10)/1.3);
        this.num=this.nums;
        this.num = this.num > 28 ? 0 : this.num;
        // console.log(this.num)
        // $('ul li').eq(this.num).addClass('show').siblings('li').removeClass('show')

        let ul = document.getElementById('img_all');
        let lis = ul.childNodes
        // console.log(lis)
      }
    }
  }
</script>

<style scoped lang="less">

  .head {
    font-size: .18rem;
    width: 100%;
    height: .44rem;
    padding: 0 .15rem;
    background-color: rgb(255, 224, 9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    img {
      width: .22rem;
      height: .22rem;
    }
  }
/*.cont{*/
  /*color: #333333;*/
/*}*/
  .title {
    width: 100%;
    height: .33rem;
    font-size: .14rem;
    color: rgb(51, 51, 51);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > p {
      width: 50%;
    }
    & > p:first-child {
      background: url("./img/icon3@2x.png") no-repeat 1.2rem 0;
      background-size: .2rem;
    }
    & > p:last-child {
      background: url("./img/icon@2x.png") no-repeat 1.15rem .05rem;
      background-size: .1rem;
    }

  }

  .list {
    width: 100%;
    background-color: #f6f6f6;

     ul {
      padding-left: .05rem;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 1.68rem;
        height: 1.58rem;
        font-size: .14rem;
        background-color: #fff;
        border-radius: .1rem;
        margin: .1rem 0 0 .1rem;
        button{
          width: 100%;
          height: 100%;
          padding: 0;
          color: #333333;
          border: none;
          background-color: rgba(0,0,0,0);
          &>span{
            img {
              border-radius: .1rem;
            }
            & > p {
              font-size: .14rem;
              text-align: left;
              margin-left: .1rem;
              height: .15rem;
            }
            h2 {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: .06rem;
              span:first-child {
                display: inline-block;
                font-size: .09rem;
                text-align: center;
                border-radius: .07rem;
                width: .7rem;
                height: .14rem;
                margin-left: .05rem;
                line-height: .13rem;

                background-color: rgb(232, 232, 232);
              }
              span:last-child {
                font-size: .1rem;
                margin-right: .05rem;
                a:first-child {
                  color: rgb(212, 23, 42);
                  font-size: .1rem;
                }
                a:last-child {
                  color: rgb(212, 23, 42);
                  font-size: .16rem;
                }
              }
            }
        }
        }
      }
    }
  }

  /*弹出层*/
  .screen {
    width: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    height: 100%;
    font-size: .15rem;
z-index: 9;
  }

  /*弹出层2*/
  .screen2 {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, .6);
    font-size: .15rem;
    z-index: 9;
  }


  /*弹出层3*/
  .car_box {
    width: 100%;
    overflow: hidden;
    padding: 0.15rem;
    box-sizing: border-box;
    height: 100%;
    .cgy-head {
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

      .img-box {
        width: 100%;
        height: 180px;

        ul {
          width: 100%;
          height: 180px;
          li {
            width: 97%;
            height: 180px;
            position: absolute;
            left: 0;
            top: 0;
            margin-top: .4rem;
            img {
              width: 100%;

            }
          }
        }
      }

      .move {
        visibility: hidden;
      }

      .show {
        visibility: visible;
      }

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
