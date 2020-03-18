(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jyf-parser"],{"2a6a":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,s=function(){return n.e("components/libs/trees").then(n.bind(null,"caa4"))},r={},a=(n("7d63"),n("f2ee"));function c(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}var l=n("bd2e"),h={name:"parser",data:function(){return{loadVideo:!1,scaleAnimation:"",showAnimation:"",nodes:[],imgs:[]}},components:{trees:s},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean,useCache:Boolean},watch:{html:function(t){this.setContent(t,!0)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0;e<this.length;e++){var n=t(this[e],e,this);n&&this.setItem(e,n)}},this.imgList.setItem=function(t,e){var n=this;if(e&&(this[t]=e,e.includes("data:image"))){var i=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!i)return;var o="_doc/parser_tmp/".concat(Date.now(),".").concat(i[1]),s=new plus.nativeObj.Bitmap;s.loadBase64Data(e,function(){s.save(o,{},function(){s.clear(),n[t]=o})})}},this.nodes.length||this.setContent(this.html,!0)},beforeDestroy:function(){this.imgList.each(function(t){t&&t.includes("_doc")&&plus.io.resolveLocalFileSystemURL(t,function(t){t.remove()})}),clearInterval(this.interval)},methods:{setContent:function(e,n){var s,h=this;if(!e)return this.nodes=[];if("string"==typeof e){var d=new a(e,this);if(this.useCache){var u=c(e);r[u]?this.nodes=r[u]:(this.nodes=d.parse(),r[u]=this.nodes)}else this.nodes=d.parse();this.$emit("parse",this.nodes)}else if("[object Array]"==Object.prototype.toString.call(e)){if(e.length&&"Parser"!=e[0].PoweredBy){d=new a(e,this);(function t(e){for(var n,i=0;n=e[i];i++)if("text"!=n.type){for(var o in n.attrs=n.attrs||{},n.attrs)l.trustAttrs[o]?"string"!=typeof n.attrs[o]&&(n.attrs[o]=n.attrs[o].toString()):n.attrs[o]=void 0;l.LabelHandler(n,d),l.ignoreTags[n.name]?e.splice(i--,1):n.children&&n.children.length?(d._STACK.push(n),t(n.children),d.popNode(d._STACK.pop())):n.children=void 0}})(e)}this.nodes=e}else{if("object"!=typeof e||!e.nodes)return t("warn","错误的 html 类型："+typeof e," at components\\jyf-parser.vue:383");this.nodes=e.nodes,t("warn","错误的 html 类型：object 类型已废弃"," at components\\jyf-parser.vue:381")}this.loadVideo=!1,o&&(this.document=new o(this.nodes,"nodes",this)),this.$nextTick(function(){h.imgList.length=0,h.videoContexts=[];var t=function t(e){for(var n=function(){var n=e[o];if("trees"==n.$options.name)for(s=!1,r=n.nodes.length;a=n.nodes[--r];)a.c||("img"==a.name?(a.attrs.i&&h.imgList.setItem(a.attrs.i,a.attrs.src),s||"0"==a.attrs.i||(s=!0,h.lazyLoad&&i.createIntersectionObserver?(n._observer&&n._observer.disconnect(),n._observer=i.createIntersectionObserver(n),n._observer.relativeToViewport({top:900,bottom:900}).observe("._img",function(t){n.imgLoad=!0,n._observer&&(n._observer.disconnect(),n._observer=null)})):n.imgLoad=!0)):"video"==a.name?(c=i.createVideoContext(a.attrs.id,n),c.id=a.attrs.id,h.videoContexts.unshift(c)):"title"==a.name&&h.autosetTitle&&"text"==a.children[0].type&&i.setNavigationBarTitle({title:a.children[0].text}),a.attrs&&a.attrs.id&&(h.anchors=h.anchors||[],h.anchors.push({id:a.attrs.id,node:n})));n.$children.length&&t(n.$children)},o=e.length;o--;){var s,r,a,c;n()}};t(h.$children),setTimeout(function(){h.loadVideo=!0},3e3)}),this.interval=setInterval(function(){i.createSelectorQuery().in(h).select("._top").boundingClientRect().exec(function(t){h.width=t[0].width,t[0].height==s&&(h.$emit("ready",t[0]),clearInterval(h.interval)),s=t[0].height})},350),this.showWithAnimation&&(this.showAnimation="animation:show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.html||this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var o="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";o&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),o&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});var n=function(n,o){i.createSelectorQuery().in(o||e).select(n).boundingClientRect().selectViewport().scrollOffset().exec(function(e){if(!e||!e[0])return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=e[1].scrollTop+e[0].top,i.pageScrollTo(t)})};if(t.id){var o=!0,s=!1,r=void 0;try{for(var a,c=this.anchors[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var l=a.value;l.id==t.id&&n("#"+t.id+", ."+t.id,l.node)}}catch(h){s=!0,r=h}finally{try{o||null==c.return||c.return()}finally{if(s)throw r}}}else n("._top")},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e];return null},preLoad:function(t,e){if("string"==typeof t){var n=c(t);t=new a(t,this).parse(),r[n]=t}var i=[];(function t(e){for(var n,o=0;n=e[o++];)"img"==n.name&&n.attrs.src&&!i.includes(n.attrs.src)&&i.push(n.attrs.src),t(n.children||[])})(t),e&&(i=i.slice(0,e)),this.wait=(this.wait||[]).concat(i),this.imgs?this.imgs.length<15&&(this.imgs=this.imgs.concat(this.wait.splice(0,15-this.imgs.length))):this.imgs=this.wait.splice(0,15)},_load:function(t){this.wait.length&&this.$set(this.imgs,t.target.id,this.wait.shift())},_tap:function(t){},_touchstart:function(t){},_touchmove:function(t){}}};e.default=h}).call(this,n("0de9")["default"],n("6e42")["default"])},"2c26":function(t,e,n){},"43bc":function(t,e,n){"use strict";var i=n("2c26"),o=n.n(i);o.a},"62dc":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},def7:function(t,e,n){"use strict";n.r(e);var i=n("62dc"),o=n("fafb");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("43bc");var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},fafb:function(t,e,n){"use strict";n.r(e);var i=n("2a6a"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jyf-parser-create-component',
    {
        'components/jyf-parser-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("def7"))
        })
    },
    [['components/jyf-parser-create-component']]
]);