(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meEdit"],{"15d6":function(t,e,o){"use strict";o.r(e);var a=o("b9ef"),i=o("2975");for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o("fb19");var r,d=o("f0c5"),s=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=s.exports},2975:function(t,e,o){"use strict";o.r(e);var a=o("7762"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},7762:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("a3a0"));function n(t){return t&&t.__esModule?t:{default:t}}var r=getApp(),d=function(){return Promise.all([o.e("common/vendor"),o.e("components/wangding-pickerAddress")]).then(o.bind(null,"968a"))},s={data:function(){return{txt:"选择地址",formNode:{sex:"",credit_card:"",social_security:"",provident_fund:"",education:"",province:"",city:"",district:""},array:["男","女","无"],arrayCard:["无","有"],schoolList:["小学","初中","高中","大专","本科","硕士","博士"],index:0,setData:"",options:"",imgUrl:""}},components:{pickerAddress:d},onLoad:function(){this.imgUrl=i.default.imgUrl},onShow:function(){this.getformNode()},methods:{goEditSet:function(e){t("log",e," at pages\\meEdit.vue:157");var o=e.currentTarget.dataset.type,i=e.currentTarget.dataset.name,n=e.currentTarget.dataset.title;a.navigateTo({url:"/pages/meEditSet?name=".concat(i,"&title=").concat(n,"&type=").concat(o)})},bindPickerChange:function(t){this.index=t.target.value,"sex"==t.currentTarget.dataset.name?(this.setData=this.array[this.index],this.formNode.sex,this.setData):"credit_card"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.credit_card,this.arrayCard[this.index]):"social_security"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.social_security,this.arrayCard[this.index]):"provident_fund"==t.currentTarget.dataset.name?(this.setData=this.index,this.formNode.provident_fund,this.arrayCard[this.index]):"education"==t.currentTarget.dataset.name&&(this.setData=++this.index,this.formNode.education,this.schoolList[this.index]),this.options=t.currentTarget.dataset.name,this.submit()},goAddress:function(e){t("log",e," at pages\\meEdit.vue:187"),this.txt=e.data.join("");for(var o=0;o<e.data.length;o++)this.setData=e.data[o],"0"==o?this.options="province":"1"==o?this.options="city":"2"==o&&(this.options="district"),this.submit()},getformNode:function(){var e=this;a.showLoading({title:"用户信息获取中..."}),a.request({url:"".concat(i.default.requestUrl,"/me"),method:"POST",header:{authorization:r.globalData.token},success:function(o){a.hideLoading(),o=i.default.null2str(o),e.formNode=o.data,0==e.formNode.credit_card?e.formNode.credit_card="无":e.formNode.credit_card="有",0==e.formNode.social_security?e.formNode.social_security="无":e.formNode.social_security="有",0==e.formNode.provident_fund?e.formNode.provident_fund="无":e.formNode.provident_fund="有",1==e.formNode.education?e.formNode.education="小学":2==e.formNode.education?e.formNode.education="初中":3==e.formNode.education?e.formNode.education="高中":4==e.formNode.education?e.formNode.education="大专":5==e.formNode.education?e.formNode.education="本科":6==e.formNode.education?e.formNode.education="硕士":7==e.formNode.education&&(e.formNode.education="博士"),e.txt=e.formNode.province+e.formNode.city+e.formNode.district,"no_set"==e.formNode.sex?e.formNode.sex="未设置":e.formNode.sex=e.formNode.sex,t("log",e.txt," at pages\\meEdit.vue:252")}})},submit:function(){var e=this;a.showLoading({title:"提交中...",duration:1e6}),a.request({url:"".concat(i.default.requestUrl,"/user/edit"),method:"POST",header:{authorization:r.globalData.token},data:{field:this.options,value:this.setData},success:function(o){a.hideLoading(),o=i.default.null2str(o),t("log",o," at pages\\meEdit.vue:276"),"1"==o.data.status_code?(a.showToast({title:o.data.message}),setTimeout(function(){e.getformNode()},2e3)):a.showToast({title:o.data.message})}})},goImg:function(){var e=this;a.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(o){a.showToast({title:"图片上传中",icon:"loading"}),Promise.all(o.tempFiles.map(function(e){return new Promise(function(o,n){a.uploadFile({url:"".concat(i.default.requestUrl,"/posts/uploads"),filePath:e.path,name:"file",header:{authorization:r.globalData.token},success:function(e){t("log",e," at pages\\meEdit.vue:314"),o({path:JSON.parse(e.data).data})}})})})).then(function(o){a.hideToast(),e.imgInfo=o[0].path,e.options="avatar",e.setData=e.imgInfo.path,e.submit(),t("log",e.imgInfo,"图片"," at pages\\meEdit.vue:328")}).catch(function(e){return t("log",e," at pages\\meEdit.vue:329")})}})}}};e.default=s}).call(this,o("0de9")["default"],o("6e42")["default"])},a99c:function(t,e,o){},b9ef:function(t,e,o){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"b",function(){return i}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return a})},f250:function(t,e,o){"use strict";(function(t){o("b5b4"),o("921b");a(o("66fd"));var e=a(o("15d6"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},fb19:function(t,e,o){"use strict";var a=o("a99c"),i=o.n(a);i.a}},[["f250","common/runtime","common/vendor"]]]);