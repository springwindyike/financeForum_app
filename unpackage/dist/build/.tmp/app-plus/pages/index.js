(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index"],{"2db2":function(t,e,a){},4800:function(t,e,a){"use strict";a.r(e);var n=a("7517"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},"6c777":function(t,e,a){"use strict";a.r(e);var n=a("bd86"),o=a("4800");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("8c25");var s,r=a("f0c5"),d=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=d.exports},7517:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("a3a0"));function i(t){return t&&t.__esModule?t:{default:t}}var s=getApp(),r={data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,Inv:0,boardId:"",pageNode:[],imgUrl:"",page_size:5,page:1,listNode:[]}},onLaunch:function(){},onShow:function(){},onHide:function(){},onLoad:function(){if(this.imgUrl=o.default.imgUrl,this.getList(),""==s.globalData.token){var e=t.getStorageSync("login_name"),a=t.getStorageSync("login_pwd");""==e||""==a?(t.showToast({title:"未检测到用户的登录记录，请进行登录",icon:"none",duration:3e3}),setTimeout(function(){t.reLaunch({url:"./login"})},3e3)):this.runLogin(e,a)}else this.getUserInfo()},methods:{runLogin:function(e,a){var i=this;t.showLoading({title:"登录中...",duration:1e6}),t.request({url:"".concat(o.default.requestUrl,"/login"),method:"POST",data:{username:e,password:a},success:function(e){n("log",e," at pages\\index.vue:128"),t.hideLoading(),e=o.default.null2str(e),200==e.statusCode?(t.setStorageSync("login_name",i.loginName),t.setStorageSync("login_pwd",i.loginPaw),t.showToast({title:"登录成功",icon:"none"}),s.globalData.token="".concat(e.data.token_type," ").concat(e.data.access_token)):(t.showToast({title:e.data.message,icon:"none",duration:3e3}),setTimeout(function(){t.reLaunch({url:"./login"})},3e3))}})},goNavs:function(e){var a=e.currentTarget.dataset.link,n=e.currentTarget.dataset.bind_board,o=(e.currentTarget.dataset.id,e.currentTarget.dataset.name);"0"==n?t.navigateTo({url:"/pages/".concat(a)}):t.navigateTo({url:"/pages/indexA?id=".concat(n,"&name=").concat(o)})},selListType:function(t){this.Inv=t.currentTarget.dataset.index,this.boardId=t.currentTarget.dataset.block_id,this.page="1",this.listNode=[],this.getListMore()},goBanner:function(t){},goDetail:function(e){t.navigateTo({url:"/pages/articleDetail?id=".concat(e.currentTarget.dataset.id)})},getUserInfo:function(){var e=this;t.showLoading({title:"用户信息获取中..."}),t.request({url:"".concat(o.default.requestUrl,"/me"),method:"POST",header:{authorization:s.globalData.token},success:function(a){t.hideLoading(),a=o.default.null2str(a),n("log",a,"++++++++"," at pages\\index.vue:208"),e.userInfo=a.data,s.globalData.userInfo=a.data,n("log",e.userInfo.mobile," at pages\\index.vue:211")}})},getList:function(){var e=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(o.default.requestUrl,"/index"),method:"GET",header:{authorization:s.globalData.token},success:function(a){if(t.hideLoading(),a=o.default.null2str(a),200==a.data.status_code){var i=a.data.data;e.pageNode=i,i.board_data.length>0&&(e.boardId=i.board_data[0].id,n("log",e.boardId,"999"," at pages\\index.vue:236"),e.getListMore())}else t.showToast({title:a.data.message})}})},onReachBottom:function(){this.page++,t.showLoading({title:"加载中...",duration:1e6}),this.getListMore()},getListMore:function(){var e=this;t.request({url:"".concat(o.default.requestUrl,"/index-board-posts"),method:"GET",header:{authorization:s.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(a){t.hideLoading(),a=o.default.null2str(a),200==a.data.status_code?(n("log","888",a.data.data," at pages\\index.vue:276"),n("log",e.pageNode.board_data[e.Inv].posts,"*****"," at pages\\index.vue:277"),a.data.data.length>0?e.listNode=e.listNode.concat(a.data.data):t.showToast({title:"没有更多数据了",icon:"none"})):t.showToast({title:a.data.message})}})}}};e.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"8c25":function(t,e,a){"use strict";var n=a("2db2"),o=a.n(n);o.a},a4b7:function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");n(a("66fd"));var e=n(a("6c777"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},bd86:function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return o}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})}},[["a4b7","common/runtime","common/vendor"]]]);