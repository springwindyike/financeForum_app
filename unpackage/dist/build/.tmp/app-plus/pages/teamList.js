(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/teamList"],{"0bfb":function(t,e,a){"use strict";a.r(e);var n=a("7f46"),u=a("9940");for(var i in u)"default"!==i&&function(t){a.d(e,t,function(){return u[t]})}(i);a("28d9");var r,o=a("f0c5"),c=Object(o["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=c.exports},"28d9":function(t,e,a){"use strict";var n=a("4c6c"),u=a.n(n);u.a},"4c6c":function(t,e,a){},5219:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(a("a3a0"));function i(t){return t&&t.__esModule?t:{default:t}}var r=getApp(),o={data:function(){return{list:[],imgUrl:""}},onLoad:function(){this.imgUrl=u.default.imgUrl,this.getList()},methods:{getList:function(){var e=this;t.request({url:"".concat(u.default.requestUrl,"/promote-teamlist"),method:"GET",header:{authorization:r.globalData.token},success:function(t){t=u.default.null2str(t),n("log",t,"****"," at pages\\teamList.vue:65"),200==t.data.status_code&&(e.list=t.data.datas)}})},getMore:function(e){n("log",e," at pages\\teamList.vue:77"),t.navigateTo({url:"/pages/meTeamList?index=".concat(e)})},userDetail:function(e){n("log",e," at pages\\teamList.vue:83");var a=e.currentTarget.dataset.index,u=JSON.stringify(e.currentTarget.dataset.item);t.navigateTo({url:"/pages/teamPeopleDetail?itemDetail=".concat(u,"&index=").concat(a)})}}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"7f46":function(t,e,a){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return u}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})},"8db4":function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");n(a("66fd"));var e=n(a("0bfb"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},9940:function(t,e,a){"use strict";a.r(e);var n=a("5219"),u=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=u.a}},[["8db4","common/runtime","common/vendor"]]]);