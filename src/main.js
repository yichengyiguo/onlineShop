import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './router/router'
import Vuex from 'vuex'
import App from './app.vue'
import productData from './product.js'
import './style.css'

Vue.use(VueRouter)
Vue.use(Vuex)

const routerconfig = {
    mode: 'history',
    routes: Routers,
}
const router = new VueRouter(routerconfig);
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})
const store= new Vuex.Store({
    state:  {
        products: [],
    },
    getters:  {
        filterColor(state){
            let list = [...state.products];
            let colors = [];
            list.forEach(function(item){
                for(var i = 0; i < colors.length; i++){
                    if(colors[i] === item.color){
                        return;
                    }
                }
                colors.push(item.color);
            })
            return colors;
        },
        filterBrand(state){
            let list = [...state.products];
            let brands = [];
            list.forEach(function(item){
                for(var i = 0; i < brands.length; i++){
                    if(brands[i] === item.brand){
                        return;
                    }
                }
                brands.push(item.brand);
            })
            return brands;
        },
    },
    mutations:  {
        getData (state, data){
            state.products = data;
        },
        addToCart(state, product){
            for(let i = 0; i < state.products.length; i++){
                if(!state.products[i].number){
                Vue.set(state.products[i], 'number', 0);
                }
            }
            product.number += 1;
        }
    },
    actions:  {
        getData(context){
            setTimeout(() => {
                context.commit('getData', productData);
            },500);
        }
    }
})
new Vue({
    el: '#app',
    router,
    store,
    render: function(h){
        return h(App);
    }
})