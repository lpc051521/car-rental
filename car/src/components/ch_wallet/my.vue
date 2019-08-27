<template>
 <div class="my">
     <ul>
         <li class="title">我的驾驶券: 0</li>
         <li class="write top">
             <img src="./img/icon3@2x.png" alt="">
             <p>1驾驶券=1元</p>
         </li>
         <li class="write">
             <img src="./img/icon3@2x.png" alt="">
             <p>驾驶券可用于抵扣租车消费</p>
         </li>
         <li class="write">
             <img src="./img/icon3@2x.png" alt="">
             <p>驾驶券不可取现</p>
         </li>
     </ul>
     <div class="car">
         <img src="./img/jpg1@2x.png" alt="">
     </div>
     <div class="down">
         <p>充值驾驶券</p>
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
.my{
    width: 3.45rem;
    height: 1.62rem;
    background-color: #fff;
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    border-radius: 0.1rem;
    ul{
        overflow: hidden;
        float: left;
        .title{
            font-size: 0.15rem;
            color: #333333;
            margin-left: 0.35rem;
            text-align: left;
            margin-top: 0.17rem;
            overflow: hidden;
        }
        .write{
            font-size: 0.12rem;
            color: #999999;
            margin-left: 0.15rem;
            text-align: left;
            margin-top: 0.04rem;
            overflow: hidden;
            img{
                width: 0.22rem;
                height: 0.22rem;
                float: left;
            }
            p{
                margin-left: 0.11rem;
                float: left;
                margin-top: 0.03rem;
            }
        }
        .top{
            margin-top: 0.15rem;
        }
    }
    .car{
        float: left;
        margin-top: 0.55rem;
        margin-left: 0.06rem;
        overflow: hidden;
        img{
            width: 1.41rem;
            height: 0.6 rem;
        }
    }
    .down{
        width: 100%;
        overflow: hidden;
        p{
            font-size: 0.15rem;
            color: #d4172a;
            margin-top: 0.06rem;
        }
    }
}
</style>
