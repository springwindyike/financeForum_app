(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me"],{"50eb":function(e,t,a){"use strict";a.r(t);var n=a("f3b0"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"6ca6":function(e,t,a){},ce7d:function(e,t,a){"use strict";var n=a("6ca6"),o=a.n(n);o.a},f3ae:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return n})},f3b0:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("a3a0"));function o(e){return e&&e.__esModule?e:{default:e}}var r=getApp(),u={data:function(){return{userInfo:{},imgUrl:"",imageUrl:""}},onLoad:function(){this.imgUrl=n.default.imgUrl},onShow:function(){this.getUserInfo()},methods:{goPageNavigateTo:function(t){console.log(t);var a=t.currentTarget.dataset.name;"meNewbieRead"==a?e.navigateTo({url:"/pages/articleDetail?id=".concat(21)}):"meReserve"==a?e.navigateTo({url:"/pages/indexAccurate?id=".concat(9,"&name=","备用金打造")}):"meAllProduct"==a?e.navigateTo({url:"/pages/indexAccurate?id=".concat(11,"&name=","各省产品汇总")}):"rejection"==a?e.navigateTo({url:"/pages/indexAccurate?id=".concat(8,"&name=","拒贷汇总")}):"risk"==a?e.navigateTo({url:"/pages/indexAccurate?id=".concat(8,"&name=","风险把控")}):"loan"==a?e.navigateTo({url:"/pages/indexAccurate?id=".concat(8,"&name=","贷款流程")}):"meSpread"==a?(console.log(a),console.log(this.userInfo.type),"normal"==this.userInfo.type?(e.showToast({title:"您不是会员，暂无此权限",icon:"none",duration:1e3}),setTimeout(function(t){e.navigateTo({url:"/pages/meVIP"})},1600)):e.navigateTo({url:"/pages/meSpread"})):e.navigateTo({url:"/pages/".concat(a)})},getUserInfo:function(){var t=this;e.showLoading({title:"用户信息获取中..."}),e.request({url:"".concat(n.default.requestUrl,"/me"),method:"POST",header:{authorization:r.globalData.token},success:function(a){e.hideLoading(),a=n.default.null2str(a),200==a.statusCode&&(t.userInfo=a.data,t.imageUrl=t.imgUrl+t.userInfo.avatar)}})}}};t.default=u}).call(this,a("543d")["default"])},f405:function(e,t,a){"use strict";a.r(t);var n=a("f3ae"),o=a("50eb");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("ce7d");var u,i=a("f0c5"),c=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},f4f5:function(e,t,a){"use strict";(function(e){a("b5b4"),a("921b");n(a("66fd"));var t=n(a("f405"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])}},[["f4f5","common/runtime","common/vendor"]]]);