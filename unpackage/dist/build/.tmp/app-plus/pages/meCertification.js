(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meCertification"],{"0119":function(t,e,n){"use strict";var u=n("9d4d"),o=n.n(u);o.a},"50bb":function(t,e,n){"use strict";n.r(e);var u=n("bf9c"),o=n("be51");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0119");var r,i=n("f0c5"),f=Object(i["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=f.exports},"536f":function(t,e,n){"use strict";(function(t){n("b5b4"),n("921b");u(n("66fd"));var e=u(n("50bb"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"918b":function(t,e,n){"use strict";(function(t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a3a0"));function a(t){return t&&t.__esModule?t:{default:t}}getApp();var r={data:function(){return{userInfo:{},token:""}},onLoad:function(){this.token=t.getStorageSync("token"),this.getInfo()},methods:{go:function(){t.navigateTo({url:"/pages/meCertificationConfirm"})},getInfo:function(){var e=this;t.request({url:"".concat(o.default.requestUrl,"/me"),method:"POST",header:{authorization:this.token},success:function(n){t.hideLoading(),n=o.default.null2str(n),200==n.statusCode&&(e.userInfo=n.data.is_real,u("log",e.userInfo," at pages\\meCertification.vue:51"))}})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"9d4d":function(t,e,n){},be51:function(t,e,n){"use strict";n.r(e);var u=n("918b"),o=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=o.a},bf9c:function(t,e,n){"use strict";var u,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}))}},[["536f","common/runtime","common/vendor"]]]);