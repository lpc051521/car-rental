<template>
    <div class="index">
      <Head></Head>
      <Par></Par>
    </div>
</template>

<script>
  import Head from '../../components/head/head'

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
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
