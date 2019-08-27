<template>
 <div class="do">
     <div class="top_do">
         <img src="./img/jpg1@2x.png" alt="">
         <ul>
             <li>奥迪Q5</li>
             <li class="big">SUV | 3.5L | 自动 | 可承载5人</li>
         </ul>
     </div>
     <ul class="floor">
         <li><span>地址</span>河南省郑州市金水区花园路与金水路</li>
         <li><span>租期</span>8月20日 10:00-8月20日 16:00</li>
     </ul>
     <ul class="call">
         <li class="one">车辆租金<span>1008元</span><span class="two">168×6</span></li>
         <li>基本保障服务费<span>36元</span><span class="two">6×6</span></li>
         <li>手续费<span>20元</span></li>
         <li>还车城市<span>郑州</span></li>
     </ul>
     <div class="xin">
         <p>订单信息</p>
         <ul class="call xi">
            <li class="li">驾驶人<span>小吴</span></li>
            <li>身份证信息<span>410574133520140359</span></li>
            <li>驾驶人手机号<span>1384592476</span></li>
            <li>订单号<span>E5637895984815232894</span></li>
     </ul>
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
.do{
    width: 3.45rem;
    height: 4.66rem;
    border-radius: 0.1rem;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    background-color: #fff;
    .top_do{
        width: 100%;
        overflow: hidden;
        img{
            width: 1.65rem;
            height: 0.72rem;
            margin-top: 0.08rem;
            float: left;
        }
        ul{
            float: left;
            margin-left: 0.07rem;
            li{
                font-size: 0.15rem;
                color: #333333;
                margin-top: 0.23rem;
                text-align: left;
            }
            .big{
                margin-top: 0.09rem;
                font-size: 0.1rem;
                color: #666666;
            }
        }
    }
    .floor{
        width: 100%;
        margin-top: 0.1rem;
        overflow: hidden;
        li{
            font-size: 0.12rem;
            color: #333333;
            text-align: left;
            margin-left: 0.11rem;
            margin-top: 0.18rem;
            span{
                color: #999999;
                font-size: 0.13rem;
                margin-right: 0.26rem;
            }
        }
    }
    .call{
        width: 100%;
        overflow: hidden;
        margin-top: 0.25rem;
        li{
            margin-top: 0.12rem;
            font-size: 0.13rem;
            color: #999999;
            margin-left: 0.11rem;
            text-align: left;
            span{
                font-size: 0.13rem;
                color: #333333;
                float: right;
                margin-right: 0.11rem;
            }
            .two{
                font-size: 0.1rem;
                color: #999999;
                margin-top: 0.03rem;
            }
        }
        .one{
            margin-top: 0;
            color: #333333;
        }
    }
    .xin{
        width: 100%;
        margin-top: 0.25rem;
        text-align: left;
        p{
            font-size: 0.14rem;
            color: #333333;
            margin-left: 0.11rem;
        }
        .xi{
            margin-top: 0.15rem;
            .li{
                margin-top: 0;
            }
        }
    }
}
</style>
