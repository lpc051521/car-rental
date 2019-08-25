<template>
    <div class="index">
      <Head>
        <img src="./../head/img/icon3@2x.png" alt="" class="search_icon">
        <div class="title">
          <img src="./../head/img/icon1@2x.png" alt="">
          <div class="search">
            <input type="text" placeholder="查找车型/店面">
          </div>
          <img src="./../head/img/icon2@2x.png" alt="">
        </div>
      </Head>
      <Index_Content></Index_Content>
    </div>
</template>

<script>
  import Head from '../../components/head/head'
  import Index_Content from '../../components/index/index-content/index-content'

  export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {
          Head,Index_Content
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
