<template>
    <div class="productDetail">
        <img :src="product.image" class="image">
        <div class="introduce">
            <h1>{{product.name}}</h1>
            <div>￥{{product.cost}}</div>
            <button class="addToCart" @click="addToCart(product)">加入购物车</button>
        </div>
    </div>
</template>
<script>
    import productData from "../product.js";
    export default {
        data(){
            return {
                id: parseInt(this.$route.params.id),
                product: {},
            }
        },
        computed: {
            image(){
                return this.product.image;
            }
        },
        methods: {
            getProduct(){
                setTimeout(() => {
                    this.product = productData.find(item => item.id ===this.id);
                },500)
            },
            addToCart(product){
                this.$store.commit('addToCart', product);
            }
        },
        mounted(){
            this.getProduct();
        }
    }
</script>
<style scoped>
    .productDetail{
        background-color:white;
        border:1px solid #aaa;
        border-radius: 10px;
        margin:20px;
        padding:20px;
        white-space:nowrap;
    }
    .image{
        width:45%;
        vertical-align: middle;
    }
    .introduce{
        display: inline-block;
        width:55%;
        text-align: center;
    }
    h1{
        white-space: normal;
    }
    .introduce div{
        color:red;
        font-size:20px;
        margin-bottom: 30px;
    }
    .addToCart{
        padding:10px 30px;
        background-color:rgb(39, 39, 235);
        border-radius: 5px;
        border:0;
        color:white;
    }
</style>
