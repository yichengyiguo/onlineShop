<template>
    <div class="cart">
        <table class="cartList">
            <caption>购物车</caption>
            <colgroup>
                <col>
                <col span="4" style="width: 120px">
            </colgroup>
            <thead>
                <tr>
                    <th v-for="item in cartDetail" :key="item"
                        :class="{firstColumn: item ==='商品信息'}">{{item}}</th>
                </tr>
            </thead>
            <tbody v-show="productInCart.length">
                <tr v-for="product in productInCart">
                    <td class="firstColumn">
                        <img :src="product.image" class="image">
                        <span class="name">{{product.name}}</span>
                    </td>
                    <td>￥ {{product.cost}}</td>
                    <td>
                        <span class="addAndReduce" @click="reduceNumber(product)">-</span>
                        {{product.number}}
                        <span class="addAndReduce" @click="addNumber(product)">+</span>
                    </td>
                    <td>￥ {{product.number * product.cost}}</td>
                    <td><span @click="delet(product)" class="delet">删除</span></td>
                </tr>
            </tbody>
        </table>
        <div class="total">
            <div>
                <span>共计 <span class="totalNumber">{{productInCart.length}}</span> 件商品</span>
                <span>应付总额：<span class="totalNumber">￥{{allCost}}</span></span>
                <button class="settlement" @click="settle">现在结算</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                cartDetail: ['商品信息', '单价', '数量', '小计', '删除'],
            }
        },
        computed:{
            productInCart(){
                let products = [];
                let list = this.$store.state.products;
                for(let i = 0; i < list.length; i++){
                    if(list[i].number){
                        products.push(list[i]);
                    }
                }
                return products;
            },
            allCost(){
                let products = this.productInCart;
                let cost = 0;
                for(let i = 0; i < products.length; i++){
                    cost += products[i].number *products[i].cost;
                };
                return cost;
            }
        },
        methods:  {
            reduceNumber(product){
                if(product.number > 1){
                    product.number -= 1;
                }
            },
            addNumber(product){
                product.number += 1;
            },
            delet(product){
                product.number = 0;
            },
            settle(){
                alert('购买成功');
            }
        }
    }
</script>
<style scoped>
    .cart{
        border: 1px solid #999;
        border-radius: 15px;
        margin: 30px;
        padding: 20px 0px;
    }
    .cartList{
        width: 100%;
        border-collapse: collapse;
    }
    caption{
        text-align: left;
        padding: 5px 20px;
    }
    th{
        background-color: #ddd;
        height: 30px;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
    }
    td{
        height: 70px;
        border-bottom: 1px dotted #999;
        text-align: center;
        background-color: white;
    }
    .firstColumn{
        padding-left: 20px;
        text-align:left;
    }
    .image{
        height: 50px;
        width: 50px;
        vertical-align: middle;
    }
    .name{
        line-height:70px;
    }
    .delet{
        color: aqua;
    }
    .addAndReduce{
        display: inline-block;
        line-height:30px;
        width:30px;
        height:30px;
        border-radius:50%;
        background-color: #eee;
        box-shadow: 2px 2px 1px #888888;
    }
    .total{
        background-color: white;
        height: 120px;
        position: relative;
    }
    div.total div{
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    .totalNumber{
        color: red;
        font-size:20px;
    }
    .settlement{
        padding:10px;
        border:0;
        border-radius: 8px;
        background-color: springgreen;
        color:white;
    }
</style>