<template>
    <div class="index">
      <Index_Content></Index_Content>
    </div>
</template>

<script>

  import Index_Content from '../../components/index/index-content/index-content'
  import Shop from "../ch_shop/shop"

  export default {
        data() {
            return {msg: 'hello'}
        },
        computed: {},
        components: {
         Index_Content,Shop

        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>
