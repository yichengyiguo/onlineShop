webpackJsonp([4],{"6fFJ":function(t,e,a){t.exports=a.p+"static/img/4.4547c28.jpeg"},"6oPX":function(t,e,a){t.exports=a.p+"static/img/6.7ba22db.jpeg"},Bf7G:function(t,e,a){t.exports=a.p+"static/img/9.c4aae69.jpeg"},GcMe:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("IHPB"),r=a.n(n),o=a("IvJb"),c=a("zO6J"),i=[{path:"/list",meta:{title:"商品列表"},component:function(t){return a.e(0).then(function(){var e=[a("yEG0")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"*",redirect:"/list"},{path:"/product/:id",meta:{title:"商品详情"},component:function(t){return a.e(2).then(function(){var e=[a("iP07")];t.apply(null,e)}.bind(this)).catch(a.oe)}},{path:"/cart",meta:{title:"购物车"},component:function(t){return a.e(1).then(function(){var e=[a("jqjR")];t.apply(null,e)}.bind(this)).catch(a.oe)}}],s=a("9rMa"),u=a("sTOI"),p={data:function(){return{products:u.a}},computed:{cartLength:function(){for(var t=this.products,e=0,a=0;a<t.length;a++)t[a].number>0&&(e+=1);return e}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main"},[a("router-link",{staticClass:"header",attrs:{to:"/list"}},[t._v("首页")]),t._v(" "),a("router-link",{staticClass:"cartLink",attrs:{to:"/cart"}},[t._v("购物车\n            "),t.cartLength?a("span",{staticClass:"cartLength"},[t._v(t._s(t.cartLength))]):t._e()])],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var d=a("C7Lr")(p,l,!1,function(t){a("qjx8")},"data-v-4d5c204c",null).exports;a("GcMe");o.a.use(c.a),o.a.use(s.a);var f={mode:"history",routes:i},m=new c.a(f);m.beforeEach(function(t,e,a){window.document.title=t.meta.title,a()}),m.afterEach(function(t,e,a){window.scrollTo(0,0)});var g=new s.a.Store({state:{products:[]},getters:{filterColor:function(t){var e=[];return[].concat(r()(t.products)).forEach(function(t){for(var a=0;a<e.length;a++)if(e[a]===t.color)return;e.push(t.color)}),e},filterBrand:function(t){var e=[];return[].concat(r()(t.products)).forEach(function(t){for(var a=0;a<e.length;a++)if(e[a]===t.brand)return;e.push(t.brand)}),e}},mutations:{getData:function(t,e){t.products=e},addToCart:function(t,e){for(var a=0;a<t.products.length;a++)t.products[a].number||o.a.set(t.products[a],"number",0);e.number+=1}},actions:{getData:function(t){setTimeout(function(){t.commit("getData",u.a)},500)}}});new o.a({el:"#app",router:m,store:g,render:function(t){return t(d)}})},Rd4G:function(t,e,a){t.exports=a.p+"static/img/10.487c1cc.jpeg"},"T7v+":function(t,e,a){t.exports=a.p+"static/img/1.37e7246.jpeg"},"aN+Q":function(t,e,a){t.exports=a.p+"static/img/7.fccd53f.jpeg"},c910:function(t,e,a){t.exports=a.p+"static/img/2.c57678e.jpeg"},cMI4:function(t,e,a){t.exports=a.p+"static/img/5.0dc6abc.jpeg"},"qH/K":function(t,e,a){t.exports=a.p+"static/img/3.ec161ea.jpeg"},"qJv+":function(t,e,a){t.exports=a.p+"static/img/8.387a9aa.jpeg"},qjx8:function(t,e){},sTOI:function(t,e,a){"use strict";e.a=[{id:1,brand:"Apple",name:"AirPads",image:a("T7v+"),sales:13e3,cost:1188,color:"白色"},{id:2,brand:"Beats",name:"BeatsX 入耳式耳机",image:a("c910"),sales:15e3,cost:1288,color:"白色"},{id:3,brand:"Beats",name:"Beats Wreffgfd 头戴式耳机",image:a("qH/K"),sales:1e4,cost:1138,color:"金色"},{id:4,brand:"Apple",name:"AirPads",image:a("6fFJ"),sales:21e3,cost:2188,color:"红色"},{id:5,brand:"Sonos",name:"Sonos Play:1 便携式扬声机",image:a("cMI4"),sales:7700,cost:1188,color:"白色"},{id:6,brand:"Beats",name:"Powerbeats3  by  Dr.Dre Wireless 入耳式耳机",image:a("6oPX"),sales:19e3,cost:1188,color:"黑色"},{id:7,brand:"Apple",name:"AirPads",image:a("aN+Q"),sales:9e3,cost:1188,color:"蓝色"},{id:8,brand:"B&O",name:"B&O 蓝牙耳机",image:a("qJv+"),sales:9080,cost:1188,color:"金色"},{id:9,brand:"Bose",name:"Bose 无线耳机",image:a("Bf7G"),sales:23e3,cost:1188,color:"蓝色"},{id:10,brand:"Apple",name:"AirPads",image:a("Rd4G"),sales:2e3,cost:1188,color:"灰色"}]}},["NHnr"]);
//# sourceMappingURL=app.af588d5027f7bce49941.js.map