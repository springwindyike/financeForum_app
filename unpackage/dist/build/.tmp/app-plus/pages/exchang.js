(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exchang"],{6016:function(t,e,a){},"6dfe":function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");i(a("66fd"));var e=i(a("8e46"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8e46":function(t,e,a){"use strict";a.r(e);var i=a("fd24"),n=a("ccd6");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("8ee2");var s,u=a("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},"8ee2":function(t,e,a){"use strict";var i=a("6016"),n=a.n(i);n.a},a577:function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}getApp();var s={data:function(){return{navList:[{id:"3",img:"iconbulletin",title:"微金公告",type:"23"},{id:"6",img:"iconqiapiansousuo",title:"互动搜索",type:""},{id:"2",img:"iconliebiao",title:"贷款产品互动",type:"1"},{id:"4",img:"iconyonghu",title:"信用卡互动",type:"2"},{id:"5",img:"iconqiapiansousuo",title:"推荐热帖",type:"3"},{id:"1",img:"iconxiepinglun",title:"网友互动",type:""}],imgUrl:"",isShow:!1,categoryList:[],subCategoryList:[],categoryActive:"-1",area_id:"",token:"",type:"all"}},onLoad:function(){this.imgUrl=n.default.imgUrl,this.token=t.getStorageSync("token")},onShow:function(){this.getUserInfo(),this.subCategoryList=[],this.getRegion(),this.getList()},methods:{categoryMainClick:function(t,e){i("log",t,e," at pages\\exchang.vue:81"),this.categoryActive=e,this.area_id=t,this.type="",this.subCategoryList=[],this.getList()},getAll:function(t){i("log",t," at pages\\exchang.vue:89"),this.area_id="",this.type="all",this.subCategoryList=[],this.categoryActive=t,this.getList()},categorySubClick:function(e,a,i,n){t.navigateTo({url:"/pages/exchangList?title=".concat(e,"&id=").concat(a,"&img=").concat(i,"&fatheId=").concat(n)})},getUserInfo:function(){var e=this;t.request({url:"".concat(n.default.requestUrl,"/me"),method:"POST",header:{authorization:this.token},success:function(a){t.hideLoading(),a=n.default.null2str(a),i("log",a,"++++++++"," at pages\\exchang.vue:113");var o=a.data.type,s=a.data.vip_id;e.isShow="normal"==o||"2"!=s&&"3"!=s}})},getRegion:function(){var e=this;t.request({url:"".concat(n.default.requestUrl,"/areas/area-list"),method:"GET",header:{authorization:this.token},success:function(a){t.hideLoading(),a=n.default.null2str(a),i("log",a," at pages\\exchang.vue:140"),"200"==a.data.status_code?e.categoryList=a.data.data:"用户不存在或登陆已过期"==a.data.message?(t.showToast({title:"未检测到用户的登录记录，请进行登录",icon:"none",duration:3e3}),setTimeout((function(){t.reLaunch({url:"./login"})}),3e3)):t.showToast({title:a.data.message,icon:"none",duration:3e3})}})},getNav:function(e,a,i){""!=e?t.navigateTo({url:"/pages/indexA?id=".concat(e,"&name=").concat(a)}):"网友互动"==a&&t.navigateTo({url:"/pages/boardData?title=".concat(a,"&id=",38,"&img=").concat(i)})},getList:function(){var e=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(n.default.requestUrl,"/areas/city-list"),method:"POST",header:{authorization:this.token},data:{area_id:this.area_id,type:this.type},success:function(a){t.hideLoading(),a=n.default.null2str(a),i("log",a," at pages\\exchang.vue:204"),"200"==a.data.status_code?e.subCategoryList=a.data.data:t.showToast({title:a.data.message,icon:"none"})}})}}};e.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},ccd6:function(t,e,a){"use strict";a.r(e);var i=a("a577"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},fd24:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))}},[["6dfe","common/runtime","common/vendor"]]]);