(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shareCode"],{"19a4":function(e,t,n){"use strict";n.r(t);var o=n("a585"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"84ec":function(e,t,n){"use strict";var o=n("d1fa"),a=n.n(o);a.a},9485:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o})},a126:function(e,t,n){"use strict";(function(e){n("b5b4"),n("921b");o(n("66fd"));var t=o(n("cc25"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a585:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a3a0"));n("24e8");function i(e){return e&&e.__esModule?e:{default:e}}var s=getApp(),c=function(){return n.e("components/uni-popup").then(n.bind(null,"a78d"))},u={data:function(){return{bottomData:[{text:"微信好友",type:"WXSceneSession",icon:"iconweixin"},{text:"朋友圈",type:"WXSenceTimeline",icon:"iconpengyouquan"}],codeType:"",codeList:{},showIs:"0",openSettingBtnHidden:!0,imgUrl:"",canvasWidth:"",canvasHeight:""}},components:{uniPopup:c},onLoad:function(t){e("log",t," at pages\\shareCode.vue:101"),this.codeType=t.type,this.imgUrl=a.default.imgUrl,"2"==this.codeType&&this.getCode()},onShareAppMessage:function(){var e=this.getPageUrl();return{title:this.articleDetail.title,path:e}},shareFriend:function(){this.goShare("WXSceneSession")},shareFriendcricle:function(){this.goShare("WXSenceTimeline")},methods:{quickInlet:function(e){2==e?this.$refs.showshare.open():1==e&&this.getList()},handleSetting:function(t){e("log",t," at pages\\shareCode.vue:139"),t.detail.authSetting["scope.writePhotosAlbum"]?this.openSettingBtnHidden=!0:this.openSettingBtnHidden=!1},saveEwm:function(){var e=this;o.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?e.saveImgToLocal():o.authorize({scope:"scope.writePhotosAlbum",success:function(){e.saveImgToLocal()},fail:function(){e.openSettingBtnHidden=!1}})}})},saveImgToLocal:function(){var t=this;o.showModal({title:"提示",content:"确定保存到相册吗",success:function(n){if(n.confirm){var a=t,i=(o.getSystemInfoSync(),o.createCanvasContext("mycanvas"));o.getImageInfo({src:a.codeList.faceurl,success:function(t){e("log",t," at pages\\shareCode.vue:183"),i.fillStyle="#FFFFFF",i.fillRect(0,0,218,218),i.drawImage(t.path,0,0,203,203),i.draw(!0,function(){o.canvasToTempFilePath({x:0,y:0,width:203,height:203,destWidth:203,destHeight:203,canvasId:"mycanvas",success:function(e){o.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){o.showToast({title:"图片保存成功～"})},fail:function(e){},complete:function(){o.hideLoading()}})},fail:function(e){o.showToast({title:"保存失败",icon:"none"})}})})}})}else n.cancel&&o.showToast({title:"取消成功",icon:"none"})}})},getCode:function(){var t=this;o.request({url:"".concat(a.default.requestUrl,"/promote-showmycode"),method:"GET",header:{authorization:s.globalData.token},success:function(n){n=a.default.null2str(n),e("log",n,"---"," at pages\\shareCode.vue:241"),-1==n.data.code?(o.showToast({title:n.data.tip_msg,icon:"none"}),setTimeout(function(e){o.navigateBack({delta:1})},2e3)):(t.codeList=n.data,t.showIs="0",e("log",t.codeList.face,"*"," at pages\\shareCode.vue:255"))}})},getList:function(){o.request({url:"".concat(a.default.requestUrl,"/promote-getmycode"),method:"GET",header:{authorization:s.globalData.token},success:function(t){if(t=a.default.null2str(t),e("log",t,"++++"," at pages\\shareCode.vue:271"),0==t.data.code)if("恭喜您,审核通过!"==t.data.tip_msg){var n=t.data.memberinfos.user_setting_account;e("log",n,"m"," at pages\\shareCode.vue:275"),o.navigateTo({url:"/pages/getQrCode?item=".concat(n)})}else o.navigateTo({url:"/pages/getQrCode"});else o.showToast({title:t.data.tip_msg,icon:"none"}),setTimeout(function(e){o.navigateBack({delta:1})},2e3)}})},cancel:function(e){this.$refs["show"+e].close()},des:function(){o.showToast({title:"请重新获取二维码",icon:"none"})},goShare:function(t){var n=this;e("log",t," at pages\\shareCode.vue:308");var a="";"WXSceneSession"==t?a="WXSceneSession":"WXSenceTimeline"==t&&(a="WXSenceTimeline"),o.share({provider:"weixin",scene:a,type:0,href:this.codeList.share_link,title:"新微金论坛",summary:"我正在使用新微金论坛，赶紧跟我一起来体验！",imageUrl:" ",success:function(e){n.showIs="1"},fail:function(e){}})},getPageUrl:function(){var e=getCurrentPages();e=e[e.length-1];var t=e.route,n=e.options,o="?";for(var a in n)o+=a,o+="=",o+=n[a],o+="&";return o=o.substring(0,o.length-1),t+=o,t},again:function(){this.getCode()}}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},cc25:function(e,t,n){"use strict";n.r(t);var o=n("9485"),a=n("19a4");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("84ec");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=u.exports},d1fa:function(e,t,n){}},[["a126","common/runtime","common/vendor"]]]);