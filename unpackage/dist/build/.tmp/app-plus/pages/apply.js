(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apply"],{"0842":function(t,a,e){"use strict";var o,i=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"b",function(){return i}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return o})},1866:function(t,a,e){},"96ff":function(t,a,e){"use strict";(function(t,o){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("a3a0"));function n(t){return t&&t.__esModule?t:{default:t}}var s=getApp(),u={data:function(){return{categoryList:[],subCategoryList:[],imgUrl:"",page:"1",page_size:"10",boardId:"",categoryActive:0,activeStyle:{color:this.activeTextColor,backgroundColor:this.activeBackgroundColor},vip:"",isShow:!0,isShow1:!1}},props:{defaultActive:{type:Number,default:0},activeTextColor:{type:String,default:"#333"},activeBackgroundColor:{type:String,default:"#ffffff"}},onLoad:function(){this.imgUrl=i.default.imgUrl,this.getNav()},mounted:function(){},methods:{categoryMainClick:function(t,a,e){this.boardId=t,this.page="1",this.page_size="10",this.subCategoryList=[],this.categoryActive=a,this.getList()},categorySubClick:function(a){t.navigateTo({url:"/pages/articleDetail?id=".concat(a.id)})},getNav:function(){var a=this;t.request({url:"".concat(i.default.requestUrl,"/board/boards"),method:"GET",header:{authorization:s.globalData.token},success:function(e){e=i.default.null2str(e),o("log",e," at pages\\apply.vue:104"),200==e.data.status_code?(a.categoryList=e.data.data,a.boardId=e.data.data[0].id,a.getList()):t.showToast({title:e.data.message})}})},getList:function(){var a=this;t.request({url:"".concat(i.default.requestUrl,"/posts/board-posts"),method:"GET",header:{authorization:s.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(e){e=i.default.null2str(e),o("log",e," at pages\\apply.vue:134"),200==e.data.status_code?(a.subCategoryList=a.subCategoryList.concat(e.data.data),0==e.data.data?(t.showToast({title:"暂无更多数据",icon:"none"}),a.isShow=!0,a.isShow1=!1):(a.isShow=!1,a.isShow1=!1)):202==e.data.status_code?(a.vip=e.data.message,a.isShow1=!0,a.isShow=!1):t.showToast({title:e.data.message,icon:"none",duration:2e3})}})},toLowFun:function(){this.page++,this.getList()}}};a.default=u}).call(this,e("6e42")["default"],e("0de9")["default"])},"97fa":function(t,a,e){"use strict";(function(t){e("b5b4"),e("921b");o(e("66fd"));var a=o(e("bd24"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},bd24:function(t,a,e){"use strict";e.r(a);var o=e("0842"),i=e("f4cc");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("ff03");var s,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);a["default"]=r.exports},f4cc:function(t,a,e){"use strict";e.r(a);var o=e("96ff"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(a,t,function(){return o[t]})}(n);a["default"]=i.a},ff03:function(t,a,e){"use strict";var o=e("1866"),i=e.n(o);i.a}},[["97fa","common/runtime","common/vendor"]]]);