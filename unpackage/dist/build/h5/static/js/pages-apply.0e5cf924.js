(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-apply"],{"251b":function(t,e,i){"use strict";var a=i("68e7"),o=i.n(a);o.a},"575e":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"apply"},[i("v-uni-view",{staticClass:"nav"},[i("v-uni-view",{staticClass:"nav-left"},[i("v-uni-scroll-view",{attrs:{"scroll-y":!0}},t._l(t.categoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-left-item",style:a==t.categoryActive?"color:"+t.activeTextColor+";background-color:"+t.activeBackgroundColor:"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryMainClick(e.id,a,e.title)}}},[t._v(t._s(e.title))])}),1)],1),i("v-uni-view",{staticClass:"nav-right"},[i("v-uni-scroll-view",{attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.toLowFun.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._l(t.subCategoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"nav-right-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categorySubClick(e)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+e.photoalbums[0].path}}),i("v-uni-view",{staticClass:"navRightContent"},[i("v-uni-text",[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"applyInfo"},[i("v-uni-text",{staticClass:"time"},[t._v(t._s(e.created_at))]),i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.user.name))]),i("v-uni-text",[t._v("评"+t._s(e.comments_count))])],1)],1)],1)}),t.isShow?i("v-uni-view",{staticClass:"null"},[t._v("暂无数据")]):t._e(),t.isShow1?i("v-uni-view",{staticClass:"null"},[t._v(t._s(t.vip))]):t._e()],2)],1)],1)],1)},n=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return a})},"5a14":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".apply[data-v-33bc2b5e]{width:%?750?%}.nav[data-v-33bc2b5e]{display:-webkit-box;display:-webkit-flex;display:flex;height:calc(100vh - 9px);width:%?750?%}uni-scroll-view[data-v-33bc2b5e]{height:100%}.nav-left[data-v-33bc2b5e]{width:%?190?%}.nav-left-item[data-v-33bc2b5e]{height:%?92?%;font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#2390dc;color:#fff}.nav-right[data-v-33bc2b5e]{width:%?510?%;padding:%?22?% 0 0 %?22?%;height:100vh}.nav-right-item[data-v-33bc2b5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0 0 %?30?%;width:%?504?%}.navRightContent[data-v-33bc2b5e]{width:%?440?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:space-between;align-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.navRightContent>uni-text[data-v-33bc2b5e]{font-size:%?26?%;color:#333;font-weight:600;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.nav-right-item uni-image[data-v-33bc2b5e]{width:%?130?%;height:%?110?%;border-radius:%?8?%;margin-right:%?16?%}.applyInfo[data-v-33bc2b5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?354?%}.applyInfo>uni-text[data-v-33bc2b5e]{display:block;font-size:%?22?%;color:#999}.name[data-v-33bc2b5e]{width:%?90?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.time[data-v-33bc2b5e]{width:%?150?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.active[data-v-33bc2b5e]{color:#2390dc}.padding[data-v-33bc2b5e]{height:0;width:100%;top:0;position:fixed;background-color:#f24544}",""])},"68e7":function(t,e,i){var a=i("5a14");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("eefd50f8",a,!0,{sourceMap:!1,shadowMode:!1})},"895c":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var o=a(i("a3a0")),n=getApp(),s={data:function(){return{categoryList:[],subCategoryList:[],imgUrl:"",page:"1",page_size:"10",boardId:"",categoryActive:0,activeStyle:{color:this.activeTextColor,backgroundColor:this.activeBackgroundColor},vip:"",isShow:!0,isShow1:!1}},props:{defaultActive:{type:Number,default:0},activeTextColor:{type:String,default:"#333"},activeBackgroundColor:{type:String,default:"#ffffff"}},onLoad:function(){this.imgUrl=o.default.imgUrl,this.getNav()},mounted:function(){},methods:{categoryMainClick:function(t,e,i){this.boardId=t,this.page="1",this.page_size="10",this.subCategoryList=[],this.categoryActive=e,this.getList()},categorySubClick:function(t){console.log(t),uni.navigateTo({url:"/pages/articleDetail?id=".concat(t.id)})},getNav:function(){var t=this;uni.request({url:"".concat(o.default.requestUrl,"/board/boards"),method:"GET",header:{authorization:n.globalData.token},success:function(e){e=o.default.null2str(e),console.log(e),200==e.data.status_code?(t.categoryList=e.data.data,t.boardId=e.data.data[0].id,t.getList(),console.log(t.boardId)):uni.showToast({title:e.data.message})}})},getList:function(){var t=this;uni.request({url:"".concat(o.default.requestUrl,"/posts/board-posts"),method:"GET",header:{authorization:n.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(e){e=o.default.null2str(e),console.log(e),200==e.data.status_code?(t.subCategoryList=t.subCategoryList.concat(e.data.data),0==e.data.data?(uni.showToast({title:"暂无更多数据",icon:"none"}),t.isShow=!0,console.log(t.isShow),t.isShow1=!1):(t.isShow=!1,t.isShow1=!1)):202==e.data.status_code?(t.vip=e.data.message,t.isShow1=!0,t.isShow=!1):uni.showToast({title:e.data.message,icon:"none",duration:2e3})}})},toLowFun:function(){this.page++,this.getList()}}};e.default=s},bd24:function(t,e,i){"use strict";i.r(e);var a=i("575e"),o=i("f4cc");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("251b");var s,c=i("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"33bc2b5e",null,!1,a["a"],s);e["default"]=l.exports},f4cc:function(t,e,i){"use strict";i.r(e);var a=i("895c"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a}}]);