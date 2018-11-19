<template>
    <div class="productContainer">
        <router-link :to="'/product/' + source.id" class="product">
            <img :src="source.image" alt="宝贝图片">
            <h4 class="productName">{{source.name}}</h4>
            <div class="productMark" :style="{background: colors[source.color]}"></div>
            <div class="productCost">￥ {{source.cost}}</div>
            <div class="addToCart" @click.prevent="addToCart(source)">加入购物车</div>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: {
            source: Object,
        },
        methods: {
            addToCart: function(product){
                this.$store.commit('addToCart', product);
            }
        },
        data: function(){
            return {
                colors: {
                    '白色': '#FFF',
                    '金色': '#DAC272',
                    '蓝色': '#233472',
                    '红色': '#F2352E',
                    '灰色': '#928989',
                    '黑色': '#000',
                }
            }
        }
    }
</script>
<style scoped>
    .productContainer{
        width: 25%;
        float: left;
        text-align: center;
    }
    .product{
        background-color: white;
        margin: 8px;
        padding:10px;
        display: block;
        text-decoration: none;
        border-radius: 20px;
        border: 1px solid rgb(211, 199, 199);
        overflow: hidden;
        position:relative;
    }
    .productMark{
        margin: auto;
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #b3afaf;
    }
    img{
        width:100%;
    }
    .productCost{
        color: red;
        margin: 5px;
    }
    h4{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color:black;
    }
    .addToCart{
        display: none;
        background-color: rgb(75, 75, 241);
        position:absolute;
        right: 10px;
        top: 10px;
        border:0;
        border-radius: 6px;
        color:white;
        padding:5px;
        font-size: 8px;

    }
    .product:hover .addToCart{
        display: inline-block;
    }
    @media only screen and (max-width:600px){
        .productContainer{
            width: 50%;
        }
    }
    @media only screen and (max-width:350px){
        .productContainer{
            width: 100%;
        }
    }
</style>
