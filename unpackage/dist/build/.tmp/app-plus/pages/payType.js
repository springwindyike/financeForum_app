(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/payType"],{"45ee":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(a("a3a0"));function u(e){return e&&e.__esModule?e:{default:e}}var i=getApp(),s={data:function(){return{options:{},userInfo:{},index:"0",payType:"wechat",token:""}},onLoad:function(t){this.token=e.getStorageSync("token"),this.userInfo=i.globalData.userInfo,this.options=t},methods:{radioChange:function(e){n("log",e,"支付类型"," at pages\\payType.vue:85"),this.payType=e.detail.value},wxAppletPay:function(){var t=this;e.showLoading({title:"支付信息加载中...",duration:1e6}),e.request({url:"".concat(o.default.requestUrl,"/buy-vip"),method:"POST",header:{authorization:this.token},data:{member_id:this.options.id,app_type:"miniapp",pay_type:"wechat"},success:function(a){e.hideLoading(),a=o.default.null2str(a),200==a.statusCode?t.runRecharge(a.data):e.showToast({title:a.data.message,icon:"none",duration:2e3})}})},runRecharge:function(t){e.showToast({title:"支付加载中...",icon:"loading",duration:1e6}),e.requestPayment({provider:"wxpay",timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(t){e.hideToast(),t=o.default.null2str(t),e.showToast({title:"支付成功",icon:"success",duration:2e3}),setTimeout((function(t){e.redirectTo({url:"/pages/paySuccess"})}),2e3)},fail:function(t){e.showToast({title:"支付失败",icon:"none",duration:2e3})}})},iAgree:function(t){var a=this;e.request({url:"".concat(o.default.requestUrl,"/buy-vip"),method:"POST",header:{authorization:this.token},data:{member_id:this.options.id,app_type:t,pay_type:this.payType},success:function(e){n("log",e.data,"zhifu"," at pages\\payType.vue:174"),a.appWxpay(e.data)}})},h5Wxpay:function(e){n("log",e,"h5"," at pages\\payType.vue:186")},appWxpay:function(t){n("log",t,"-------------------------------------"," at pages\\payType.vue:191");var a="";a="wechat"==this.payType?"wxpay":"alipay",e.requestPayment({provider:a,orderInfo:t,success:function(t){n("log",t,"chenggong"," at pages\\payType.vue:202"),setTimeout((function(t){e.redirectTo({url:"/pages/paySuccess"})}),2e3)},fail:function(e){n("log",e," at pages\\payType.vue:211")}})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"62f1":function(e,t,a){"use strict";a.r(t);var n=a("ff74"),o=a("7763");for(var u in o)"default"!==u&&function(e){a.d(t,e,(function(){return o[e]}))}(u);a("e83d");var i,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=c.exports},7763:function(e,t,a){"use strict";a.r(t);var n=a("45ee"),o=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=o.a},"8c48":function(e,t,a){"use strict";(function(e){a("b5b4"),a("921b");n(a("66fd"));var t=n(a("62f1"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},bcc2:function(e,t,a){},e83d:function(e,t,a){"use strict";var n=a("bcc2"),o=a.n(n);o.a},ff74:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}))}},[["8c48","common/runtime","common/vendor"]]]);