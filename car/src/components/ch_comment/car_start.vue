<template>
 <div class="car">
     <div class="top">
         <img src="./img/jpg1@2x.png" alt="">
         <ul>
             <li>沃尔沃xc60</li>
             <li class="sp">2.7自动 乘坐5人 SUV</li>
         </ul>
         <div class="mat">
             <p>形式路程<span>64公里</span></p>
         </div>
         <div class="start">
             <p>整体评价</p>
             <img src="./img/btn1h@2x.png" alt="">
             <img src="./img/btn1h@2x.png" alt="">
             <img src="./img/btn1h@2x.png" alt="">
             <img src="./img/btn1h@2x.png" alt="">
             <img src="./img/btn1h@2x.png" alt="">
         </div>
         <div class="down">
             <p>此次使用满足你的期望吗？说说它的有点和美中不足的地方吧！</p>
             <div class="photo">
                 <img src="./img/btn2n@2x.png" alt="">
                 <img src="./img/btn3n@2x.png" alt="">
             </div>
         </div>
         <div class="name">
             <img src="./img/icon3@2x.png" alt="">
             <p>匿名</p>
             <span>您写的评价将会以匿名的形式展现</span>
         </div>
     </div>
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

 },
 components: {

 },
};
</script>

<style scoped lang="less">
.car{
    width: 3.45rem;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    border-radius: 0.1rem;
    height: 3.48rem;
    background-color: #fff;
    overflow: hidden;
    .top{
        width: 100%;
        overflow: hidden;
        img{
            width: 0.97rem;
            height: 0.48rem;
            margin-left: 0.18rem;
            margin-top: 0.18rem;
            float: left;
        }
        ul{
            margin-top: 0.18rem;
            margin-left: 0.58rem;
            float: left;
            overflow: hidden;
            li{
                font-size: 0.14rem;
                color: #333333;
                text-align: left;
                overflow: hidden;
            }
            .sp{
                font-size: 0.1rem;
                margin-top: 0.08rem;
            }
        }
        .mat{
            width: 100%;
            margin-top: 0.86rem;
            p{
                font-size: 0.14rem;
                color: #333333;
                text-align: left;
                margin-left: 0.1rem;
                span{
                    float: right;
                    margin-right: 0.1rem;
                }
            }
        }
        .start{
            height: 0.6rem;
            border-bottom: 1px solid #f6f6f6;
            p{
                font-size: 0.14rem;
                color: #333333;
                text-align: left;
                margin-left: 0.1rem;
                float: left;
                margin-top: 0.2rem;
            }
            img{
                width: 0.22rem;
                height: 0.22rem;
                margin-left: 0.15rem;
            }
        }
        .down{
            width: 100%;
            height: 1.05rem;
            // border: 1px solid;
            p{
                text-align: left;
                margin-left: 0.1rem;
                margin-top: 0.2rem;
                font-size: 0.1rem;
                color: #999999;
            }
            .photo{
                margin-top: 0.37rem;
                img{
                    width: 0.5rem;
                    height: 0.5rem;
                    margin-left: 0.1rem;
                }
            }
        }
        .name{
            margin-top: 0.2rem;
            overflow: hidden;
        
            img{
                width: 0.22rem;
                height: 0.22rem;
                margin-top: 0;
                margin-left: 0.1rem;
                float: left;
            }
            p{
                font-size: 0.14rem;
                color: #333333;
                text-align: left;
                float: left;
                margin-top: 0.01rem;
                margin-left: 0.1rem;
            }
            span{
                font-size: 0.1rem;
                color: #999999;
                float: right;
                margin-top: 0.05rem;
                margin-right: 0.1rem;
            }
        }
    }
}
</style>
