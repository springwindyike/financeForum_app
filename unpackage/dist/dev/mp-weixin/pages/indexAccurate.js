(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/indexAccurate"],{286:
/*!*****************************************************************************!*\
  !*** D:/workspan/financeForum_app/main.js?{"page":"pages%2FindexAccurate"} ***!
  \*****************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);e(n(/*! vue */2));function e(t){return t&&t.__esModule?t:{default:t}}t(e(n(/*! ./pages/indexAccurate.vue */287)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},287:
/*!************************************************************!*\
  !*** D:/workspan/financeForum_app/pages/indexAccurate.vue ***!
  \************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var a=n(/*! ./indexAccurate.vue?vue&type=template&id=2673c3ab& */288),i=n(/*! ./indexAccurate.vue?vue&type=script&lang=js& */290);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n(/*! ./indexAccurate.vue?vue&type=style&index=0&lang=css& */292);var r=n(/*! ../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */14),u=Object(r.default)(i.default,a.render,a.staticRenderFns,!1,null,null,null);u.options.__file="workspan/financeForum_app/pages/indexAccurate.vue",e.default=u.exports},288:
/*!*******************************************************************************************!*\
  !*** D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=template&id=2673c3ab& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var a=n(/*! -!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./indexAccurate.vue?vue&type=template&id=2673c3ab& */289);n.d(e,"render",function(){return a.render}),n.d(e,"staticRenderFns",function(){return a.staticRenderFns})},289:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=template&id=2673c3ab& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return a}),n.d(e,"staticRenderFns",function(){return i});var a=function(){var t=this.$createElement;this._self._c},i=[];a._withStripped=!0},290:
/*!*************************************************************************************!*\
  !*** D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var a=n(/*! -!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./indexAccurate.vue?vue&type=script&lang=js& */291),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},291:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=(a=n(/*! ../common/helper.js */21))&&a.__esModule?a:{default:a};var o=getApp(),r={data:function(){return{list:[],page:"1",page_size:"10",boardId:"1",imgUrl:""}},onShow:function(t){},onLoad:function(e){this.imgUrl=o.globalData.imgUrl,this.boardId=e.id,this.getList(),t.setNavigationBarTitle({title:e.name})},onLaunch:function(){},methods:{getList:function(){var e=this;t.request({url:"".concat(i.default.requestUrl,"/posts/board-posts"),method:"GET",header:{authorization:o.globalData.token},data:{board_id:this.boardId,page_size:this.page_size,page:this.page},success:function(n){n=i.default.null2str(n),console.log(n),200==n.data.status_code?(e.list=e.list.concat(n.data.data),0==n.data.data&&t.showToast({title:"暂无更多数据",icon:"none"})):t.showToast({title:n.data.message})}})},onReachBottom:function(){this.page++,this.getList()}}};e.default=r}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},292:
/*!*********************************************************************************************!*\
  !*** D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var a=n(/*! -!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./indexAccurate.vue?vue&type=style&index=0&lang=css& */293),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e.default=i.a},293:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspan/financeForum_app/pages/indexAccurate.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[286,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/indexAccurate.js.map