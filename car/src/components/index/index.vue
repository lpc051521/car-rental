<template>
    <div class="index">
      <Head></Head>
      <!-- <Shop></Shop> -->
    </div>
</template>

<script>
  import Head from '../../components/head/head'
  import Shop from "../ch_shop/shop"

  export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {
          Head,Shop
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
