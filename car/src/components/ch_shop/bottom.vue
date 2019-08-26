<template>
 <div class="bottom">
     <p><span class="a">￥</span>168<span class="b">/小时</span></p>
     <button>预约此车</button>
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
.bottom{
    width: 100%;
    height: 0.5rem;
    background-color: #fff;
    margin-top: 0.1rem;
    overflow: hidden;
    p{
        font-size: 0.18rem;
        text-align: left;
        color: rgb(212, 23, 42);
        margin-left: 0.56rem;
        margin-top: 0.16rem;
        float: left;
        .a{
            font-size: 0.12rem;
        }
        .b{
            font-size: 0.1rem;
            color: rgb(51, 51, 51);
        }
    }
    button{
        width: 1.75rem;
        height: 0.42rem;
        background-color: #ffe009;
        font-size: 0.15rem;
        margin-left: 0.4rem;
        margin-top: 0.05rem;
        font-weight: 500;
        border-radius: 0.4rem;
        float: left;
    }
}
</style>
