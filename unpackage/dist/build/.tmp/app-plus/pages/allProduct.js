(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/allProduct"],{"0cc9":function(t,e,a){"use strict";a.r(e);var i=a("f2ed"),s=a("33bd");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);a("173a");var n,u=a("f0c5"),r=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);e["default"]=r.exports},"173a":function(t,e,a){"use strict";var i=a("6d88"),s=a.n(i);s.a},"33bd":function(t,e,a){"use strict";a.r(e);var i=a("3857"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},3857:function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(a("a3a0"));function o(t){return t&&t.__esModule?t:{default:t}}getApp();var n={data:function(){return{imgUrl:"",type:"",typeText1:"所有额度",typeText2:"所有贷款分类",list:[],currentIndex:0,mask:!1,quota:"",keyShow:[],moneyList:[{title:"所有额度"},{title:"100-5000"},{title:"5000-2万"},{title:"2万-5万"},{title:"5万-10万"},{title:"10万以上"}],typeList:[],category_id:"",down:"0",top:"0",vip:"",isShow:!0,isShow1:!1,token:"",page:"1",bank_id:""}},onLoad:function(e){t("log",e," at pages\\allProduct.vue:102"),this.bank_id=e.id,this.imgUrl=s.default.imgUrl,this.token=i.getStorageSync("token")||this.token,this.getList()},methods:{goProduct:function(t){var e=t.currentTarget.dataset.id;i.navigateTo({url:"/pages/productDetail?id=".concat(e)})},getTap:function(t){this.type=t,1==t?(this.keyShow=this.moneyList,this.down=1):(this.keyShow=this.typeList,this.top=1,this.getTypeList()),this.mask=!0},screenList:function(e){t("log",e,"****"," at pages\\allProduct.vue:131"),this.currentIndex=e.currentTarget.dataset.index,1==this.type?(this.typeText1=this.keyShow[this.currentIndex].title,this.quota=this.keyShow[this.currentIndex].title,this.down=0):(this.typeText2=this.keyShow[this.currentIndex].title,this.category_id=e.currentTarget.dataset.id,this.top=0),this.list=[],this.mask=!1,this.getList()},hideModal:function(){this.mask=!1,this.down,this.top},getTypeList:function(){var e=this;i.request({url:"".concat(s.default.requestUrl,"/holes/categories"),method:"GET",header:{authorization:this.token},success:function(a){a=s.default.null2str(a),t("log",a,"----"," at pages\\allProduct.vue:163"),200==a.data.status_code&&(e.keyShow=a.data.data)}})},getList:function(){var e=this;i.request({url:"".concat(s.default.requestUrl,"/holes/categories-holes"),method:"GET",header:{authorization:this.token},data:{category_id:this.category_id,quota:this.quota,bank_id:this.bank_id,page_size:"10",page:this.page},success:function(a){a=s.default.null2str(a),t("log",a," at pages\\allProduct.vue:188"),200==a.data.status_code?(e.list=e.list.concat(a.data.data),0==a.data.data?(i.showToast({title:"暂无更多数据",icon:"none"}),e.isShow=!0,t("log",e.isShow," at pages\\allProduct.vue:197"),e.isShow1=!1):(e.isShow=!1,e.isShow1=!1)):202==a.data.status_code?(e.vip=a.data.message,e.isShow1=!0,e.isShow=!1):i.showToast({title:a.data.message})}})},onReachBottom:function(){this.page++,this.getList()}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},"6d88":function(t,e,a){},a095:function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");i(a("66fd"));var e=i(a("0cc9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},f2ed:function(t,e,a){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))}},[["a095","common/runtime","common/vendor"]]]);