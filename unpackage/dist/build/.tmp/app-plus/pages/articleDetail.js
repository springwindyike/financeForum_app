(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/articleDetail"],{"08c3":function(t,e,a){"use strict";a.r(e);var o=a("d484"),i=a("baaa");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("acd5");var n,l=a("f0c5"),c=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],n);e["default"]=c.exports},8702:function(t,e,a){},acd5:function(t,e,a){"use strict";var o=a("8702"),i=a.n(o);i.a},baaa:function(t,e,a){"use strict";a.r(e);var o=a("d9ef"),i=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},d484:function(t,e,a){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return o})},d9ef:function(t,e,a){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("a3a0"));function s(t){return t&&t.__esModule?t:{default:t}}var n=getApp(),l=function(){return Promise.all([a.e("common/vendor"),a.e("components/jyf-parser")]).then(a.bind(null,"def7"))},c={data:function(){return{userInfo:{},focus:!1,isShow:"0",isHide:"0",info:{},nodes:[],commentList:[],articleDetail:null,options:null,imgUrl:"",page:"1",postContent:"",just_landlord:"",comment_id:"",isSex:"0",type:""}},components:{"jyf-parser":l},onLoad:function(t){this.options=t,this.imgUrl=i.default.imgUrl},onShow:function(){this.getArticleDetail(),this.getComment()},onShareAppMessage:function(){var t=this.getPageUrl();return{title:this.articleDetail.title,path:t}},methods:{goVIPPage:function(e){var a=this;if("normal"==this.articleDetail.user.type){var o=e;"member"==o&&t.showModal({title:"提示",content:"是否前往开通会员",success:function(t){t.confirm?a.goVip():t.cancel}})}},goVip:function(){t.navigateTo({url:"/pages/meVIP"})},getContent:function(t){this.postContent=t.detail.value},getArticleDetail:function(){var e=this;t.showLoading({title:"加载中..."}),t.request({url:"".concat(i.default.requestUrl,"/posts/show"),method:"GET",header:{authorization:n.globalData.token},data:{post_id:this.options.id},success:function(a){t.hideLoading(),a=i.default.null2str(a),200==a.data.status_code?(e.articleDetail=a.data,"f"==e.articleDetail.user.sex&&(e.isSex="1")):(t.showToast({title:a.data.message,icon:"none",duration:2e3}),setTimeout(function(e){t.navigateBack({delta:1})},2e3))}})},shareFriend:function(){this.share("WXSceneSession")},shareFriendcricle:function(){this.share("WXSenceTimeline")},getPageUrl:function(){var t=getCurrentPages();t=t[t.length-1];var e=t.route,a=t.options,o="?";for(var i in a)o+=i,o+="=",o+=a[i],o+="&";return o=o.substring(0,o.length-1),e+=o,e},share:function(e){var a=this.getPageUrl();t.share({provider:"weixin",scene:e,type:0,href:a,title:this.articleDetail.title,summary:"",imageUrl:"",success:function(t){o("log","success:"+JSON.stringify(t)," at pages\\articleDetail.vue:273")},fail:function(t){o("log","fail:"+JSON.stringify(t)," at pages\\articleDetail.vue:276")}})},postReward:function(){var e=this;t.showLoading({title:"打赏中..."}),t.request({url:"".concat(i.default.requestUrl,"/posts/reward"),method:"GET",header:{authorization:n.globalData.token},data:{post_id:this.articleDetail.id},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a," at pages\\articleDetail.vue:297"),"200"==a.data.status_code?(t.showToast({title:"打赏成功"}),e.articleDetail.rewards_count+=1):t.showToast({title:"打赏失败",icon:"none"})}})},addCollection:function(){var e=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(i.default.requestUrl,"/user/add_collection"),method:"POST",header:{authorization:n.globalData.token},data:{post_id:this.articleDetail.id},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a," at pages\\articleDetail.vue:330"),"1"==a.data.status_code?(e.articleDetail.is_collections,t.showToast({title:a.data.message})):t.showToast({title:a.data.message,icon:"none"})}})},delCollection:function(){var e=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(i.default.requestUrl,"/user/del_collection"),method:"POST",header:{authorization:n.globalData.token},data:{post_id:this.articleDetail.id},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a," at pages\\articleDetail.vue:364"),"1"==a.data.status_code?(e.articleDetail.is_collections,t.showToast({title:a.data.message})):t.showToast({title:a.data.message,icon:"none"})}})},addFollow:function(e){var a=this;t.showLoading({title:"加载中...",duration:1e6}),t.request({url:"".concat(i.default.requestUrl,"/user/add_follow"),method:"POST",header:{authorization:n.globalData.token},data:{follow_id:this.articleDetail.user_id,type:e},success:function(e){t.hideLoading(),e=i.default.null2str(e),o("log",e," at pages\\articleDetail.vue:399"),200==e.data.status_code?(t.showToast({title:e.data.message}),a.articleDetail.is_follow=1):t.showToast({title:e.data.message,icon:"none"})}})},getComment:function(){var e=this;t.request({url:"".concat(i.default.requestUrl,"/posts/post-comments"),method:"GET",header:{authorization:n.globalData.token},data:{post_id:this.options.id,just_landlord:this.just_landlord,page:this.page,page_size:"10"},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a,"**********"," at pages\\articleDetail.vue:431"),"200"==a.data.status_code&&(e.commentList=e.commentList.concat(a.data.data))}})},postDiscuss:function(){""==this.postContent?t.showToast({title:"请输入发表内容",icon:"none"}):"0"==this.isShow?this.getPost():"1"==this.isShow&&this.postReply()},getPost:function(){var e=this;t.showLoading({title:"评论提交中..."}),t.request({url:"".concat(i.default.requestUrl,"/posts/send-comment"),method:"POST",header:{authorization:n.globalData.token},data:{post_id:this.options.id,content:this.postContent},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a," at pages\\articleDetail.vue:473"),"200"==a.data.status_code?(t.showToast({title:a.data.message,icon:"none"}),e.postContent=" "):t.showToast({title:"发表失败",icon:"none"})}})},reply:function(t,e){o("log",t,e," at pages\\articleDetail.vue:491"),this.comment_id=t,this.isShow=e,this.focus=!0},postReply:function(){var e=this;t.showLoading({title:"评论发布中..."}),t.request({url:"".concat(i.default.requestUrl,"/posts/send-reply"),method:"POST",header:{authorization:n.globalData.token},data:{comment_id:this.comment_id,content:this.postContent},success:function(a){t.hideLoading(),a=i.default.null2str(a),o("log",a," at pages\\articleDetail.vue:513"),"200"==a.data.status_code?(t.showToast({title:a.data.message,icon:"none"}),e.postContent=" ",e.isShow="0"):t.showToast({title:"发表失败",icon:"none"})}})},commentLandlord:function(t){o("log",t," at pages\\articleDetail.vue:532"),this.just_landlord=t,this.commentList=[],this.page="1",this.getComment()},clickZan:function(e){var a=this;this.isHide="1",t.showLoading({title:"点赞中..."}),t.request({url:"".concat(i.default.requestUrl,"/posts/like"),method:"GET",header:{authorization:n.globalData.token},data:{post_id:this.articleDetail.id},success:function(e){t.hideLoading(),e=i.default.null2str(e),o("log",e," at pages\\articleDetail.vue:556"),"200"==e.data.status_code?(t.showToast({title:"点赞成功",icon:"none"}),a.articleDetail.like+=1,a.articleDetail.is_collections=1):t.showToast({title:"点赞失败",icon:"none"})}})},onReachBottom:function(){this.page++,this.getComment()}}};e.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},e764:function(t,e,a){"use strict";(function(t){a("b5b4"),a("921b");o(a("66fd"));var e=o(a("08c3"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["e764","common/runtime","common/vendor"]]]);