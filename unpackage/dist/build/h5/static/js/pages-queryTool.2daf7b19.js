(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-queryTool"],{"113a":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("a3a0")),o=getApp(),l={data:function(){return{collectionList:[],imgUrl:""}},onLoad:function(){this.getList(),this.imgUrl=n.default.imgUrl},methods:{getList:function(){var t=this;uni.request({url:"".concat(n.default.requestUrl,"/system-tools/query-tools"),method:"GET",success:function(e){e=n.default.null2str(e),console.log(e),200==e.data.status_code&&(t.collectionList=e.data.data,console.log(t.collectionList,"+++++++++"))}})},getData:function(t){console.log(t);var e=t.currentTarget.dataset.type,a=t.currentTarget.dataset.link,i=t.currentTarget.dataset.id,n=t.currentTarget.dataset.name;console.log(e,a,i,n),"block"==e?""!=a?uni.navigateTo({url:"/pages/".concat(a)}):uni.showToast({title:"此页面不存在"}):"series"==e||("post"==e?uni.navigateTo({url:"/pages/articleDetail?id=".concat(i)}):"child"==e?(console.log(i),uni.navigateTo({url:"/pages/applyShow?id=".concat(i,"&name=").concat(n)})):"ex_link"==e?""==a?uni.showToast({title:"此页面不存在",icon:"none"}):(o.globalData.link=a,uni.navigateTo({url:"/pages/iframe?name=".concat(n)})):"category"==e&&uni.navigateTo({url:"/pages/applyShow?id=".concat(i)}))}}};e.default=l},"6baa":function(t,e,a){"use strict";var i=a("be47"),n=a.n(i);n.a},"9df4":function(t,e,a){"use strict";a.r(e);var i=a("113a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"9ffa":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".queryTool[data-v-6915db05]{width:%?690?%;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.collection[data-v-6915db05]{width:%?690?%;padding:%?30?% 0 0}.collection .title[data-v-6915db05]{color:#333;font-size:%?32?%;font-weight:600}.headList[data-v-6915db05]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;\r\n\t/* justify-content: center; */margin-right:%?20?%}.headList .head>uni-text[data-v-6915db05]{font-size:%?28?%;font-weight:600;color:#333;margin-top:%?6?%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.head[data-v-6915db05]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.head uni-image[data-v-6915db05]{width:%?96?%;height:%?96?%;border-radius:%?50?%;margin:0}.collectionList[data-v-6915db05]{margin:%?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap}.collectionList .item[data-v-6915db05]{\r\n\t/* margin-right: ; */width:%?131?%;margin:0 %?8?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.collectionList .item[data-v-6915db05]:nth-child(5n){margin-right:0}.collectionList .item uni-image[data-v-6915db05]{width:%?96?%;height:%?96?%;border-radius:%?50?%;display:block}.collectionList .item uni-text[data-v-6915db05]{display:block;font-size:%?28?%;color:#333;font-weight:600;margin-top:%?16?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.line[data-v-6915db05]{width:%?750?%;background:#f9f9f9;height:%?6?%}",""])},b542:function(t,e,a){"use strict";a.r(e);var i=a("ea0d"),n=a("9df4");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("6baa");var l,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6915db05",null,!1,i["a"],l);e["default"]=c.exports},be47:function(t,e,a){var i=a("9ffa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6ca4c70d",i,!0,{sourceMap:!1,shadowMode:!1})},ea0d:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"queryTool"},[t._l(t.collectionList.children,function(e,i){return["category"!=e.type?a("v-uni-view",{key:i+"_0",staticClass:"headList",attrs:{"data-id":e.id,"data-name":e.title,"data-type":e.type,"data-link":e.extra},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"head"},[a("v-uni-image",{attrs:{src:t.imgUrl+e.icon,mode:""}}),a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))])],1)],1):t._e(),"category"==e.type?a("v-uni-view",{key:i+"_1",staticClass:"collection"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"collectionList"},[t._l(e.children,function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item",attrs:{"data-id":e.id,"data-type":e.type,"data-name":e.title,"data-link":e.extra},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:t.imgUrl+e.icon,mode:""}}),a("v-uni-text",[t._v(t._s(e.title))])],1)]})],2)],1):t._e()]})],2)},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})}}]);