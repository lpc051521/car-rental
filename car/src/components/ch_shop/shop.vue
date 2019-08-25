<template>
 <div class="shop">
     <Title></Title>
     <User></User>
     <Bottom></Bottom>
 </div>
</template>

<script>
import Title from "./shoptitle"
import User from "./use_"
import Bottom from "./bottom"
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
     Title,User,Bottom
 },
};
</script>

<style scoped lang="less">
.shop{
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
}
</style>
