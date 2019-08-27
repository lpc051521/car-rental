<template>
 <div class="top">
     <ul>
         <li class="car_"><img src="./img/pic-1@2x.png" alt=""></li>
         <li><p>奥迪Q5</p></li>
         <li><p class="two">SUV | 3.5L | 自动 | 可承载5人</p></li>
         <li><p class="three">图片仅供参考，请以门店实物为准！</p></li>
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
.top{
    width: 3.45rem;
    height: 0.91rem;
    margin-left: 0.15rem;
    background-color: #fff;
    margin-top: 0.1rem;
    border-radius: 0.1rem;
    ul{
        width: 100%;
        height: 100%;
        overflow: hidden;
        li{
            margin-top: 0.1rem;
            p{
                font-size: 0.15rem;
                color: #333333;
                text-align: left;
                margin-left: 0.05rem; 
            }
            .two{
                font-size: 0.13rem;
                margin-top: 0.09rem;
                color: #666666;
            }
            .three{
                font-size: 0.1rem;
                color: #666666;
                margin-top: 0.08rem;
            }
            
        }
        .car_{
            float: left;
            img{
                width: 1.65em;
                height: 0.72rem;
            }
        }
    }
}
</style>
