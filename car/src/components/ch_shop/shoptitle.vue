<template>
 <div class="shoptitle">
     <ul class="top">
        <li><p>郑州花园路店(金水区)</p></li>
        <li><p class="little">门店地址:郑州花园路附近</p></li>
        <li><p class="little">营业时间:9:00-18:00</p></li>
        <li class="jpg"><img src="./img/icon-1@2x.png" alt="" @click="go"><img src="./img/icon-2@2x.png" alt=""></li>
     </ul>
     <ul class="bottom">
         <li>
             <p class="write">服务质量</p>
             <p class="math">4.6</p>
         </li>
         <li>
             <p class="write">车辆状况</p>
             <p class="math">4.9</p>
         </li>
         <li>
             <p class="write">服务态度</p>
             <p class="math">4.6</p>
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
    go(){
        this.$router.push('/city');
    }
 },
 components: {

 },
};
</script>

<style scoped lang="less">
.shoptitle{
    width: 100%;
    height: 1.72rem;
    overflow: hidden;
    .top{
        background-color: #fff;
        margin-left: 0.15rem;
        width: 3.45rem;
        height: 0.92rem;
        margin-top: 0.15rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #ccc;
        border-radius: 0.07rem 0.07rem 0 0 ;
        li{
            margin-top: 0.11rem;
            p{
                font-size: 0.16rem;
                text-align: left;
                margin-left: 0.11rem;
            }
            .little{
                font-size: 0.12rem;
            }
            img{
                width: 0.17rem;
                height: 0.22rem;
                float: left;
                margin-left: 0.26rem;
            }
        }
        .jpg{
            position: absolute;
            top:0.3rem;
            right: 0.12rem;
        }
    }
    .bottom{
        width: 3.45rem;
        height: 0.55rem;
        background-color: #fff;
        margin-left: 0.15rem;
        display: flex;
        border-radius: 0 0 0.07rem 0.07rem;
        overflow: hidden;
        li{
            flex: 1;
            margin-top: 0.1rem;
            .write{
                font-size: 0.1rem;
            }
            .math{
                font-size: 0.16rem;
                color: rgb(212, 23, 42);
            }
        }
    }
    
}
</style>
