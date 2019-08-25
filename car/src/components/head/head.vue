<template>
  <div class="head">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {},
    components: {},
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  .head {
    font-size: 0;
    height: .44rem;
    background-color: rgb(255, 224, 9);
    .search_icon {
      width: .27rem;
      height: .27rem;
      position: absolute;
      left: 1.23rem;
      top: .09rem;
    }
    .title {
      width: 100%;
      height: .44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .15rem;
      img {
        width: .22rem;
        height: .22rem;
      }
      .search {
        display: flex;
        width: 2.25rem;
        height: .32rem;
        border-radius: .16rem;
        background-color: #fff;
        justify-content: center;

        input {
          text-align: center;
          font-size: .12rem;
        }
      }
    }
  }
</style>
