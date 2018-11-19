<template>
    <div class="list" v-show="list.length">
        <div class="filter">
            <span>颜色:</span>
            <span class="filterAndSort" 
                v-for="item in colors"
                :key="item"
                :class="{on: filterColor.join('').indexOf(item) > -1}"
                @click="filterByColor(item)">{{item}}</span>
        </div>
        <div class="filter">
            <span>品牌:</span>
            <span class="filterAndSort" 
                v-for="item in brands"
                :key="item"
                :class="{on: filterBrand.join('').indexOf(item) > -1}"
                @click="filterByBrand(item)">{{item}}</span>
        </div>
        <div class="sort">
            <span>排序： </span>
            <span class="filterAndSort" @click="sortByDefault" :class="{on: order ===''}">默认</span>
            <span class="filterAndSort" @click="sortBySales" :class="{on: order ==='sales'}">销量
                <template v-if="order === 'sales'">↓</template>
            </span>
            <span class="filterAndSort" @click="sortByCost" :class="{on: order.indexOf('cost') > -1}">价格
                <template v-if="order === 'costDesc'">↓</template>
                <template v-if="order === 'costAsc'">↑</template>
            </span>
        </div>
        <product
            v-for="item in filteredAndSortedList"
            :source="item"
            :key="item.id"></product>
        <div v-show="!filteredAndSortedList.length" class="productNotFound">
            暂无相关商品
        </div>
    </div>
</template>
<script>
    import product from "../components/product.vue";
    export default {
        components: {product},
        data (){
            return {
                order: '',
                filterColor: [],
                filterBrand: [],
            }
        },
        computed: {
            list: function(){
                return this.$store.state.products;
            },
            filteredAndSortedList: function(){
                let list = [...this.list];
                let order = this.order;
                let filterColor = this.filterColor;
                let filterBrand = this.filterBrand;
                if(order !== ''){
                    if( order === 'sales'){
                        list = list.sort( (a,b) => {
                            a = a.sales;
                            b = b.sales;
                            return b - a;
                        });
                    }
                    else if(order === 'costDesc'){
                        list = list.sort( (a,b) => b.cost - a.cost);
                    }
                    else if( order === 'costAsc'){
                        list = list.sort( (a,b) => a.cost - b.cost);
                    }
                };
                if(filterColor.length > 0){
                list = list.filter(function(item){
                    for(var i=0; i < filterColor.length; i++){
                        if(item.color === filterColor[i]){
                            return true;
                        }
                    }
                    return false;
                });
                }
                if(filterBrand.length > 0){
                list = list.filter(function(item){
                    for(var i=0; i < filterBrand.length; i++){
                        if(item.brand === filterBrand[i]){
                            return true;
                        }
                    }
                    return false;
                });
                };
                return list;
            },
            colors(){
                return this.$store.getters.filterColor;
            },
            brands(){
                return this.$store.getters.filterBrand;
            }
        },
        methods: {
            sortByDefault(){
                this.order = '';
            },
            sortBySales(){
                this.order = 'sales';
            },
            sortByCost(){
                if (this.order === 'costDesc'){
                    this.order = 'costAsc';
                }else{
                    this.order = 'costDesc';
                }
            },
            filterByColor(colorCliked){
                for(var i = 0; i < this.filterColor.length; i++){
                    if(this.filterColor[i] === colorCliked){
                        this.filterColor.splice(i, 1);
                        return;
                    }
                }
                this.filterColor.push(colorCliked);
            },
            filterByBrand(brandCliked){
                for(var i = 0; i < this.filterBrand.length; i++){
                    if(this.filterBrand[i] === brandCliked){
                        this.filterBrand.splice(i, 1);
                        return;
                    }
                }
                this.filterBrand.push(brandCliked);
            }
        },
        mounted () {
            this.$store.dispatch('getData');
        }
    }
</script>
<style scoped>
    .list{
        margin: 10px;
    }
    .filterAndSort{
        display: inline-block;
        padding: 3px 7px;
        border: 1px solid rgb(218, 218, 218);
        border-radius: 6px;
        margin:5px;
        background-color: #fff;
    }
    .on{
        background-color: red;
    }
</style>
