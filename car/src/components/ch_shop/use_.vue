<template>
  <div class="use">
    <ul class="one_ul">
      <li>
        <h3>用户评论(13)</h3>
      </li>
      <li class="img">
        <img src="./img/icon-1.png" alt />
      </li>
      <li class="name">
        <p>匿名用户</p>
        <p class="color">2019.08.20</p>
      </li>
      <li class="start">
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
      </li>
      <li class="pingjia">
        <p>用车体验很棒，服务也很贴心，下次还会用的！</p>
      </li>
    </ul>

    <ul>
      <!-- <li><h3>用户评论(13)</h3></li> -->
      <li class="img">
        <img src="./img/icon-1.png" alt />
      </li>
      <li class="name">
        <p>匿名用户</p>
        <p class="color">2019.08.20</p>
      </li>
      <li class="start">
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
      </li>
      <li class="pingjia">
        <p>车很干净，老板也很好说话，价格也很便宜。</p>
      </li>
    </ul>

    <ul>
      <!-- <li><h3>用户评论(13)</h3></li> -->
      <li class="img">
        <img src="./img/icon-1.png" alt />
      </li>
      <li class="name">
        <p>匿名用户</p>
        <p class="color">2019.08.20</p>
      </li>
      <li class="start">
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
      </li>
      <li class="pingjia">
        <p>用户未及时评价，系统默认好评！</p>
      </li>
    </ul>

    <ul class="down">
      <!-- <li><h3>用户评论(13)</h3></li> -->
      <li class="img">
        <img src="./img/icon-1.png" alt />
      </li>
      <li class="name">
        <p>匿名用户</p>
        <p class="color">2019.08.20</p>
      </li>
      <li class="start">
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
        <span>
          <img src="./img/icon3@2x.png" alt />
        </span>
      </li>
      <li class="pingjia">
        <p>用户未及时评价，系统默认好评！</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.use {
  width: 100%;
  overflow: hidden;
  ul {
    width: 3.45rem;
    background-color: #fff;
    margin-left: 0.15rem;
    height: 0.9rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    li {
      overflow: hidden;
    }
    .img {
      width: 0.33rem;
      height: 0.33rem;
      float: left;
      background-color: #f6f6f6;
      border-radius: 50%;
      margin-left: 0.1rem;
      margin-top: 0.15rem;
      img {
        width: 0.27rem;
        height: 0.16rem;
        margin-top: 0.08rem;
        margin-left: 0.03rem;
      }
    }
    .name {
      font-size: 0.12rem;
      margin-left: 0.1rem;
      margin-top: 0.15rem;
      float: left;
      p {
        text-align: left;
      }
      .color {
        color: rgb(153, 153, 153);
        margin-top: 0.02rem;
      }
    }
    .start {
      margin-top: 0.15rem;
      margin-left: 0.02rem;
      img {
        width: 0.16rem;
        height: 0.16rem;
        float: left;
        margin-left: 0.05rem;
      }
    }
    .pingjia {
      font-size: 0.12rem;
      margin-top: 0.25rem;
      margin-left: 0.1rem;
      text-align: left;
    }
  }

  .one_ul {
    height: 1.15rem;
    border-radius: 0.07rem 0.07rem 0 0;
    h3 {
      font-size: 0.16rem;
      text-align: left;
      margin-top: 0.1rem;
      margin-left: 0.1rem;
    }
  }
  .down{
      border-radius: 0 0 0.07rem 0.07rem;
      border: none
  }
}
</style>
