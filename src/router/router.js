const routes = [
    {
        path: '/list',
        meta: {
            title: '商品列表',
        },
        component: (resolve) => require (['../page/list.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/list'
    },
    {
        path: '/product/:id',
        meta: {
            title: '商品详情',
        },
        component: (resolve) => require (['../page/product-detail.vue'], resolve)
    },
    {
        path: '/cart',
        meta: {
            title: '购物车'
        },
        component: (resolve) => require (['../page/cart.vue'],resolve)
    }
];
export default routes;