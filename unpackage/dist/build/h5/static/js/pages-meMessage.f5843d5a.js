(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meMessage"],{1255:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".meMessage[data-v-794ac600]{width:%?690?%;padding:0 %?30?%}.meMessage .item[data-v-794ac600]{border:%?1?% solid #f8f8f8;border-radius:%?10?%;padding:%?30?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.meMessage .item>uni-view[data-v-794ac600]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.meMessage .item>uni-view>uni-text[data-v-794ac600]{color:#333;font-size:%?34?%;font-weight:600;margin-left:%?20?%}.meMessage .item .iconfont[data-v-794ac600]{width:%?96?%;height:%?96?%;border-radius:%?96?%;font-size:%?60?%;font-weight:600;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.iconat[data-v-794ac600]{color:#f46b6b}.iconxiaoxi1[data-v-794ac600]{color:#f4c26c}.iconxitongpeizhi[data-v-794ac600]{color:#6cd3f4}",""])},2959:function(t,e,i){"use strict";var a=i("e23c"),n=i.n(a);n.a},"4afe":function(t,e,i){"use strict";i.r(e);var a=i("831e"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"615a":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"meMessage"},[t._l(t.list,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"item",attrs:{"data-title":e.title,"data-type":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMessageDetails.apply(void 0,arguments)}}},[i("v-uni-view",[i("uni-icons",{staticClass:"iconfont",class:e.img,attrs:{type:""}}),i("v-uni-text",[t._v(t._s(e.title))])],1),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)]})],2)},s=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return a})},"831e":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(i("a3a0")),getApp();var n={data:function(){return{list:[{id:"1",img:"iconat",title:"提到我的"},{id:"2",img:"iconxiaoxi1",title:"评论"},{id:"3",img:"iconxitongpeizhi",title:"系统消息"}]}},methods:{goMessageDetails:function(t){console.log(t);var e=t.currentTarget.dataset.type,i=t.currentTarget.dataset.title;uni.navigateTo({url:"/pages/meApplyMessage?type=".concat(e,"&title=").concat(i)})}}};e.default=n},e23c:function(t,e,i){var a=i("1255");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("726cc105",a,!0,{sourceMap:!1,shadowMode:!1})},f2d7:function(t,e,i){"use strict";i.r(e);var a=i("615a"),n=i("4afe");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("2959");var c,o=i("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"794ac600",null,!1,a["a"],c);e["default"]=r.exports}}]);