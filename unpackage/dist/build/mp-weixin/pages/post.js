(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"141f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a3a0"));function a(t){return t&&t.__esModule?t:{default:t}}var u=getApp(),r={data:function(){return{formNode:{title:"",content:"",board_id:"",topic_id:"",name:""}}},onLoad:function(t){console.log(t),this.formNode.board_id=t.id,this.name=t.name},methods:{onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context(function(t){e.editorCtx=t.context}).exec()},inputValue:function(t){var e=this.formNode,n=t.currentTarget.dataset.name,o=t.detail.value;e[n]=o,this.formNode=e},post:function(){t.request({url:"".concat(o.default.requestUrl,"/posts/send"),method:"POST",header:{authorization:u.globalData.token},data:this.formNode,success:function(e){t.hideLoading(),e=o.default.null2str(e),console.log(e),"200"==e.data.status_code?(t.showToast({title:e.data.message,icon:"none"}),setTimeout(function(){t.reLaunch({url:"/pages/index"})},2e3)):t.showToast({title:e.data.message,icon:"none"})}})}}};e.default=r}).call(this,n("543d")["default"])},"1f0c":function(t,e,n){},"481e":function(t,e,n){"use strict";n.r(e);var o=n("141f"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},"7e23":function(t,e,n){"use strict";(function(t){n("b5b4"),n("921b");o(n("66fd"));var e=o(n("c312"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8b41":function(t,e,n){"use strict";var o=n("1f0c"),a=n.n(o);a.a},"99de":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},c312:function(t,e,n){"use strict";n.r(e);var o=n("99de"),a=n("481e");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("8b41");var r=n("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports}},[["7e23","common/runtime","common/vendor"]]]);