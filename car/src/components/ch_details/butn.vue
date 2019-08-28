<template>
 <div class="butn">
     <p class="all">总价:</p>
     <p class="red">￥1064</p>
     <button @click="bills">立即下单</button>
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
bills(){
  this.$router.push('/bills');
}
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.butn{
    width: 100%;
    height: 0.49rem;
    background-color: #fff;
    overflow: hidden;
    margin-top: 0.1rem;
    .all{
        font-size: 0.15rem;
        color: #333333;
        margin-left: 0.15rem;
        line-height: 0.49rem;
        float: left;
    }
    .red{
        font-size: 0.19rem;
        color: #d4172a;
        margin-left: 0.1rem;
        float: left;
        line-height: 0.49rem;
    }
    button{
        width: 1.75rem;
        height: 0.42rem;
        background-color: #ffe009;
        color: #333333;
        font-size: 0.15rem;
        border-radius: 0.21rem;
        float: left;
        margin-left: 0.62rem;
        margin-top: 0.03rem;
    }
}
</style>
