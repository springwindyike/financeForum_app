(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-articleDetail~pages-messageDetail"],{"125f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes show-data-v-74d02768{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-74d02768{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"17bf":function(t,e,i){var n=i("125f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("069fc06e",n,!0,{sourceMap:!1,shadowMode:!1})},"1fc5":function(t,e,i){"use strict";var n=i("ee27");i("99af"),i("caad"),i("c975"),i("acd8"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("54f8")),a=i("bd2e"),o={name:"parser",data:function(){return{uid:this._uid,scaleAnimation:"",showAnimation:"",nodes:[],imgs:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,editable:Boolean,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean,useCache:Boolean},watch:{html:function(t){this.setContent(t,!0)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0;e<this.length;e++){var i=t(this[e],e,this);i&&this.setItem(e,i)}},this.imgList.setItem=function(t,e){if(e){if(e.includes("http")&&this.includes(e)){for(var i,n="",r=0;i=e[r];r++)if(n+=Math.random()>.5?i.toUpperCase():i,"/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;return n+=e.substring(r+1),this[t]=n}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}},this.nodes.length||this.setContent(this.html,!0)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this.interval)},methods:{Dom2Str:function(t){var e,i="",n=(0,r.default)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;if("text"==a.type)i+=a.text;else{for(var o in i+="<"+a.name,a.attrs||{})i+=" "+o+'="'+a.attrs[o]+'"';a.children&&a.children.length?i+=">"+this.Dom2Str(a.children)+"</"+a.name+">":i+="/>"}}}catch(s){n.e(s)}finally{n.f()}return i},setContent:function(t,e){var i=this;if(t){"string"!=typeof t&&(t=this.Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]*rpx/g,(function(t){return parseFloat(t)*a.screenWidth/750+"px"})));var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var o in a.userAgentStyles)n+=o+"{"+a.userAgentStyles[o]+"}";for(var o in this.tagStyle)n+=o+"{"+this.tagStyle[o]+"}";n+="</style>",t=n+t,this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=document.createElement("div"),this.rtf.innerHTML=t;var s,c=(0,r.default)(this.rtf.getElementsByTagName("style"));try{for(c.s();!(s=c.n()).done;){n=s.value;n.innerHTML=n.innerHTML.replace(/\s*body/g,"#rtf"+this._uid),n.setAttribute("scoped","true")}}catch(I){c.e(I)}finally{c.f()}this.lazyLoad&&IntersectionObserver&&(this._observer&&this._observer.disconnect(),this._observer=new IntersectionObserver((function(t){var e,n=(0,r.default)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.isIntersecting&&(a.target.src=a.target.getAttribute("data-src"),a.target.removeAttribute("data-src"),i._observer.unobserve(a.target))}}catch(I){n.e(I)}finally{n.f()}}),{rootMargin:"900px 0px 900px 0px"}));var l=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText}),this.imgList.length=0;for(var d,h=this.rtf.getElementsByTagName("img"),f=0,m=0;d=h[f];f++)d.style.maxWidth="100%",this.domain&&"/"==d.getAttribute("src")[0]&&("/"==d.getAttribute("src")[1]?d.src=(this.domain.includes("://")?this.domain.split("://")[0]:"http")+":"+d.getAttribute("src"):d.src=this.domain+d.getAttribute("src")),d.hasAttribute("ignore")||"A"==d.parentElement.nodeName||(d.i=m++,l.imgList.push(d.src),d.onclick=function(){var t=!0;this.ignore=function(){return t=!1},l.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:l.imgList})}),d.onerror=function(){l.$emit("error",{source:"img",target:this})},l.lazyLoad&&this._observer&&0!=d.i&&(d.setAttribute("data-src",d.src),d.removeAttribute("src"),this._observer.observe(d));var p,g=this.rtf.getElementsByTagName("a"),v=(0,r.default)(g);try{for(v.s();!(p=v.n()).done;){var b=p.value;b.onclick=function(t){var e=!0,i=this.getAttribute("href");if(l.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])l.useAnchor&&l.navigateTo({id:i.substring(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(I){v.e(I)}finally{v.f()}var y=this.rtf.getElementsByTagName("video");l.videoContexts=y;var x,w=(0,r.default)(y);try{for(w.s();!(x=w.n()).done;){var T=x.value;T.style.maxWidth="100%",T.onerror=function(){l.$emit("error",{source:"video",target:this})},T.onplay=function(){if(l.autopause){var t,e=(0,r.default)(l.videoContexts);try{for(e.s();!(t=e.n()).done;){var i=t.value;i!=this&&i.pause()}}catch(I){e.e(I)}finally{e.f()}}}}}catch(I){w.e(I)}finally{w.f()}var A,_,k=this.rtf.getElementsByTagName("audios"),S=(0,r.default)(k);try{for(S.s();!(A=S.n()).done;){var C=A.value;C.onerror=function(t){l.$emit("error",{source:"audio",target:this})}}}catch(I){S.e(I)}finally{S.f()}document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.document=this.rtf,this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAnimation=""}),500),this.interval=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.createSelectorQuery(),i.width=t[0].width,t[0].height==_&&(i.$emit("ready",t[0]),clearInterval(i.interval)),_=t[0].height}),350),this.showWithAnimation&&(this.showAnimation="animation:show .5s")}else this.rtf&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.html||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e];return null},preLoad:function(t,e){t.constructor==Array&&(t=this.Dom2Str(t));var i=document.createElement("div");i.innerHTML=t;for(var n=i.querySelectorAll("img"),r=n.length-1;r>=e;r--)n[r].removeAttribute("src")},_load:function(t){},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this.lastTime<300){if(this.zoomIn)this.animation.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(t.touches[0].pageY-t.currentTarget.offsetTop+this.initY)/2-t.touches[0].clientY,duration:400});else{var e=t.touches[0].pageX-t.currentTarget.offsetLeft;this.initY=t.touches[0].pageY-t.currentTarget.offsetTop,this.animation=uni.createAnimation({transformOrigin:"".concat(e,"px ").concat(this.initY,"px 0"),timingFunction:"ease-in-out"}),this.animation.scale(2).step(),this.tMax=e/2,this.tMin=(e-this.width)/2,this.tX=0}this.zoomIn=!this.zoomIn,this.scaleAnimation=this.animation.export()}this.lastTime=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this.initX=this.lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this.lastX;if(this.zoomIn&&1==t.touches.length&&Math.abs(e)>20){if(this.lastX=t.touches[0].pageX,this.tX<=this.tMin&&e<0||this.tX>=this.tMax&&e>0)return;this.tX+=e*Math.abs(this.lastX-this.initX)*.05,this.tX<this.tMin&&(this.tX=this.tMin),this.tX>this.tMax&&(this.tX=this.tMax),this.animation.translateX(this.tX).step(),this.scaleAnimation=this.animation.export()}}}};e.default=o},"4a37":function(t,e,i){"use strict";var n=i("17bf"),r=i.n(n);r.a},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return r}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("dde1");function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){s=!0,a=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(s)throw a}}}}},"5bc5":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"inherit"}},[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{staticClass:"_top",style:t.showAnimation+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{animation:t.scaleAnimation},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid,contentEditable:t.editable}})]),t._l(t.imgs,(function(e,n){return i("v-uni-image",{key:n,attrs:{id:n,src:e,hidden:!0},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t._load.apply(void 0,arguments)}}})}))],2)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},b6802:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}i.d(e,"a",(function(){return n}))},bd2e:function(t,e,i){(function(e){function n(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e,n=t.split(","),r=n.length;r--;)i[n[r]]=!0;return i}i("99af"),i("caad"),i("c975"),i("a15b"),i("fb6a"),i("d3b7"),i("acd8"),i("e25e"),i("ac1f"),i("25f0"),i("2532"),i("466d"),i("5319"),i("1276"),i("498a");var r=n("align,allowfullscreen,alt,app-id,appid,apid,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,frameborder,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,unitId,width,xmlns"),a=n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,u,ul,video"),o=n("address,article,aside,body,center,cite,footer,header,html,nav,pre,section"),s=n("area,base,basefont,canvas,circle,command,ellipse,frame,head,input,isindex,keygen,line,link,map,meta,param,path,polygon,rect,script,source,svg,textarea,track,use,wbr,embed,iframe"),c=n("a,colgroup,fieldset,legend,picture,table,tbody,td,tfoot,th,thead,tr"),l=n("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),u=n(" , ,\t,\r,\n,\f"),d={a:"color:#366092;word-break:break-all;padding:1.5px 0 1.5px 0",address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"},h=wx.getSystemInfoSync().screenWidth;function f(t){for(var e=t._STACK.length;e--;){if(c[t._STACK[e].name])return!1;t._STACK[e].c=1}return!0}o.caption=!0,t.exports={highlight:null,LabelHandler:function(t,i){var n=t.attrs,r=i.CssHandler.match(t.name,n,t)+(n.style||"");switch(t.name){case"div":case"p":n.align&&(r="text-align:".concat(n.align,";").concat(r),n.align=void 0);break;case"img":n["data-src"]&&(n.src=n.src||n["data-src"],n["data-src"]=void 0),n.width&&parseInt(n.width)>h&&(r+=";height:auto !important"),n.src&&!n.ignore&&(f(i)?n.i=(i._imgNum++).toString():n.ignore="T");break;case"a":case"ad":f(i);break;case"font":if(n.color&&(r="color:".concat(n.color,";").concat(r),n.color=void 0),n.face&&(r="font-family:".concat(n.face,";").concat(r),n.face=void 0),n.size){var a=parseInt(n.size);a<1?a=1:a>7&&(a=7);var o=["xx-small","x-small","small","medium","large","x-large","xx-large"];r="font-size:".concat(o[a-1],";").concat(r),n.size=void 0}break;case"video":case"audio":n.id?i["_".concat(t.name,"Num")]++:n.id=t.name+ ++i["_".concat(t.name,"Num")],"video"==t.name&&(n.width&&(r="width:".concat(parseFloat(n.width)+n.width.includes("%")?"%":"px",";").concat(r),n.width=void 0),n.height&&(r="height:".concat(parseFloat(n.height)+n.height.includes("%")?"%":"px",";").concat(r),n.height=void 0),i._videoNum>3&&(t.lazyLoad=!0)),n.source=[],n.src&&n.source.push(n.src),n.controls||n.autoplay||e("warn","存在没有 controls 属性的 ".concat(t.name," 标签，可能导致无法播放"),t," at components\\libs\\config.js:147"),f(i);break;case"source":var s=i._STACK[i._STACK.length-1];if(!s||!n.src)break;if("video"==s.name||"audio"==s.name)s.attrs.source.push(n.src);else{var c=n.media;"picture"==s.name&&!s.attrs.src&&(!c||c.includes("px")&&(-1!=(m=c.indexOf("min-width"))&&-1!=(m=c.indexOf(":",m+8))&&h>parseInt(c.substring(m+1))||-1!=(m=c.indexOf("max-width"))&&-1!=(m=c.indexOf(":",m+8))&&h<parseInt(c.substring(m+1))))&&(s.attrs.src=n.src)}}var l=r.split(";"),d={};r="";for(var m=0,p=l.length;m<p;m++){var g=l[m].split(":");if(!(g.length<2)){var v=g[0].trim().toLowerCase(),b=g.slice(1).join(":").trim();if(b.includes("url")){var y=b.indexOf("(");if(-1!=y++){while('"'==b[y]||"'"==b[y]||u[b[y]])y++;"/"==b[y]&&("/"==b[y+1]?b=b.substring(0,y)+i._protocol+":"+b.substring(y):i._domain&&(b=b.substring(0,y)+i._domain+b.substring(y)))}}else b.includes("rpx")&&(b=b.replace(/[0-9.]*rpx/g,(function(t){return parseFloat(t)*h/750+"px"})));b.includes("-webkit")||b.includes("-moz")||b.includes("-ms")||b.includes("-o")||b.includes("safe")?r+=";".concat(v,":").concat(b):d[v]&&!b.includes("import")&&d[v].includes("import")||(d[v]=b)}}for(var v in"img"==t.name&&d.width&&d.width.includes("%")&&parseInt(d.width)>h&&(d.height="auto !important"),d)r+=";".concat(v,":").concat(d[v]);r=r.substr(1),r&&(n.style=r),i._useAnchor&&n.id&&f(i)},trustAttrs:r,trustTags:a,blockTags:o,ignoreTags:s,selfClosingTags:l,blankChar:u,userAgentStyles:d,screenWidth:h}}).call(this,i("0de9")["log"])},dde1:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3");var n=i("b6802");function r(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(n["a"])(t,e):void 0}}},def7:function(t,e,i){"use strict";i.r(e);var n=i("5bc5"),r=i("fafb");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("4a37");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"74d02768",null,!1,n["a"],o);e["default"]=c.exports},fafb:function(t,e,i){"use strict";i.r(e);var n=i("1fc5"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a}}]);