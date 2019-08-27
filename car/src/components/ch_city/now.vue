<template>
 <div class="now">
     <div class="top">
         <p>当前定位城市:</p>
         <img src="./img/icon2@2x.png" alt="">
         <p>郑州</p>
     </div>
     <div class="center">
         <p>历史记录</p>
     </div>
     <div class="bottom">
         <ul>
             <li>洛阳</li>
             <li>西安</li>
             <li>昆明</li>
             <li>郑州</li>
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
.now{
    width: 3.45rem;
    height: 1.04rem;
    background-color: #fff;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    overflow: hidden;
    border-radius: 0.1rem;
    .top{
        margin-top: 0.1rem;
        margin-left: 0.05rem;
        overflow: hidden;
        p{
            font-size: 0.14rem;
            color: #333333;
            text-align: left;
            float: left;
            margin-left: 0.05rem;
        }
        img{
            float: left;
            width: 0.22rem;
            height: 0.22rem;
            margin-left: 0.05rem;
        }
    }
    .center{
        width: 100%;
        margin-top: 0.1rem;
        p{
            font-size: 0.11rem;
            color: #333333;
            text-align: left;
            margin-left: 0.1rem;
        }
    }
    .bottom{
        margin-top: 0.1rem;
        ul{
            font-size: 0.13rem;
            color: #333333;
            margin-left: 0.07rem;
            li{
                text-align: center;
                float: left;
                border-radius: 0.05rem;
                margin-left: 0.05rem;
                width: 0.75rem;
                height: 0.25rem;
                line-height: 0.25rem;
                border: 1px solid #ccc;
            }
        }
    }
}
</style>
