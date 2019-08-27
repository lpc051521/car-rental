<template>
 <ul class="low">
     <li>
         <img src="./img/icon3@2x.png" alt="">
         <span>基本保障服务</span>
     </li>
     <li>
         <img src="./img/icon3@2x.png" alt="">
         <span>全面保障服务</span>
     </li>
     <li>
         <img src="./img/icon3@2x.png" alt="">
         <span>人生安全及财产安全</span>
     </li>
 </ul>
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
.low{
    width: 3.45rem;
    margin-top: 0.1rem;
    display: flex;
    margin-bottom: 0.1rem;
    li{
        font-size: 0;
        flex: 1;
        display: flex;
        justify-content: center;
        margin-left: 0.03rem;
        img{
            width: 0.22rem;
            height: 0.22rem;
        }
        span{
            font-size: 0.1rem;
            color: #999999;
            text-align: left;
            margin-top: 0.05rem;
        }
    }
}
</style>
