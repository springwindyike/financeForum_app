(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meCertificationConfirm"],{"0d63":function(t,e,i){t.exports=i.p+"static/img/card1.f3c4413d.png"},"2b3e":function(t,e,i){"use strict";i.r(e);var a=i("abed"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2c47":function(t,e,i){t.exports=i.p+"static/img/card0.eb8f3fb3.png"},"43a8":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-8f03eb66]{width:%?750?%}.online[data-v-8f03eb66]{width:%?750?%;height:%?16?%;background:#f3f3f3}.list[data-v-8f03eb66]{width:%?690?%;padding:0 %?30?%}.item[data-v-8f03eb66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #ececec;padding:%?30?% 0}.item>uni-text[data-v-8f03eb66]{color:#333;font-size:%?28?%;font-weight:600}.right[data-v-8f03eb66]{display:-webkit-box;display:-webkit-flex;display:flex}.right uni-input[data-v-8f03eb66]{text-align:right;width:%?400?%;font-size:%?24?%;color:#b8b8b8;margin-right:%?10?%}.right .iconfont[data-v-8f03eb66]{color:silver;font-weight:600600}.codeImg[data-v-8f03eb66]{width:%?690?%;padding:%?30?%}.codeImg>uni-text[data-v-8f03eb66]{font-size:%?28?%;font-weight:600;color:#333}.card[data-v-8f03eb66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?40?%}.card uni-image[data-v-8f03eb66]{width:%?328?%;height:%?221?%;border-radius:10px 10px 10px 10px}.meCertification[data-v-8f03eb66]{width:%?630?%;height:%?80?%;line-height:%?80?%;background:#91c0e1;-webkit-box-shadow:%?0?% %?10?% %?45?% %?0?% rgba(35,144,220,.6);box-shadow:%?0?% %?10?% %?45?% %?0?% rgba(35,144,220,.6);border-radius:%?10?%;barder:none;margin-top:%?40?%;color:#fff}",""]),t.exports=e},"60b4":function(t,e,i){var a=i("43a8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7e52a064",a,!0,{sourceMap:!1,shadowMode:!1})},"9c00":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"online"}),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-text",[t._v("真实姓名")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-input",{attrs:{type:"text",value:"",placeholder:"请填写您的真实姓名","data-name":"real_name"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputValue.apply(void 0,arguments)}}}),a("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",[t._v("身份证号")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-input",{attrs:{type:"idcard",value:"",placeholder:"请输入18位有效身份证号","data-name":"id_card"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputValue.apply(void 0,arguments)}}}),a("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-text",[t._v("联系方式")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-input",{attrs:{type:"number",value:"",placeholder:"请输入您的联系方式","data-name":"phone"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputValue.apply(void 0,arguments)}}}),a("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1),a("v-uni-view",{staticClass:"online"}),a("v-uni-view",{staticClass:"codeImg"},[a("v-uni-text",[t._v("上传身份证正方反面")]),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCard(1)}}},[""!=t.formNode.card_positive?a("v-uni-image",{attrs:{src:t.formNode.card_positive,mode:""}}):a("v-uni-image",{attrs:{src:i("2c47").substr(1),mode:""}})],1),a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCard(2)}}},[""!=t.formNode.card_peverse?a("v-uni-image",{attrs:{src:t.formNode.card_peverse,mode:""}}):a("v-uni-image",{attrs:{src:i("0d63").substr(1),mode:""}})],1)],1)],1),""==t.formNode.real_name||""==t.formNode.id_card||""==t.formNode.phone||""==t.formNode.card_positive||""==t.formNode.card_peverse?a("v-uni-button",{staticClass:"meCertification",attrs:{type:""}},[t._v("认证")]):a("v-uni-button",{staticClass:"meCertification",staticStyle:{background:"#2390DC"},attrs:{type:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submint.apply(void 0,arguments)}}},[t._v("认证")])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},abed:function(t,e,i){"use strict";(function(t){var a=i("ee27");i("d81d"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a3a0")),o=(getApp(),{data:function(){return{formNode:{real_name:"",id_card:"",phone:"",card_positive:"",card_peverse:""},token:"",isDisabled:!1,imgUrl:""}},onLoad:function(){this.token=uni.getStorageSync("token"),this.imgUrl=n.default.imgUrl},methods:{inputValue:function(t){var e=this.formNode,i=t.currentTarget.dataset.name,a=t.detail.value;e[i]=a,this.formNode=e},getCard:function(e){t("log",e," at pages\\meCertificationConfirm.vue:84");var i=e;this.getImg(i)},getImg:function(e){var i=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){uni.showToast({title:"图片上传中",icon:"loading"}),Promise.all(a.tempFiles.map((function(e){return new Promise((function(a,o){uni.uploadFile({url:"".concat(n.default.requestUrl,"/posts/uploads"),filePath:e.path,name:"file",header:{authorization:i.token},success:function(e){t("log",e," at pages\\meCertificationConfirm.vue:110"),a({path:JSON.parse(e.data).data})}})}))}))).then((function(a){uni.hideToast(),t("log",a[0].path.path,"++++++++++"," at pages\\meCertificationConfirm.vue:120"),1==e?(i.formNode.card_positive=a[0].path.path,t("log",i.formNode.card_positive," at pages\\meCertificationConfirm.vue:123")):i.formNode.card_peverse=a[0].path.path})).catch((function(e){return t("log",e," at pages\\meCertificationConfirm.vue:127")}))}})},submint:function(){return""==this.formNode.real_name?(wx.showToast({title:"请填写您的真实姓名",icon:"none",duration:2e3}),!1):""==this.formNode.id_card?(wx.showToast({title:"请输入18位有效身份证号",icon:"none",duration:2e3}),!1):18!=this.formNode.id_card.length?(wx.showToast({title:"请输入18位有效身份证号",icon:"none",duration:2e3}),!1):""==this.formNode.phone?(wx.showToast({title:"请输入您的联系方式",icon:"none",duration:2e3}),!1):11!=this.formNode.phone.length?(wx.showToast({title:"请输入您的联系方式",icon:"none",duration:2e3}),!1):""==this.formNode.card_positive?(wx.showToast({title:"请上传身份证正面",icon:"none",duration:2e3}),!1):""==this.formNode.card_peverse?(wx.showToast({title:"请上传身份证反面",icon:"none",duration:2e3}),!1):(uni.showLoading({title:"认证中...",duration:1e3}),void uni.request({url:"".concat(n.default.requestUrl,"/user/real-check"),method:"POST",header:{authorization:this.token},data:this.formNode,success:function(e){t("log",e," at pages\\meCertificationConfirm.vue:200"),uni.hideLoading(),e=n.default.null2str(e),t("log",e,"*-*****"," at pages\\meCertificationConfirm.vue:203"),200==e.data.status_code?(uni.showToast({title:e.data.message,icon:"none"}),setTimeout((function(t){uni.reLaunch({url:"/pages/me"})}),2e3)):uni.showToast({title:e.data.message,icon:"none"})}}))}}});e.default=o}).call(this,i("0de9")["log"])},d6ea:function(t,e,i){"use strict";i.r(e);var a=i("9c00"),n=i("2b3e");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("efdb");var s,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"8f03eb66",null,!1,a["a"],s);e["default"]=c.exports},efdb:function(t,e,i){"use strict";var a=i("60b4"),n=i.n(a);n.a}}]);