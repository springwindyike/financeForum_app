(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meCertification"],{"50bb":function(t,n,e){"use strict";e.r(n);var i=e("9da7"),a=e("be51");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("ff0e");var u,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"251cc7b2",null,!1,i["a"],u);n["default"]=r.exports},8200:function(t,n,e){var i=e("a752");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("a7cd343a",i,!0,{sourceMap:!1,shadowMode:!1})},9444:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("a3a0")),o=getApp(),u={data:function(){return{userInfo:{}}},onLoad:function(){this.getInfo()},methods:{go:function(){uni.navigateTo({url:"/pages/meCertificationConfirm"})},getInfo:function(){var t=this;uni.request({url:"".concat(a.default.requestUrl,"/me"),method:"POST",header:{authorization:o.globalData.token},success:function(n){uni.hideLoading(),n=a.default.null2str(n),200==n.statusCode&&(t.userInfo=n.data.is_real,console.log(t.userInfo))}})}}};n.default=u},"9da7":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"item"},[e("v-uni-view",[t._v("实名认证")]),"0"==t.userInfo?e("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go.apply(void 0,arguments)}}},[t._v("未认证"),e("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1):t._e(),"1"==t.userInfo?e("v-uni-view",[t._v("已认证"),e("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1):t._e()],1)],1)],1)},o=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}))},a752:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,".list[data-v-251cc7b2]{width:%?750?%;height:auto;border-top:%?2?% solid #f3f3f3}.item[data-v-251cc7b2]{width:%?690?%;height:%?90?%;margin:0 %?30?%;border-bottom:%?2?% solid #fbfbfc;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#333;font-size:%?28?%}.iconfont[data-v-251cc7b2]{margin-left:%?10?%}",""]),t.exports=n},be51:function(t,n,e){"use strict";e.r(n);var i=e("9444"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},ff0e:function(t,n,e){"use strict";var i=e("8200"),a=e.n(i);a.a}}]);