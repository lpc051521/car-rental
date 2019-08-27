<template>
  <div class="screen">
    <ul class="list">
      <li v-for="(item,index) in arr" :key="index" :class="{ active:index===classnum}" @click="addClass(index)">{{ item }}</li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: ['推荐排序', '好评优先', '高价优先', '低价优先'],
        classnum: 0
      }
    },
    computed: {},
    components: {},
    created() {
    },

    methods: {
      addClass: function (index) {
        this.classnum = index;
      }
    }
  }
</script>

<style scoped lang="less">

  .list {
    background-color: #fff;
    li {
      width: 100%;
      height: .4rem;
      line-height: .4rem;
      font-weight: 600;
    }
    .active {
      color: #d4172a;
      background: url("./img/icon_5@2x.png") no-repeat 230px 13px;
      background-size: .18rem;
    }
  }
</style>
