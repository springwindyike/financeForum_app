(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"141f":function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("a3a0"));function i(t){return t&&t.__esModule?t:{default:t}}var s=getApp(),c=t.getRecorderManager(),u=t.createInnerAudioContext();u.autoplay=!0;var r={data:function(){return{formNode:{title:"",content:"",board_id:"",topic_id:""},readOnly:!1,formats:{},title:"",voicePath:"",htmlCon:"",options:null}},onLoad:function(e){var o=this;console.log(a(e," at pages\\post.vue:130")),this.formNode.board_id=e.id,this.options=e,t.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'}),c.onStop(function(t){console.log(a("recorder stop"+JSON.stringify(t)," at pages\\post.vue:142")),o.voicePath=t.tempFilePath,o.upVoice()})},methods:{submit:function(){var t=this;this.editorCtx.getContents({success:function(e){console.log(a(e.html," at pages\\post.vue:156")),t.htmlCon=e.html,t.upData()}})},upData:function(){return""==this.title?(t.showToast({title:"请输入标题"}),!1):""==this.htmlCon?(t.showToast({title:"请编辑帖子内容"}),!1):(t.showLoading({title:"发布中...",duration:1e6}),void t.request({url:"".concat(n.default.requestUrl,"/posts/send"),method:"POST",header:{authorization:s.globalData.token},data:{board_id:this.options.id,topic_id:"",title:this.title,content:this.htmlCon,voice:this.voicePath},success:function(e){t.hideLoading(),e=n.default.null2str(e),200==e.data.status_code?(t.showToast({title:e.data.message}),t.navigateBack()):t.showToast({title:e.data.message})}}))},getTitle:function(t){this.title=t.detail.value},startRecord:function(){console.log(a("开始录音"," at pages\\post.vue:217")),t.showToast({title:"录音中...",duration:99999999,icon:"loading"}),c.start()},endRecord:function(){console.log(a("录音结束"," at pages\\post.vue:226")),t.hideToast(),t.showToast({title:"结束录音",duration:2e3,icon:"success"}),c.stop()},playVoice:function(){console.log(a("播放录音"," at pages\\post.vue:236")),this.voicePath&&(u.src=this.voicePath,u.play())},upVoice:function(){var e=this;console.log(a("========================================="," at pages\\post.vue:244")),console.log(a(this.voicePath," at pages\\post.vue:245")),t.showLoading({title:"语音上传中...",duration:1e6}),t.uploadFile({url:"".concat(n.default.requestUrl,"/posts/uploads"),filePath:this.voicePath,name:"file",header:{authorization:s.globalData.token},success:function(o){t.hideLoading(),o=n.default.null2str(o),o=JSON.parse(o.data),200==o.status_code?e.voicePath=o.data.path:t.showToast({title:"上传失败，请重新录音"})}})},readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context(function(t){e.editorCtx=t.context}).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var e=t.target.dataset,o=e.name,a=e.value;o&&this.editorCtx.format(o,a)},onStatusChange:function(t){var e=t.detail;this.formats=e},insertDivider:function(){this.editorCtx.insertDivider({success:function(){}})},clear:function(){this.editorCtx.clear({success:function(t){}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,e="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:e})},insertImage:function(){var e=this;t.chooseImage({count:1,success:function(o){t.showToast({title:"图片上传中",icon:"loading"}),Promise.all(o.tempFiles.map(function(e){return new Promise(function(o,a){t.uploadFile({url:"".concat(n.default.requestUrl,"/posts/uploads"),filePath:e.path,name:"file",header:{authorization:s.globalData.token},success:function(t){o({path:JSON.parse(t.data).data})}})})})).then(function(o){t.hideToast(),e.editorCtx.insertImage({src:o[0].path.path,alt:"图像",success:function(){}})}).catch(function(t){return console.log(a(t," at pages\\post.vue:366"))})}})}}};e.default=r}).call(this,o("6e42")["default"],o("0de9")["default"])},"1f0c":function(t,e,o){},"481e":function(t,e,o){"use strict";o.r(e);var a=o("141f"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);e["default"]=n.a},"7e23":function(t,e,o){"use strict";(function(t){o("b5b4"),o("921b");a(o("66fd"));var e=a(o("c312"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"80d1":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"8b41":function(t,e,o){"use strict";var a=o("1f0c"),n=o.n(a);n.a},c312:function(t,e,o){"use strict";o.r(e);var a=o("80d1"),n=o("481e");for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);o("8b41");var s=o("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["7e23","common/runtime","common/vendor"]]]);