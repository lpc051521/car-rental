<template>
    <div class="evaluate">
      <ul>
        <li>
          <div class="title">
            <p>奥迪Q5</p>
            <p>已完成</p>
          </div>
          <div class="img">
            <img src="./img/jpg1@2x.png" alt="">
            <div class="text">
              <p>取车地点：金水区门店</p>
              <p>取车时间：2019-08-20 16:00</p>
              <p><span>共计1天</span><span>￥1064</span></p>
            </div>
          </div>
          <div class="btn">
            <button>订单详情</button>
            <button>评价订单</button>
          </div>
        </li>
        <!--<li>-->
          <!--<div class="title">-->
            <!--<p>奥迪Q5</p>-->
            <!--<p>待取车</p>-->
          <!--</div>-->
          <!--<div class="img">-->
            <!--<img src="./img/jpg1@2x.png" alt="">-->
            <!--<div class="text">-->
              <!--<p>取车地点：金水区门店</p>-->
              <!--<p>取车时间：2019-08-20 16:00</p>-->
              <!--<p><span>共计1天</span><span>￥1064</span></p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="btn">-->
            <!--<button>订单详情</button>-->
            <!--&lt;!&ndash;<button>评价订单</button>&ndash;&gt;-->
          <!--</div>-->
        <!--</li>-->
      </ul>
      <div class="nomore">
        <p><span>—————</span><a>暂无更多订单</a><span>—————</span></p>
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
        methods: {}
    }
</script>

<style scoped lang="less">
  .evaluate{
    width: 100%;
    height: 5.865rem;
    background-color: #f6f6f6;
    overflow: hidden;
    ul{
      padding:  0 .15rem;
      li{
        width: 3.45rem;
        height: 1.79rem;
        font-size: .17rem;
        background-color: #fff;
        margin-top: .12rem;
        border-radius: .1rem;
        .title{
          color: #333333;
          height: .41rem;
          margin: 0 auto ;
          padding-top: .13rem;
          padding-bottom: .12rem;
          width: 3.27rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f0f0f0;
          p:last-child{
            font-size: .13rem;
          }
        }
        .img{
          height: .92rem;
          display: flex;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: .16rem;
          img{
            width: .95rem;
            height: .4rem;
            margin: .29rem .07rem .28rem .13rem;
          }
          .text{
            width: 2.21rem;
            font-size: .14rem;
            text-align: left;
            margin-top: .05rem;
            p{
              margin-top: .07rem;
            }
            p:last-child{
              margin-top: .06rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: .12rem;
              color: #666666;
              span:last-child{
                font-size: .14rem;
                color: #333333;
              }
            }
          }
        }
        .btn{
          padding-left: 1.95rem;
          display: flex;
          justify-content: flex-end;
          button{
            width: .65rem;
            height: .22rem;
            border-radius: .11rem;
            background-color: #ffe009;
            font-size: .12rem;
            color: #333333;
            margin-top: .1rem;
            margin-right: .05rem;
          }
        }


      }
    }
    .nomore{
      p{
        font-size: .12rem;
        color: #999999;
        margin-top: .12rem;
        a{
          color: #999999;
          margin: 0 .12rem;
        }
      }
    }
  }
</style>
