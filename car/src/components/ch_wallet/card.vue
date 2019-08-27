<template>
 <div class="card">
     <ul>
         <li class="o">
            <p>我的积分: 0积分</p>
            <img src="./img/icon4@2x.png" alt="">
        </li>
        <li class="color">
            <p>1积分=1元</p>
            <p class="two">注：每单最高可使用积分抵扣49%的租车费用</p>
        </li>
     </ul>

     <ul class="three">
         <li class="o">
            <p>银行卡</p>
            <img src="./img/icon4@2x.png" alt="">
        </li>
     </ul>

     <ul class="four">
         <li class="o">
            <p>优惠券</p>
            <img src="./img/icon4@2x.png" alt="">
            <p class="right">查看全部(0)</p>
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
.card{
    width: 3.45rem;
    height: 1.65rem;
    background-color: #fff;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    border-radius: 0.1rem;
    ul{
        width: 100%;
        overflow: hidden;
        .o{
            font-size: 0.15rem;
            color: #333333;
            overflow: hidden;
            p{
                font-size: 0.15rem;
                color: #333333;
                margin-top: 0.1rem;
                margin-left: 0.1rem;
                text-align: left;
                float: left;
            }
            img{
                width: 0.22rem;
                height: 0.22rem;
                float: right;
                margin-right: 0.1rem;
                margin-top: 0.1rem;
            }
        }
        .color{
            text-align: left;
            margin-left: 0.2rem;
            margin-top: 0.05rem;
            p{
                font-size: 0.12rem;
                color: #999999;
                margin-top: 0.04rem;
            }
            .two{
                font-size: 0.1rem;
            }
            
        }
    }
    .three{
        margin-top: 0.07rem;
    }
    .four{
        margin-top: 0.1rem;
        li{
            .right{
                float: right;
                font-size: 0.11rem;
                color: #666666;
                margin-top: 0.13rem;
            }
        }
    }
}
</style>
