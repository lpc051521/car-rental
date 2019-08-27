<template>
    <div class="screen2" v-show="Show">
      <div class="back" @click="hidden">

      </div>
        <div class="content">
          <div class="one">
            <p>车型</p>
            <ul>
              <li v-for="(item,index) in arr" :key="index" :class="{ active:index===classnum}" @click="addClass(index)">{{ item }}</li>
            </ul>
          </div>
          <div class="two">
            <p>价格区间（元）</p>
            <h2><span>最低价</span><a>——</a><span>最高价</span></h2>
            <ul>
              <li>400以下</li>
              <li>400-800</li>
              <li>800以上</li>
            </ul>
          </div>
          <div class="three">
            <p>取车城市</p>
            <h3>
              <img src="./img/icon1@2x.png" alt="">
              郑州
            </h3>
          </div>
          <div class="four">
            <p>还车城市</p>
            <h3>
              <img src="./img/icon1@2x.png" alt="">
              定位
            </h3>
          </div>
          <div class="btn">
            <button>确定</button>
            <button>重置</button>
          </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:['经济型','舒适型','豪华型','中巴/大巴','SUV','MPV'],
              classnum:0
            }
        },
    props:{
          Show:Boolean
    }
      ,
        computed: {},
        components: {},
        created() {
        },
        methods: {
          hidden(){
            this.Show=false;
            this.$emit('chang_show',this.Show)
          },
          addClass:function(index){
            this.classnum=index;
          }
        }
    }
</script>

<style scoped lang="less">
.screen2{
  .back{
    position: fixed;
    left: 0;
    width: .75rem;
    height: 100%;
  }
  .content{
    color: #333333;
    width: 3rem;
    height: 100%;
    background-color: #fff;
    position: fixed;
    right: 0;
    .one{
      p{
        font-size: .14rem;
        text-align: left;
        margin-left: .15rem;
        height: .44rem;
        line-height: .44rem;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f0f0f0 ;
        li{
          width: .8rem;
          height: .36rem;
          border-radius: .05rem;
          text-align: center;
          line-height: .36rem;
          font-size: .12rem;
          background-color: #f0f0f0;
          margin: 0 0 .15rem .15rem;
        }
        .active{
          background-color: #ffe009;
        }
      }
    }
    .two{
      p{
        font-size: .14rem;
        text-align: left;
        margin-left: .15rem;
        height: .44rem;
        line-height: .44rem;
      }
      h2{
        font-weight: 100;
        margin-top: .20rem;
        a{
          color: #333333;
          margin: 0 .14rem;
        }
        span{
          font-size: .12rem;
          display: inline-block;
          width: .9rem;
          height: .25rem;
          line-height: .25rem;
          background-color: #f0f0f0;
          border-radius: .13rem;
        }
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f0f0f0 ;
        margin-top: .15rem;
        li{
          width: .8rem;
          height: .36rem;
          border-radius: .05rem;
          text-align: center;
          line-height: .36rem;
          font-size: .12rem;
          background-color: #f0f0f0;
          margin: 0 0 .15rem .15rem;
        }
      }
    }
    .three{
      border-bottom: 1px solid #f0f0f0;
      p{
        font-size: .14rem;
        text-align: left;
        margin-left: .15rem;
        margin-top: .28rem;
      }
      h3{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .12rem;
        width: .7rem;
        height: .3rem;
        border-radius: .08rem;
        background-color: #ffe009;
        margin: .2rem 0 .25rem .15rem;
        img{
          width: .22rem;
          height: .22rem;
        }
      }
    }
    .four{
      p{
        font-size: .14rem;
        text-align: left;
        margin-left: .15rem;
        margin-top: .28rem;
      }
      h3{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .12rem;
        width: .7rem;
        height: .3rem;
        border-radius: .08rem;
        background-color: #f0f0f0;
        margin: .2rem 0 .25rem .15rem;
        img{
          width: .22rem;
          height: .22rem;
        }
      }
    }
    .btn{
      margin-top: .95rem;
      button{
        width: 1.3rem;
        height: .37rem;
        background-color: #f0f0f0;
        border-radius: .19rem;
        font-size: .18rem;
      }
      button:first-child{
        background-color: #ffe009;
      }
    }
  }
}
</style>
