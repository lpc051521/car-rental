<template>
    <div class="index">
      <Head></Head>
      <Par></Par>

      <Index_Content></Index_Content>
    </div>
</template>

<script>

  import Index_Content from '../../components/index/index-content/index-content'
  import Shop from "../ch_shop/shop"

  //车辆详情页
  import Par from '../../components/particulars/cgy-particulars'

  export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {
          Head,
          Par
         Index_Content,Shop

        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
