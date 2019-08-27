<template>
 <div class="also">
     <ul class="top">
         <li><p>取还车信息</p></li>
     </ul>
     <ul class="bottom">
         <li>
             <p class="right">8月20日 10:00</p>
             <div class="img">
                <span>6时</span>
                <img src="./img/icon-3@2x.png" alt="">
              </div>
              <p class="left">8月20日 10:00</p>
         </li>
         <li class="down">
             <p>取</p>
             <span>到店取车地址</span>
             <img src="./img/icon-4@2x.png" alt="" @click="go">
         </li>
         <li class="from">河南省郑州市金水区花园路与金水路交叉口东200米</li>
         <li class="down">
             <p>还</p>
             <span>到店还车地址</span>
             <img src="./img/icon-4@2x.png" alt="" @click="go">
         </li>
         <li class="from">河南省郑州市金水区花园路与金水路交叉口东200米</li>
     </ul>
 </div>
</template>

<script>
export default {
 props: {

 },
 data() {
 return {

 };
 },
 methods: {
    go(){
        this.$router.push('/city');
    }
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.also{
    width: 3.45rem;
    margin-left: 0.15rem;
    height: 2.34rem;
    margin-top: 0.11rem;
    background-color: #fff;
    border-radius: 0.1rem;
    .top{
        width: 100%;
        height: 0.45rem;
        li{
            font-size: 0.16rem;
            color: #333333;
            border-bottom: 1px solid #ccc;
            p{
                line-height: 0.45rem;
                text-align: left;
                margin-left: 0.1rem;
            }
        }
    }
    .bottom{
        width:100%;
        height: 1.76rem;
        overflow: hidden;
        li{
            margin-top: 0.16rem;
            overflow: hidden;
            .right,.left{
                font-size: 0.14rem;
                color: #333333;
                text-align: left;
                margin-top: 0.04rem;
                margin-left: 0.1rem;
                float: left;
            }
            .img{
                font-size: 0.12rem;
                color: #999;
                font-weight: 500;
                text-align: center;
                float: left;
                img{
                    width: 0.65rem;
                    height: 0.13rem;
                    margin-top: -0.05rem;
                    margin-left: 0.36rem;
                }
                span{
                    margin-left: 0.3rem;
                }
            }
            .left{
                margin-left: 0.36rem;
            }
        }
        .down{
            margin-top: 0.2rem;
            p{
                width: 0.12rem;
                height: 0.12rem;
                background-color: #5eba35;
                border-radius: 0.03rem;
                color: #fff;
                font-size: 0.1rem;
                margin-left: 0.1rem;
                margin-top: 0.04rem;
                float: left;
            }
            span{
                font-size: 0.14rem;
                float: left;
                color: #333333;
                margin-left: 0.11rem;
                margin-top: 0;
            }
            img{
                width: 0.11rem;
                height: 0.15rem;
                margin-left: 0.11rem;
                float: left;
                margin-top: 0.02rem;
                overflow: hidden;
            }
        }
        .from{
            font-size: 0.12rem;
            margin-top: 0.13rem;
            color: #333333;
            text-align: left;
            margin-left: 0.15rem;
        }
    }
}
</style>
