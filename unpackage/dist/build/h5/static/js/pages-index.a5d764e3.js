(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index"],{4800:function(t,e,a){"use strict";a.r(e);var i=a("f870"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"6c77":function(t,e,a){"use strict";a.r(e);var i=a("79a6"),n=a("4800");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("a956");var s,d=a("f0c5"),l=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"6a5e859e",null,!1,i["a"],s);e["default"]=l.exports},"77a9":function(t,e,a){var i=a("e2f4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("ffb76eb2",i,!0,{sourceMap:!1,shadowMode:!1})},"79a6":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"index"},[a("v-uni-view",{staticClass:"page-section-spacing banner"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,"indicator-color":"rgba(255,255,255,.3)","indicator-active-color":"#fff",autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.pageNode.ad.aditems,function(e,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-image",{staticClass:"bannerImg",attrs:{"data-id":e.id,"data-link":e.link,src:t.imgUrl+e.image,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBanner.apply(void 0,arguments)}}})],1)}),1)],1),a("v-uni-view",{staticClass:"nav"},[t._l(t.pageNode.navs,function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"navList",attrs:{"data-bind_board":e.bind_board,"data-id":e.id,"data-name":e.name,"data-link":e.link},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavs.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.imgUrl+e.icon,mode:"aspectFill"}}),a("v-uni-text",[t._v(t._s(e.name))])],1)]})],2),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"inv-h-w"},[t._l(t.pageNode.board_data,function(e,i){return[a("v-uni-view",{key:i+"_0",class:["inv-h",t.Inv==i?"inv-h-se":""],attrs:{"data-index":i,"data-block_id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selListType.apply(void 0,arguments)}}},[t._v(t._s(e.title))])]})],2),a("v-uni-view",{staticClass:"contentList"},[t._l(t.listNode,function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"item",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}},[e.photoalbums.length>0?a("v-uni-image",{attrs:{src:t.imgUrl+e.photoalbums[0].path,mode:"aspectFill"}}):a("v-uni-image",{attrs:{src:"../static/imgLost.png",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"itemRight"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"itemCon"},[a("v-uni-text",[t._v(t._s(e.created_at))]),a("v-uni-text",[t._v(t._s(e.user.name))]),a("v-uni-text",[t._v(t._s(e.comments_count)+"评")])],1)],1)],1)]}),0==t.pageNode.board_data[t.Inv].posts.length?a("v-uni-view",{staticClass:"null"},[t._v("暂无数据")]):t._e()],2)],1)],1)},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},a956:function(t,e,a){"use strict";var i=a("77a9"),n=a.n(i);n.a},e2f4:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.index[data-v-6a5e859e]{width:750rppx}.banner[data-v-6a5e859e]{width:%?690?%;margin:%?30?%;border-radius:%?10?%;overflow:hidden}.bannerImg[data-v-6a5e859e]{width:%?690?%}.swiper[data-v-6a5e859e]{width:%?690?%;height:%?300?%;overflow:hidden;border-radius:%?10?%}uni-swiper-item[data-v-6a5e859e]{width:%?690?%;height:%?300?%;overflow:hidden;border-radius:%?10?%}.nav[data-v-6a5e859e]{width:%?690?%;padding:%?30?%;\n\t/* background: #007AFF; */display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;border-bottom:%?12?% solid #f9f9f9}.nav .navList[data-v-6a5e859e]{width:%?116?%;margin-right:%?27.99?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:%?38?%}.nav .navList[data-v-6a5e859e]:nth-child(5n){margin-right:0}.nav .navList uni-text[data-v-6a5e859e]{font-size:%?28?%;color:#333;font-weight:600;display:block}.nav .navList uni-image[data-v-6a5e859e]{width:%?50?%;height:%?50?%;margin-bottom:%?14?%}.content[data-v-6a5e859e]{width:%?690?%;padding:0 %?30?%}.content .inv-h-w[data-v-6a5e859e]{display:-webkit-box;display:-webkit-flex;display:flex}.content .inv-h[data-v-6a5e859e]{font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;color:#999;padding:%?30?% 0}.content .inv-h-se[data-v-6a5e859e]{color:#2390dc;font-weight:600}.content .inv-h-se[data-v-6a5e859e]:after{content:" ";display:block;border-bottom:%?6?% solid #2390dc;width:%?46?%;margin:%?26?% auto 0;border-radius:%?3?%}.content .contentList .item[data-v-6a5e859e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?40?%}.content .contentList .item uni-image[data-v-6a5e859e]{width:%?220?%;height:%?136?%;border-radius:%?10?%}.content .contentList .item .itemRight[data-v-6a5e859e]{width:%?440?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:space-between;align-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .contentList .item .itemRight .title[data-v-6a5e859e]{font-size:%?28?%;color:#333;font-weight:600;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.content .itemCon[data-v-6a5e859e]{width:%?440?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n\t/* justify-content: flex-end; */}.content .itemCon uni-text[data-v-6a5e859e]{display:block;font-size:%?24?%;color:#999;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}',""])},f870:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("a3a0")),o=getApp(),s={data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,Inv:0,boardId:"",pageNode:[],imgUrl:"",page_size:5,page:1,listNode:[]}},onLaunch:function(){},onShow:function(){},onHide:function(){},onLoad:function(){if(this.imgUrl=n.default.imgUrl,this.getList(),""==o.globalData.token){var t=uni.getStorageSync("login_name"),e=uni.getStorageSync("login_pwd");console.log(t+"---===---"+e),""==t||""==e?(uni.showToast({title:"未检测到用户的登录记录，请进行登录",icon:"none",duration:3e3}),setTimeout(function(){uni.reLaunch({url:"./login"})},3e3)):this.runLogin(t,e)}else this.getUserInfo()},methods:{runLogin:function(t,e){var a=this;uni.showLoading({title:"登录中...",duration:1e6}),uni.request({url:"".concat(n.default.requestUrl,"/login"),method:"POST",data:{username:t,password:e},success:function(t){console.log(t),uni.hideLoading(),t=n.default.null2str(t),200==t.statusCode?(uni.setStorageSync("login_name",a.loginName),uni.setStorageSync("login_pwd",a.loginPaw),uni.showToast({title:"登录成功",icon:"none"}),o.globalData.token="".concat(t.data.token_type," ").concat(t.data.access_token)):(uni.showToast({title:t.data.message,icon:"none",duration:3e3}),setTimeout(function(){uni.reLaunch({url:"./login"})},3e3))}})},goNavs:function(t){var e=t.currentTarget.dataset.link,a=t.currentTarget.dataset.bind_board,i=(t.currentTarget.dataset.id,t.currentTarget.dataset.name);console.log(a),"0"==a?uni.navigateTo({url:"/pages/".concat(e)}):uni.navigateTo({url:"/pages/indexA?id=".concat(a,"&name=").concat(i)})},selListType:function(t){this.Inv=t.currentTarget.dataset.index,this.boardId=t.currentTarget.dataset.block_id,console.log(this.boardId,"222"),this.page="1",this.listNode=[],this.getListMore()},goBanner:function(t){console.log(t)},goDetail:function(t){console.log(t),uni.navigateTo({url:"/pages/articleDetail?id=".concat(t.currentTarget.dataset.id)})},getUserInfo:function(){var t=this;uni.showLoading({title:"用户信息获取中..."}),uni.request({url:"".concat(n.default.requestUrl,"/me"),method:"POST",header:{authorization:o.globalData.token},success:function(e){uni.hideLoading(),e=n.default.null2str(e),console.log(e,"++++++++"),t.userInfo=e.data,o.globalData.userInfo=e.data,console.log(t.userInfo.mobile)}})},getList:function(){var t=this;uni.showLoading({title:"加载中...",duration:1e6}),uni.request({url:"".concat(n.default.requestUrl,"/index"),method:"GET",header:{authorization:o.globalData.token},success:function(e){if(uni.hideLoading(),e=n.default.null2str(e),200==e.data.status_code){var a=e.data.data;t.pageNode=a,a.board_data.length>0&&(t.boardId=a.board_data[0].id,console.log(t.boardId,"999"),t.getListMore())}else uni.showToast({title:e.data.message})}})},onReachBottom:function(){console.log(this.boardId),this.page++,console.log(this.page),uni.showLoading({title:"加载中...",duration:1e6}),this.getListMore()},getListMore:function(){var t=this;uni.request({url:"".concat(n.default.requestUrl,"/index-board-posts"),method:"GET",header:{authorization:o.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(e){uni.hideLoading(),e=n.default.null2str(e),200==e.data.status_code?(console.log("888",e.data.data),console.log(t.pageNode.board_data[t.Inv].posts,"*****"),e.data.data.length>0?t.listNode=t.listNode.concat(e.data.data):uni.showToast({title:"没有更多数据了",icon:"none"})):uni.showToast({title:e.data.message})}})}}};e.default=s}}]);