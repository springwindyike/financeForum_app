(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meMyMobile"],{3360:function(t,e,n){"use strict";n.r(e);var i=n("6162"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},6162:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a3a0")),o=getApp(),u={data:function(){return{mobile:""}},onLoad:function(){var t=this;uni.request({url:"".concat(a.default.requestUrl,"/user/old-mobile"),method:"GET",header:{authorization:o.globalData.token},success:function(e){e=a.default.null2str(e),console.log(e),200==e.data.status_code&&(t.mobile=e.data.mobile)}})},methods:{goMyMobile:function(t){var e=t.target.dataset.name;uni.navigateTo({url:"/pages/".concat(e,"?num=").concat(this.mobile)})}}};e.default=u},"770f":function(t,e,n){"use strict";n.r(e);var i=n("946c"),a=n("3360");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("e604");var u,c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"480351f2",null,!1,i["a"],u);e["default"]=s.exports},"889e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".list[data-v-480351f2]{width:%?750?%;height:auto;border-top:%?2?% solid #f3f3f3}.item[data-v-480351f2]{width:%?690?%;height:%?90?%;margin:0 %?30?%;border-bottom:%?2?% solid #110f53;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#333;font-size:%?28?%}.iconfont[data-v-480351f2]{margin-left:%?10?%}",""])},"946c":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"item",attrs:{"data-name":"meMyMobile_1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMyMobile.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("手机号更换")]),n("v-uni-view",[t._v(t._s(t.mobile)),n("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},dea7:function(t,e,n){var i=n("889e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("09d7c5a8",i,!0,{sourceMap:!1,shadowMode:!1})},e604:function(t,e,n){"use strict";var i=n("dea7"),a=n.n(i);a.a}}]);