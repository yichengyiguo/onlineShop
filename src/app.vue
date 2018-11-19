<template>
    <div>
        <div class="main">
            <router-link to="/list"
                class="header">首页</router-link>
            <router-link to="/cart"
                class="cartLink">购物车
                <span class="cartLength" v-if="cartLength">{{cartLength}}</span></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import productData from './product.js';
    export default {
        data(){
            return{
                products: productData,
            }
        },
        computed:{
            cartLength(){
                let products = this.products;
                let cart = 0;
                for(let i = 0; i < products.length; i++){
                    if(products[i].number > 0){
                        cart +=1;
                    }
                };
                return cart;
            }
        }
    }
</script>
<style scoped>
    .main{
        background-color: #222;
        padding: 15px;
    }
    .header{
        display: inline-block;
        text-decoration: none;
        color:white;
    }
    .cartLink{
        float: right;
        text-decoration: none;
        color:white;
    }
    .cartLength{
        display:inline-block;
        border:0;
        border-radius: 50%;
        background-color: red;
        color:white;
        width:20px;
        height:20px;
        text-align:center;
    }
</style>
