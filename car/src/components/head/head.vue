<template>
    <div class="head">
      <img src="./img/icon3@2x.png" alt="" class="search_icon">

      <div class="title">
          <img src="./img/icon1@2x.png" alt="">
          <div class="search">
            <input type="text" placeholder="查找车型/店面">
          </div>
          <img src="./img/icon2@2x.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {},
        created() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
.head{
  font-size: 0;
  .search_icon{
    width: .22rem;
    height: .27rem;
    position: absolute;
    left: 1.23rem;
    top: .09rem;
  }
  .title{
    width: 100%;
    height: .44rem;
    background-color: rgb(255,224,9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .15rem;
    img{
      width: .22rem;
      height: .22rem;
    }
    .search{
      display: flex;
      width: 2.25rem;
      height: .32rem;
      border-radius: .16rem;
      background-color: #fff;
      justify-content: center;

      input{
text-align: center;
      }
    }
  }
}
</style>
