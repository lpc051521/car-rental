<template>
 <div class="hot">
     <p>热门城市</p>
     <ul class="list">
         <li>北京</li>
         <li>上海</li>
         <li>广州</li>
         <li>深圳</li>
     </ul>
     <ul class="ma list">
         <li>西宁</li>
         <li>海南</li>
         <li>通海</li>
         <li>郑州</li>
     </ul>
     <ul class="ma list">
         <li>南京</li>
         <li>西宁</li>
         <li>呼市</li>
         <li>济南</li>
     </ul>
     <ul class="ma list">
         <li>武汉</li>
         <li>海口</li>
         <li>三亚</li>
         <li>杭州</li>
     </ul>
<div class="gun">
    <ul class="lists">
         <li><p>A</p></li>
         <li><p>安龙黔南</p></li>
         <li><p>安陆孝感</p></li>
         <li><p>安宁昆明</p></li>
         <li><p>安平衡水</p></li>
         <li><p>安庆</p></li>
         <li><p>安丘</p></li>
     </ul>
</div>
     

     <ul class="left">
         <li>历</li>
         <li>热</li>
         <li>A</li>
         <li>B</li>
         <li>C</li>
         <li>D</li>
         <li>E</li>
         <li>F</li>
         <li>G</li>
         <li>H</li>
         <li>I</li>
         <li>J</li>
         <li>K</li>
         <li>L</li>
         <li>M</li>
         <li>N</li>
         <li>O</li>
         <li>P</li>
         <li>Q</li>
         <li>R</li>
         <li>S</li>
         <li>T</li>
         <li>U</li>
         <li>V</li>
         <li>W</li>
         <li>X</li>
         <li>Y</li>
         <li>Z</li>
     </ul>
 </div>
</template>

<script>
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

 },
};
</script>

<style scoped lang="less">
.hot{
    width: 3.45rem;
    background-color: #fff;
    margin-top: 0.1rem;
    overflow: hidden;
    margin-left: 0.15rem;
    border-radius: .1rem;
    p{
        font-size: 0.14rem;
        color: #333333;
        margin: 0.1rem;
        text-align: left;
    }
    .list{
        margin-left: 0.07rem;
        overflow: hidden;
        li{
            float: left;
            font-size: 0.13rem;
            color: #333333;
            text-align: center;
            border-radius: 0.05rem;
            margin-left: 0.05rem;
            width: 0.75rem;
            height: 0.25rem;
            line-height: 0.25rem;
            border: 1px solid #999999;
        }
    }
    .ma{
        margin-top: 0.2rem;
    }
    .lists{
        width: 100%;
        li{
            font-size: 0.13rem;
            color: #333333;
            text-align: left;
            height: 0.45rem;
            line-height: 0.45rem;
            border-bottom: 1px solid #f1f1f1;
        }
    }
    .left{
        position: absolute;
        right: 0;
        top: 0.5rem;
        // z-index: 999;
        li{
            font-size: 0.12rem;
            color: #999999;
            margin-top: 0.06rem;
        }
    }
    .gun{
        overflow: auto;
        height: 2.99rem;
    }
}
</style>
