(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meSetting"],{"16d3":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("ac6a");var o=e(i("a3a0")),a=getApp(),c={data:function(){return{num:"",version:""}},onLoad:function(){var t=uni.getStorageSync("login_name");console.log(t);uni.getStorageSync("login_pwd")},onShow:function(){var t=this;uni.getStorageInfo({success:function(n){console.log(n.keys),console.log(n.currentSize,"999");var i=n.currentSize;console.log(i),t.num=i,console.log(n.limitSize)}})},methods:{modifyPassword:function(){uni.navigateTo({url:"/pages/forgetPassword"})},delCaching:function(){var t=this;uni.showModal({title:"提示",content:"确认删除缓存",success:function(n){n.confirm?(uni.showToast({title:"清除中...",icon:"loading",duration:3e3}),setTimeout(function(t){uni.showToast({title:"清除完成",icon:"success",duration:2e3})},3e3),uni.clearStorageSync(),setTimeout(function(n){t.num="0"},3e3)):n.cancel}})},outLogin:function(){var t=this;uni.showModal({title:"提示",content:"是否退出系统",success:function(n){n.confirm?t.runOutLogin():n.cancel}})},runOutLogin:function(){uni.showLoading({title:"退出系统...",duration:1e6}),uni.request({url:"".concat(o.default.requestUrl,"/logout"),method:"POST",header:{authorization:a.globalData.token},success:function(t){uni.hideLoading(),t=o.default.null2str(t),1==t.data.state_code?uni.reLaunch({url:"/pages/login"}):uni.showToast({title:t.data.message})}})}}};n.default=c},"1f1b":function(t,n,i){"use strict";var e=i("b20f"),o=i.n(e);o.a},"498d":function(t,n,i){"use strict";i.r(n);var e=i("16d3"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},"8d6c":function(t,n,i){"use strict";i.r(n);var e=i("9116"),o=i("498d");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("1f1b");var c,u=i("f0c5"),s=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"2914262a",null,!1,e["a"],c);n["default"]=s.exports},9116:function(t,n,i){"use strict";var e,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"meSetting"},[i("v-uni-view",{staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.modifyPassword.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",[t._v("修改密码")])],1),i("v-uni-view",[i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.delCaching.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",[t._v("清除缓存")])],1),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.num)+"M")]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"login",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.outLogin.apply(void 0,arguments)}}},[i("v-uni-view",[t._v("退出登录")])],1)],1)},a=[];i.d(n,"b",function(){return o}),i.d(n,"c",function(){return a}),i.d(n,"a",function(){return e})},b20f:function(t,n,i){var e=i("f8fc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("31beccc0",e,!0,{sourceMap:!1,shadowMode:!1})},f8fc:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,".login[data-v-2914262a]{margin-top:%?200?%;width:%?750?%;height:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.login uni-view[data-v-2914262a]{width:%?630?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?10?%;font-size:%?32?%;color:#fff;background-color:#2390dc;box-shadow:0 %?10?% %?45?% 0 rgba(35,144,220,.6)}.item[data-v-2914262a]{width:%?690?%;margin:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #f3f3f6;padding:%?30?% 0}.item .left[data-v-2914262a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.item uni-text[data-v-2914262a]{font-size:%?30?%;font-weight:600;color:#333;margin:0 %?10?%}.item uni-icon[data-v-2914262a]{color:silver;font-size:%?40?%;width:%?40?%\n\t/* background: #007AFF; */}.item .iconchangyongtubiao-xianxingdaochu-zhuanqu-[data-v-2914262a]{color:silver}.item uni-view[data-v-2914262a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""])}}]);