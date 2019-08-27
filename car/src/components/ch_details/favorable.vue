<template>
 <div class="favorable">
     <p class="title">优惠满减</p>
     <ul class="top">
         <li>优惠活动</li>
         <li class="right">暂无优惠活动</li>
     </ul>
     <ul class="top bottom">
         <li>优惠券<span>(暂无可用)</span></li>
         <li class="right down"><img src="./img/icon-6@2x.png" alt="" @click = "chage"></li>
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
     chage(){
         
     }
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.favorable{
    width:3.45rem;
    height: 1.13rem;
    background-color: #fff;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    overflow: hidden;
    border-radius: 0.1rem;
    .title{
        font-size: 0.15rem;
        color: #333333;
        margin-top: 0.2rem;
        text-align: left;
        margin-left: 0.1rem;
    }
    .top{
        width: 100%;
        margin-top: 0.2rem;
        overflow: hidden;
        li{
            font-size: 0.13rem;
            color: #333333;
            margin-left: 0.1rem;
            text-align: left;
            float: left;
            span{
                font-size: 0.1rem;
                color: #999999;
            }
        }
        .right{
            float: right;
            font-size: 0.1rem;
            color: #999999;
            margin-right: 0.1rem;
            img{
                width: 0.25rem;
                height: 0.2rem;
            }
        }
    }
    .bottom{
        margin-top: 0.15rem;
    }
}
</style>
