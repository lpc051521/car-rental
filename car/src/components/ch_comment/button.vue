<template>
 <div class="button">
     <div class="a">
         <p>车辆情况</p>
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
     </div>
     <div class="a b">
         <p>服务态度</p>
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
         <img src="./img/btn1n@2x.png" alt="">
     </div>
     <button>发布评论</button>
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
.button{
    width: 3.45rem;
    height: 2.47rem;
    border-radius: 0.1rem;
    background: #fff;
    margin-left: 0.15rem;
    margin-top: 0.1rem;
    .a{
        overflow: hidden;
        width: 100%;
        p{
            font-size: 0.14rem;
            color: #333333;
            text-align: left;
            margin-top: 0.2rem;
            margin-left: 0.1rem;
            float: left;
        }
        img{
            width: 0.22rem;
            height: 0.22rem;
            float: left;
            margin-top: 0.18rem;
            margin-left: 0.1rem;
        }
    }
    .b{
        font-size: 0;
        margin-top: 0.1rem;
        p{
            margin-top: 0;
        }
        img{
            margin-top: 0;
        }
    }
    button{
        overflow: hidden;
        width: 3.25rem;
        height: 0.44rem;
        background-color: #ffe009;
        border-radius: 0.22rem;
        margin-top: 1.2rem;
    }
}
</style>
