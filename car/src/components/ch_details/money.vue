<template>
 <div class="money">
     <p class="title">费用明细</p>
     <ul class="center">
         <li>
             <p>租金明细</p>
             <span>(￥168/小时)</span>
         </li>
         <li class="img">
             <img src="./img/icon-5@2x.png" alt="">
         </li>
         <li class="right">
             <p>168×6</p>
             <p class="black">￥1008</p>
         </li>
     </ul>


      <ul class="center">
         <li>
             <p>手续费</p>
         </li>
         <li class="img img_">
             <img src="./img/icon-5@2x.png" alt="">
         </li>
         <li class="right right_">
             <p class="black">￥20</p>
         </li>
     </ul>

     
     <ul class="center">
         <li>
             <p>基本保障服务费</p>
             <span>(￥6/小时)</span>
         </li>
         <li class="img">
             <img src="./img/icon-5@2x.png" alt="">
         </li>
         <li class="right">
             <p>6×6</p>
             <p class="black">￥36</p>
         </li>
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

 },
 components: {

 },
};
</script>

<style scoped lang="less">
.money{
    width: 3.45rem;
    height: 1.94rem;
    background: #fff;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    overflow: hidden;
    border-radius: 0.1rem;
    .title{
        font-size: 0.15rem;
        color: #333333;
        margin-top: 0.18rem;
        text-align: left;
        margin-left: 0.11rem;
    }
    .center{
        width: 100%;
        margin-top: 0.2rem;
        overflow: hidden;
        li{
            font-size: 0.13rem;
            color: #333333;
            margin-left: 0.11rem;
            text-align: left;
            float: left;
            span{
                font-size: 0.1rem;
                color: #999999;
                margin-top: 0.09rem;
            }
        }
        .img{
            margin-left: 0;
            img{
                width: 0.12rem;
                height: 0.12rem;
                margin-top: 0.03rem;
            }
        }
        .right{
            font-size: 0.1rem;
            float: right;
            margin-top: 0.1rem;
            p{
                float: left;
                margin-right: 0.1rem;
                color: #999999;
            }
            .black{
                color: #333333;
            }
        }
        .right_{
            margin-top: 0.03rem;
        }
        .img_{
            margin-left: 0.05rem;
        }
    }
}
</style>