(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/indexAccurate"],{"1b3d":function(t,e,a){"use strict";var n=a("9b03"),o=a.n(n);o.a},"20c3":function(t,e,a){"use strict";a.r(e);var n=a("ca95"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},"9b03":function(t,e,a){},bc2d:function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return o}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})},c57f:function(t,e,a){"use strict";a.r(e);var n=a("bc2d"),o=a("20c3");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("1b3d");var u,c=a("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=s.exports},ca95:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("a3a0"));function i(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),c={data:function(){return{list:[],page:"1",page_size:"10",boardId:"1",imgUrl:""}},onShow:function(t){},onLoad:function(e){this.imgUrl=o.default.imgUrl,console.log(t(this.imgUrl," at pages\\indexAccurate.vue:44")),this.boardId=e.id,this.getList(),n.setNavigationBarTitle({title:e.name})},onLaunch:function(){},methods:{getList:function(){var e=this;n.request({url:"".concat(o.default.requestUrl,"/posts/board-posts"),method:"GET",header:{authorization:u.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(a){a=o.default.null2str(a),console.log(t(a," at pages\\indexAccurate.vue:69")),200==a.data.status_code?(e.list=e.list.concat(a.data.data),0==a.data.data&&n.showToast({title:"暂无更多数据",icon:"none"})):n.showToast({title:a.data.message})}})},goDetail:function(t){n.navigateTo({url:"/pages/articleDetail?id=".concat(t)})},onReachBottom:function(){this.page++,this.getList()}}};e.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},ce04:function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");n(a("66fd"));var e=n(a("c57f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["ce04","common/runtime","common/vendor"]]]);