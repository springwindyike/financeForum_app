(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/indexAccurate"],{"1b3d":function(t,e,a){"use strict";var n=a("9b03"),u=a.n(n);u.a},"20c3":function(t,e,a){"use strict";a.r(e);var n=a("ca95"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},"8fb6":function(t,e,a){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return u}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},"9b03":function(t,e,a){},c57f:function(t,e,a){"use strict";a.r(e);var n=a("8fb6"),u=a("20c3");for(var o in u)"default"!==o&&function(t){a.d(e,t,function(){return u[t]})}(o);a("1b3d");var i,c=a("f0c5"),r=Object(c["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=r.exports},ca95:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(a("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}var i=getApp(),c={data:function(){return{list:[],page:"1",page_size:"10",boardId:"1",imgUrl:""}},onShow:function(t){},onLoad:function(t){this.imgUrl=u.default.imgUrl,this.getList()},onLaunch:function(){},methods:{getList:function(){var e=this;t.request({url:"".concat(u.default.requestUrl,"/posts/board-posts"),method:"GET",header:{authorization:i.globalData.token},data:{board_id:"5",page_size:this.page_size,page:this.page},success:function(a){a=u.default.null2str(a),n("log",a," at pages\\indexAccurate.vue:64"),200==a.data.status_code?(e.list=e.list.concat(a.data.data),0==a.data.data&&t.showToast({title:"暂无更多数据",icon:"none"})):t.showToast({title:a.data.message})}})},goDetail:function(e){t.navigateTo({url:"/pages/articleDetail?id=".concat(e)})},onReachBottom:function(){this.page++,this.getList()}}};e.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},ce04:function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");n(a("66fd"));var e=n(a("c57f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["ce04","common/runtime","common/vendor"]]]);