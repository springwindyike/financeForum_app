(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/payType"],{"075f":function(t,e,n){},"45ee":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}var i=getApp(),u={data:function(){return{options:{},userInfo:{},index:"0",payType:"wechat"}},onLoad:function(t){this.userInfo=i.globalData.userInfo,this.options=t},methods:{radioChange:function(t){console.log(t),this.payType=t.detail.value},wxAppletPay:function(){var e=this;t.showLoading({title:"支付信息加载中...",duration:1e6}),t.request({url:"".concat(a.default.requestUrl,"/bay-vip"),method:"POST",header:{authorization:i.globalData.token},data:{member_id:this.options.id,app_type:"miniapp",pay_type:"wechat"},success:function(n){t.hideLoading(),n=a.default.null2str(n),200==n.statusCode?e.runRecharge(n.data):t.showToast({title:n.data.message,icon:"none",duration:2e3})}})},runRecharge:function(e){t.showToast({title:"支付加载中...",icon:"loading",duration:1e6}),t.requestPayment({provider:"wxpay",timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign,success:function(e){t.hideToast(),e=a.default.null2str(e),t.showToast({title:"支付成功",icon:"success",duration:2e3}),setTimeout(function(e){t.reLaunch({url:"/pages/paySuccess"})},2e3)},fail:function(e){t.showToast({title:"支付失败",icon:"none",duration:2e3})}})},iAgree:function(){var e=this;console.log(this.payType),t.request({url:"".concat(a.default.requestUrl,"/bay-vip"),method:"POST",header:{authorization:i.globalData.token},data:{member_id:this.options.id,app_type:"app",pay_type:this.payType},success:function(t){console.log(t),console.log(t.data),e.appWxpay(t.data)}})},appWxpay:function(e){t.requestPayment({provider:"wxpay",orderInfo:e,success:function(e){t.showToast({title:"支付成功",icon:"success",duration:2e3}),setTimeout(function(e){t.reLaunch({url:"/pages/paySuccess"})},2e3),console.log(e),console.log("success:"+JSON.stringify(e))},fail:function(e){t.showToast({title:JSON.stringify(e),icon:"none",duration:2e3})}})}}};e.default=u}).call(this,n("543d")["default"])},5664:function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"62f1":function(t,e,n){"use strict";n.r(e);var a=n("5664"),o=n("7763");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("e83d");var u,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},7763:function(t,e,n){"use strict";n.r(e);var a=n("45ee"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"8c48":function(t,e,n){"use strict";(function(t){n("b5b4"),n("921b");a(n("66fd"));var e=a(n("62f1"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e83d:function(t,e,n){"use strict";var a=n("075f"),o=n.n(a);o.a}},[["8c48","common/runtime","common/vendor"]]]);