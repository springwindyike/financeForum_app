(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meEdit"],{"15d6":function(t,e,i){"use strict";i.r(e);var n=i("ffc0"),a=i("2975");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("480e");var s,c=i("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1b7fe792",null,!1,n["a"],s);e["default"]=d.exports},2975:function(t,e,i){"use strict";i.r(e);var n=i("3c45"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"3c45":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("5df3");var a=n(i("a3a0")),o=n(i("968a")),s=getApp(),c={data:function(){return{txt:"选择地址",formNode:{sex:"",credit_card:"",social_security:"",provident_fund:"",education:"",province:"",city:"",district:""},array:["男","女","无"],arrayCard:["无","有"],schoolList:["小学","初中","高中","大专","本科","硕士","博士"],index:0,setData:"",options:"",imgUrl:""}},components:{pickerAddress:o.default},onLoad:function(){this.imgUrl=a.default.imgUrl},onShow:function(){this.getformNode()},methods:{goEditSet:function(t){console.log(t);var e=t.currentTarget.dataset.type,i=t.currentTarget.dataset.name,n=t.currentTarget.dataset.title;uni.navigateTo({url:"/pages/meEditSet?name=".concat(i,"&title=").concat(n,"&type=").concat(e)})},bindPickerChange:function(t){this.index=t.target.value,"sex"==t.currentTarget.dataset.name?(this.setData=this.array[this.index],this.formNode.sex,this.setData):"credit_card"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.credit_card,this.arrayCard[this.index]):"social_security"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.social_security,this.arrayCard[this.index]):"provident_fund"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.provident_fund,this.arrayCard[this.index]):"education"==t.currentTarget.dataset.name&&(this.setData=++this.index,this.formNode.education,this.schoolList[this.index]),this.options=t.currentTarget.dataset.name,this.submit()},goAddress:function(t){console.log(t),this.txt=t.data.join("");for(var e=0;e<t.data.length;e++)this.setData=t.data[e],"0"==e?this.options="province":"1"==e?this.options="city":"2"==e&&(this.options="district"),this.submit()},getformNode:function(){var t=this;uni.showLoading({title:"用户信息获取中..."}),uni.request({url:"".concat(a.default.requestUrl,"/me"),method:"POST",header:{authorization:s.globalData.token},success:function(e){uni.hideLoading(),e=a.default.null2str(e),t.formNode=e.data,0==t.formNode.credit_card?t.formNode.credit_card="无":t.formNode.credit_card="有",0==t.formNode.social_security?t.formNode.social_security="无":t.formNode.social_security="有",0==t.formNode.provident_fund?t.formNode.provident_fund="无":t.formNode.provident_fund="有",1==t.formNode.education?t.formNode.education="小学":2==t.formNode.education?t.formNode.education="初中":3==t.formNode.education?t.formNode.education="高中":4==t.formNode.education?t.formNode.education="大专":5==t.formNode.education?t.formNode.education="本科":6==t.formNode.education?t.formNode.education="硕士":7==t.formNode.education&&(t.formNode.education="博士"),t.txt=t.formNode.province+t.formNode.city+t.formNode.district,"no_set"==t.formNode.sex?t.formNode.sex="未设置":t.formNode.sex=t.formNode.sex,console.log(t.txt)}})},submit:function(){var t=this;uni.showLoading({title:"提交中...",duration:1e6}),uni.request({url:"".concat(a.default.requestUrl,"/user/edit"),method:"POST",header:{authorization:s.globalData.token},data:{field:this.options,value:this.setData},success:function(e){uni.hideLoading(),e=a.default.null2str(e),console.log(e),"1"==e.data.status_code?(uni.showToast({title:e.data.message}),setTimeout((function(){t.getformNode()}),2e3)):uni.showToast({title:e.data.message})}})},goImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){uni.showToast({title:"图片上传中",icon:"loading"}),Promise.all(e.tempFiles.map((function(t){return new Promise((function(e,i){uni.uploadFile({url:"".concat(a.default.requestUrl,"/posts/uploads"),filePath:t.path,name:"file",header:{authorization:s.globalData.token},success:function(t){console.log(t),e({path:JSON.parse(t.data).data})}})}))}))).then((function(e){uni.hideToast(),t.imgInfo=e[0].path,t.options="avatar",t.setData=t.imgInfo.path,t.submit(),console.log(t.imgInfo,"图片")})).catch((function(t){return console.log(t)}))}})}}};e.default=c},"480e":function(t,e,i){"use strict";var n=i("b22b"),a=i.n(n);a.a},"5bc2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".edit[data-v-1b7fe792]{width:%?690?%;padding:0 %?30?% %?80?%}.edit .itemList[data-v-1b7fe792]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?% 0;border-bottom:%?2?% dashed #f7f7f7}.edit .itemList .right[data-v-1b7fe792]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:%?30?%;color:#333}.edit .itemList .right uni-image[data-v-1b7fe792]{width:%?58?%;height:%?58?%;border-radius:%?58?%;margin-right:%?20?%}.edit .itemList uni-text[data-v-1b7fe792],\r\n.right uni-text[data-v-1b7fe792],\r\n.uni-input[data-v-1b7fe792]{font-size:%?30?%;color:#898989;white-space:nowrap;margin-right:%?20?%}.edit .itemList uni-input[data-v-1b7fe792],\r\n.itemList > uni-view[data-v-1b7fe792]{width:%?520?%;font-size:%?30?%;color:#333;text-align:right;overflow:hidden}\r\n/* .edit .itemList input,.itemList>view {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n} */.edit .itemList > uni-text[data-v-1b7fe792]:first-child,.edit .itemList .moon > uni-text[data-v-1b7fe792]:first-child{font-weight:600;color:#454545;font-size:%?30?%}.edit .itemList[data-v-1b7fe792]:last-of-type{border:none}\r\n/* .edit button {\r\n\tmargin-top: 30rpx;\r\n} */.moon[data-v-1b7fe792]{width:%?690?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.moon > uni-view[data-v-1b7fe792]{width:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:center;align-content:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:right}.moon > uni-view > uni-text[data-v-1b7fe792]{width:%?460?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}.iconfont[data-v-1b7fe792]{color:#dbdbdb}",""]),t.exports=e},b22b:function(t,e,i){var n=i("5bc2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2629f98b",n,!0,{sourceMap:!1,shadowMode:!1})},ffc0:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"edit"},[i("v-uni-view",{staticClass:"itemList"},[i("v-uni-text",[t._v("头像")]),i("v-uni-view",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goImg.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgUrl+t.formNode.avatar,mode:""}}),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"itemList moon",attrs:{"data-name":"signature","data-title":"修改签名","data-type":"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goEditSet.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("签名")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.signature))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"itemList moon",attrs:{"data-name":"name","data-title":"修改姓名","data-type":"text"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goEditSet.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("真实姓名")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.name))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("v-uni-picker",{attrs:{value:t.index,range:t.array,"data-name":"sex"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("性别")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.sex))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("pickerAddress",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.goAddress.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("居住地")]),i("v-uni-view",{staticClass:"right"},[t._v(t._s(t.txt)),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("v-uni-picker",{attrs:{value:t.index,range:t.schoolList,"data-name":"education"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("学历")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.education))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList moon",attrs:{"data-name":"sesame_credit","data-title":"修改芝麻信用分","data-type":"number"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goEditSet.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("芝麻信用分")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.sesame_credit))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("v-uni-picker",{attrs:{value:t.index,range:t.arrayCard,"data-name":"credit_card"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("信用卡")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.credit_card))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("v-uni-picker",{attrs:{value:t.index,range:t.arrayCard,"data-name":"social_security"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("社保")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.social_security))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList"},[i("v-uni-picker",{attrs:{value:t.index,range:t.arrayCard,"data-name":"provident_fund"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"moon"},[i("v-uni-text",[t._v("公积金")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.provident_fund))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"itemList",attrs:{"data-name":"","data-title":"修改手机"}},[i("v-uni-text",[t._v("手机")]),i("v-uni-input",{attrs:{type:"text",value:"",placeholder:"",disabled:"ture"},model:{value:t.formNode.mobile,callback:function(e){t.$set(t.formNode,"mobile",e)},expression:"formNode.mobile"}})],1),i("v-uni-view",{staticClass:"itemList moon",attrs:{"data-name":"email","data-title":"修改邮箱","data-type":"mail"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goEditSet.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("邮箱")]),i("v-uni-view",[i("v-uni-text",[t._v(t._s(t.formNode.email))]),i("uni-icon",{staticClass:"iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-",attrs:{type:""}})],1)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))}}]);