(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meFollow"],{"10a3":function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");n(a("66fd"));var e=n(a("4f15"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"3abf":function(t,e,a){"use strict";var n=a("e204"),o=a.n(n);o.a},"4f15":function(t,e,a){"use strict";a.r(e);var n=a("9a65"),o=a("ad27");for(var u in o)"default"!==u&&function(t){a.d(e,t,function(){return o[t]})}(u);a("3abf");var l=a("2877"),s=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"9a65":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},ad27:function(t,e,a){"use strict";a.r(e);var n=a("bcad"),o=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=o.a},bcad:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),l={data:function(){return{list:[]}},onLoad:function(){this.getList()},methods:{getList:function(){var e=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(n.default.requestUrl,"/user/follows"),method:"GET",header:{authorization:u.globalData.token},success:function(a){t.hideLoading(),a=n.default.null2str(a),console.log(a),"1"==a.data.status_code?e.list=a.data.data:t.showToast({title:a.data.message,icon:"none"})}})},delFollows:function(e){var a=this,o=e.currentTarget.dataset.id,l=e.currentTarget.dataset.index;t.showLoading({title:"执行中...",duration:1e6}),t.request({url:"".concat(n.default.requestUrl,"/user/del_follow"),method:"POST",header:{authorization:u.globalData.token},data:{follow_id:o},success:function(e){t.hideLoading(),e=n.default.null2str(e),console.log(e),"1"==e.data.status_code?(a.list.splice(l,1),t.showToast({title:e.data.message})):t.showToast({title:e.data.message,icon:"none"})}})}}};e.default=l}).call(this,a("543d")["default"])},e204:function(t,e,a){}},[["10a3","common/runtime","common/vendor"]]]);