(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exchang"],{6711:function(a,t,e){"use strict";var n,o=function(){var a=this,t=a.$createElement;a._self._c},i=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return n})},"6dfe":function(a,t,e){"use strict";(function(a){e("b5b4"),e("921b");n(e("66fd"));var t=n(e("8e46"));function n(a){return a&&a.__esModule?a:{default:a}}a(t.default)}).call(this,e("6e42")["createPage"])},"7afa":function(a,t,e){},"8e46":function(a,t,e){"use strict";e.r(t);var n=e("6711"),o=e("ccd6");for(var i in o)"default"!==i&&function(a){e.d(t,a,function(){return o[a]})}(i);e("8ee2");var u,d=e("f0c5"),r=Object(d["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=r.exports},"8ee2":function(a,t,e){"use strict";var n=e("7afa"),o=e.n(n);o.a},a577:function(a,t,e){"use strict";(function(a,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("a3a0"));function i(a){return a&&a.__esModule?a:{default:a}}var u=getApp(),d={data:function(){return{navList:[{id:"3",img:"iconbulletin",title:"微金公告"},{id:"5",img:"iconqiapiansousuo",title:"论坛搜索"}],Inv:0,pageData:"",imgUrl:"",page:"1",boardId:""}},onLoad:function(){this.getIndexData(),this.imgUrl=o.default.imgUrl},methods:{selListType:function(a){this.Inv=a.currentTarget.dataset.index,this.boardId=a.currentTarget.dataset.block_id,this.page="1"},goDetail:function(t){a.navigateTo({url:"/pages/articleDetail?id=".concat(t)})},getIndexData:function(){var t=this;a.showLoading({title:"加载中...",duration:1e6}),a.request({url:"".concat(o.default.requestUrl,"/forum/index"),method:"GET",header:{authorization:u.globalData.token},success:function(e){a.hideLoading(),e=o.default.null2str(e),n("log",e," at pages\\exchang.vue:117"),"200"==e.data.status_code?(t.pageData=e.data.data,t.boardId=e.data.data.board_data[0].id,n("log",t.boardId,"88"," at pages\\exchang.vue:121")):a.showToast({title:e.data.message,icon:"none"})}})},getNav:function(t){n("log",t," at pages\\exchang.vue:134");var e=t;"1"==e?a.navigateTo({url:"/pages/experience"}):"2"==e?a.navigateTo({url:"/pages/indexA?id=".concat(14,"&name=拒贷汇总")}):"3"==e&&a.navigateTo({url:"/pages/indexA?id=".concat(23,"&name=微金公告")})},onReachBottom:function(){this.page++,this.getList()},getList:function(){var t=this;a.showLoading({title:"加载中...",duration:1e6}),a.request({url:"".concat(o.default.requestUrl,"/forum/posts"),method:"GET",header:{authorization:u.globalData.token},data:{board_id:this.boardId,page:this.page,page_size:"10"},success:function(e){a.hideLoading(),e=o.default.null2str(e),n("log",e," at pages\\exchang.vue:174"),"200"==e.data.status_code?t.pageData.board_data[t.Inv].posts=t.pageData.board_data[t.Inv].posts.concat(e.data.data):a.showToast({title:e.data.message,icon:"none"})}})}}};t.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},ccd6:function(a,t,e){"use strict";e.r(t);var n=e("a577"),o=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);t["default"]=o.a}},[["6dfe","common/runtime","common/vendor"]]]);