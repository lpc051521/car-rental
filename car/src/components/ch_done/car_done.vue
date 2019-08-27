<template>
 <div class="done">
     <div class="top">
         <p>已完成</p>
         <p class="little">你的订单已完成，感谢你使用平价租车</p>
     </div>
     <div class="center">
         <p>订单金额<span>1064元</span></p>
     </div>
     <div class="bottom">
         <button>再来一单</button>
         <button @click="go">我要评价</button>
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
    go(){
        this.$router.push('/comment');
    }
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.done{
    width: 3.45rem;
    height: 1.44rem;
    background-color: #fff;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    border-radius: 0.1rem;
    .top{
        width: 100%;
        height: 0.6rem;
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
        p{
            font-size: 0.15rem;
            color: #999999;
            text-align: left;
            margin-left: 0.14rem;
            margin-top: 0.11rem;
        }
        .little{
            font-size: 0.12rem;
            margin-top: 0.05rem;
        }
    }
    .center{
        width: 100%;
        height: 0.35rem;
        border-bottom: 1px solid #f1f1f1;
        p{
            font-size: 0.12rem;
            color: #333333;
            line-height: 0.35rem;
            margin-left: 0.14rem;
            text-align: left;
        }
        span{
            font-size: 0.15rem;
            color: #d4172a;
            margin-left: 0.13rem;
        }
    }
    .bottom{
        width: 100%;
        button{
            width: 1.53rem;
            height: 0.3rem;
            background-color: #ffe009;
            border-radius: 0.15rem;
            float: left;
            color: #333333;
            font-size: 0.12rem;
            margin-left: 0.13rem;
            margin-top: 0.1rem;
        }
    }
}
</style>
