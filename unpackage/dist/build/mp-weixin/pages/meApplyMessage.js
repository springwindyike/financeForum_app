(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meApplyMessage"],{"0655":function(t,e,n){"use strict";var a=n("ac00"),u=n.n(a);u.a},3877:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},7641:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("4e16"));function u(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),i={data:function(){return{list:[],type:"",imgUrl:""}},onLoad:function(e){console.log(e),t.setNavigationBarTitle({title:e.title}),this.type=e.type,this.getList(),this.imgUrl=a.default.imgUrl},methods:{getList:function(){var e=this,n="";"1"==this.type?n="abouts":"2"==this.type?n="comments":"3"==this.type&&(n="news-list"),t.request({url:"".concat(a.default.requestUrl,"/user/").concat(n),method:"GET",header:{authorization:o.globalData.token},success:function(t){t=a.default.null2str(t),console.log(t),200==t.data.status_code&&(e.list=t.data.data)}})}}};e.default=i}).call(this,n("543d")["default"])},"8ec8":function(t,e,n){"use strict";n.r(e);var a=n("7641"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},ac00:function(t,e,n){},bb41:function(t,e,n){"use strict";(function(t){n("99a1"),n("921b");a(n("66fd"));var e=a(n("d7b7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},d7b7:function(t,e,n){"use strict";n.r(e);var a=n("3877"),u=n("8ec8");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("0655");var i=n("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports}},[["bb41","common/runtime","common/vendor"]]]);