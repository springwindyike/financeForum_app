(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/productDetail"],{"0547":function(t,n,e){},"68ae":function(t,n,e){"use strict";var a=e("0547"),o=e.n(a);o.a},"68fd":function(t,n,e){"use strict";e.r(n);var a=e("6bfc"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},"691b":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return a})},"6bfc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),c={data:function(){return{productId:"",listInfo:[],imgUrl:""}},onLoad:function(t){this.productId=t.id,this.imgUrl=a.default.imgUrl,this.getInfo()},methods:{MP_WEIXIN_apply:function(n){t.showToast({title:"该小程序不支持，请下载APP",icon:"none"})},APP_PLUS_apply:function(n){console.log("APP-PLUS");var e=n.currentTarget.dataset.link,a=n.currentTarget.dataset.name;console.log(e),console.log(a),""==e&&t.showToast({title:"该模块正在维修站",icon:"none"}),t.navigateTo({url:"/pages/iframe?name=".concat(a)}),u.globalData.link=e},getInfo:function(){var n=this;t.request({url:"".concat(a.default.requestUrl,"/holes/detial"),method:"GET",header:{authorization:u.globalData.token},data:{hole_id:this.productId},success:function(e){e=a.default.null2str(e),console.log(e),200==e.data.status_code?n.listInfo=e.data.data:t.showToast({title:e.data.message,icon:"none"})}})}}};n.default=c}).call(this,e("543d")["default"])},c4ff:function(t,n,e){"use strict";(function(t){e("b5b4"),e("921b");a(e("66fd"));var n=a(e("deed"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},deed:function(t,n,e){"use strict";e.r(n);var a=e("691b"),o=e("68fd");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("68ae");var c,r=e("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=l.exports}},[["c4ff","common/runtime","common/vendor"]]]);