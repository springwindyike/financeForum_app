(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-articleDetail~pages-messageDetail"],{"1fc5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("a481"),i("ac4d"),i("8a81"),i("ac6a"),i("4917"),i("6762"),i("2fdb");var r=i("bd2e"),n={name:"parser",data:function(){return{uid:this._uid,scaleAnimation:"",showAnimation:"",nodes:[],imgs:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,editable:Boolean,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean,useCache:Boolean},watch:{html:function(t){this.setContent(t,!0)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0;e<this.length;e++){var i=t(this[e],e,this);i&&this.setItem(e,i)}},this.imgList.setItem=function(t,e){if(e){if(e.includes("http")&&this.includes(e)){for(var i,r="",n=0;i=e[n];n++)if(r+=Math.random()>.5?i.toUpperCase():i,"/"==i&&"/"!=e[n-1]&&"/"!=e[n+1])break;return r+=e.substring(n+1),this[t]=r}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}},this.nodes.length||this.setContent(this.html,!0)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this.interval)},methods:{Dom2Str:function(t){var e="",i=!0,r=!1,n=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0){var s=a.value;if("text"==s.type)e+=s.text;else{for(var l in e+="<"+s.name,s.attrs||{})e+=" "+l+'="'+s.attrs[l]+'"';s.children&&s.children.length?e+=">"+this.Dom2Str(s.children)+"</"+s.name+">":e+="/>"}}}catch(c){r=!0,n=c}finally{try{i||null==o.return||o.return()}finally{if(r)throw n}}return e},setContent:function(t,e){var i=this;if(t){"string"!=typeof t&&(t=this.Dom2Str(t.nodes||t)),t.includes("rpx")&&(t=t.replace(/[0-9.]*rpx/g,(function(t){return parseFloat(t)*r.screenWidth/750+"px"})));var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";for(var a in r.userAgentStyles)n+=a+"{"+r.userAgentStyles[a]+"}";for(var a in this.tagStyle)n+=a+"{"+this.tagStyle[a]+"}";n+="</style>",t=n+t,this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=document.createElement("div"),this.rtf.innerHTML=t;var o=!0,s=!1,l=void 0;try{for(var c,u=this.rtf.getElementsByTagName("style")[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){n=c.value;n.innerHTML=n.innerHTML.replace(/\s*body/g,"#rtf"+this._uid),n.setAttribute("scoped","true")}}catch(W){s=!0,l=W}finally{try{o||null==u.return||u.return()}finally{if(s)throw l}}this.lazyLoad&&IntersectionObserver&&(this._observer&&this._observer.disconnect(),this._observer=new IntersectionObserver((function(t){var e=!0,r=!1,n=void 0;try{for(var a,o=t[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;s.isIntersecting&&(s.target.src=s.target.getAttribute("data-src"),s.target.removeAttribute("data-src"),i._observer.unobserve(s.target))}}catch(W){r=!0,n=W}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}),{rootMargin:"900px 0px 900px 0px"}));var h=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText}),this.imgList.length=0;for(var f,m=this.rtf.getElementsByTagName("img"),p=0,g=0;f=m[p];p++)f.style.maxWidth="100%",this.domain&&"/"==f.getAttribute("src")[0]&&("/"==f.getAttribute("src")[1]?f.src=(this.domain.includes("://")?this.domain.split("://")[0]:"http")+":"+f.getAttribute("src"):f.src=this.domain+f.getAttribute("src")),f.hasAttribute("ignore")||"A"==f.parentElement.nodeName||(f.i=g++,h.imgList.push(f.src),f.onclick=function(){var t=!0;this.ignore=function(){return t=!1},h.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:h.imgList})}),f.onerror=function(){h.$emit("error",{source:"img",target:this})},h.lazyLoad&&this._observer&&0!=f.i&&(f.setAttribute("data-src",f.src),f.removeAttribute("src"),this._observer.observe(f));var v=this.rtf.getElementsByTagName("a"),b=!0,y=!1,x=void 0;try{for(var w,T=v[Symbol.iterator]();!(b=(w=T.next()).done);b=!0){var A=w.value;A.onclick=function(t){var e=!0,i=this.getAttribute("href");if(h.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])h.useAnchor&&h.navigateTo({id:i.substring(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(W){y=!0,x=W}finally{try{b||null==T.return||T.return()}finally{if(y)throw x}}var _=this.rtf.getElementsByTagName("video");h.videoContexts=_;var k=!0,S=!1,C=void 0;try{for(var I,M=_[Symbol.iterator]();!(k=(I=M.next()).done);k=!0){var X=I.value;X.style.maxWidth="100%",X.onerror=function(){h.$emit("error",{source:"video",target:this})},X.onplay=function(){if(h.autopause){var t=!0,e=!1,i=void 0;try{for(var r,n=h.videoContexts[Symbol.iterator]();!(t=(r=n.next()).done);t=!0){var a=r.value;a!=this&&a.pause()}}catch(W){e=!0,i=W}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}}}}catch(W){S=!0,C=W}finally{try{k||null==M.return||M.return()}finally{if(S)throw C}}var L,B=this.rtf.getElementsByTagName("audios"),E=!0,z=!1,N=void 0;try{for(var O,$=B[Symbol.iterator]();!(E=(O=$.next()).done);E=!0){var D=O.value;D.onerror=function(t){h.$emit("error",{source:"audio",target:this})}}}catch(W){z=!0,N=W}finally{try{E||null==$.return||$.return()}finally{if(z)throw N}}document.getElementById("rtf"+this._uid).appendChild(this.rtf),this.document=this.rtf,this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAnimation=""}),500),this.interval=setInterval((function(){var t=[i.rtf.getBoundingClientRect()];i.createSelectorQuery(),i.width=t[0].width,t[0].height==L&&(i.$emit("ready",t[0]),clearInterval(i.interval)),L=t[0].height}),350),this.showWithAnimation&&(this.showAnimation="animation:show .5s")}else this.rtf&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.html||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop,uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e];return null},preLoad:function(t,e){t.constructor==Array&&(t=this.Dom2Str(t));var i=document.createElement("div");i.innerHTML=t;for(var r=i.querySelectorAll("img"),n=r.length-1;n>=e;n--)r[n].removeAttribute("src")},_load:function(t){},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this.lastTime<300){if(this.zoomIn)this.animation.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(t.touches[0].pageY-t.currentTarget.offsetTop+this.initY)/2-t.touches[0].clientY,duration:400});else{var e=t.touches[0].pageX-t.currentTarget.offsetLeft;this.initY=t.touches[0].pageY-t.currentTarget.offsetTop,this.animation=uni.createAnimation({transformOrigin:"".concat(e,"px ").concat(this.initY,"px 0"),timingFunction:"ease-in-out"}),this.animation.scale(2).step(),this.tMax=e/2,this.tMin=(e-this.width)/2,this.tX=0}this.zoomIn=!this.zoomIn,this.scaleAnimation=this.animation.export()}this.lastTime=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this.initX=this.lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this.lastX;if(this.zoomIn&&1==t.touches.length&&Math.abs(e)>20){if(this.lastX=t.touches[0].pageX,this.tX<=this.tMin&&e<0||this.tX>=this.tMax&&e>0)return;this.tX+=e*Math.abs(this.lastX-this.initX)*.05,this.tX<this.tMin&&(this.tX=this.tMin),this.tX>this.tMax&&(this.tX=this.tMax),this.animation.translateX(this.tX).step(),this.scaleAnimation=this.animation.export()}}}};e.default=n},"4a37":function(t,e,i){"use strict";var r=i("504d"),n=i.n(r);n.a},"504d":function(t,e,i){var r=i("6f7b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("088f08d2",r,!0,{sourceMap:!1,shadowMode:!1})},"5bc5":function(t,e,i){"use strict";var r,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"inherit"}},[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{staticClass:"_top",style:t.showAnimation+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{animation:t.scaleAnimation},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[i("div",{attrs:{id:"rtf"+t.uid,contentEditable:t.editable}})]),t._l(t.imgs,(function(e,r){return i("v-uni-image",{key:r,attrs:{id:r,src:e,hidden:!0},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t._load.apply(void 0,arguments)}}})}))],2)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}))},"6f7b":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"@-webkit-keyframes show-data-v-74d02768{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-74d02768{0%{opacity:0}100%{opacity:1}}\n\n",""]),t.exports=e},bd2e:function(t,e,i){"use strict";function r(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e,r=t.split(","),n=r.length;n--;)i[r[n]]=!0;return i}i("a481"),i("6762"),i("2fdb"),i("6b54"),i("4917"),i("28a5");var n=r("align,allowfullscreen,alt,app-id,appid,apid,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,frameborder,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,unitId,width,xmlns"),a=r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,u,ul,video"),o=r("address,article,aside,body,center,cite,footer,header,html,nav,pre,section"),s=r("area,base,basefont,canvas,circle,command,ellipse,frame,head,input,isindex,keygen,line,link,map,meta,param,path,polygon,rect,script,source,svg,textarea,track,use,wbr,embed,iframe"),l=r("a,colgroup,fieldset,legend,picture,table,tbody,td,tfoot,th,thead,tr"),c=r("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),u=r(" , ,\t,\r,\n,\f"),h={a:"color:#366092;word-break:break-all;padding:1.5px 0 1.5px 0",address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",img:"max-width:100%",mark:"background-color:yellow",picture:"max-width:100%",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"},d=wx.getSystemInfoSync().screenWidth;function f(t){for(var e=t._STACK.length;e--;){if(l[t._STACK[e].name])return!1;t._STACK[e].c=1}return!0}o.caption=!0,t.exports={highlight:null,LabelHandler:function(t,e){var i=t.attrs,r=e.CssHandler.match(t.name,i,t)+(i.style||"");switch(t.name){case"div":case"p":i.align&&(r="text-align:".concat(i.align,";").concat(r),i.align=void 0);break;case"img":i["data-src"]&&(i.src=i.src||i["data-src"],i["data-src"]=void 0),i.width&&parseInt(i.width)>d&&(r+=";height:auto !important"),i.src&&!i.ignore&&(f(e)?i.i=(e._imgNum++).toString():i.ignore="T");break;case"a":case"ad":f(e);break;case"font":if(i.color&&(r="color:".concat(i.color,";").concat(r),i.color=void 0),i.face&&(r="font-family:".concat(i.face,";").concat(r),i.face=void 0),i.size){var n=parseInt(i.size);n<1?n=1:n>7&&(n=7);var a=["xx-small","x-small","small","medium","large","x-large","xx-large"];r="font-size:".concat(a[n-1],";").concat(r),i.size=void 0}break;case"video":case"audio":i.id?e["_".concat(t.name,"Num")]++:i.id=t.name+ ++e["_".concat(t.name,"Num")],"video"==t.name&&(i.width&&(r="width:".concat(parseFloat(i.width)+i.width.includes("%")?"%":"px",";").concat(r),i.width=void 0),i.height&&(r="height:".concat(parseFloat(i.height)+i.height.includes("%")?"%":"px",";").concat(r),i.height=void 0),e._videoNum>3&&(t.lazyLoad=!0)),i.source=[],i.src&&i.source.push(i.src),i.controls||i.autoplay||console.warn("存在没有 controls 属性的 ".concat(t.name," 标签，可能导致无法播放"),t),f(e);break;case"source":var o=e._STACK[e._STACK.length-1];if(!o||!i.src)break;if("video"==o.name||"audio"==o.name)o.attrs.source.push(i.src);else{var s=i.media;"picture"==o.name&&!o.attrs.src&&(!s||s.includes("px")&&(-1!=(h=s.indexOf("min-width"))&&-1!=(h=s.indexOf(":",h+8))&&d>parseInt(s.substring(h+1))||-1!=(h=s.indexOf("max-width"))&&-1!=(h=s.indexOf(":",h+8))&&d<parseInt(s.substring(h+1))))&&(o.attrs.src=i.src)}}var l=r.split(";"),c={};r="";for(var h=0,m=l.length;h<m;h++){var p=l[h].split(":");if(!(p.length<2)){var g=p[0].trim().toLowerCase(),v=p.slice(1).join(":").trim();if(v.includes("url")){var b=v.indexOf("(");if(-1!=b++){while('"'==v[b]||"'"==v[b]||u[v[b]])b++;"/"==v[b]&&("/"==v[b+1]?v=v.substring(0,b)+e._protocol+":"+v.substring(b):e._domain&&(v=v.substring(0,b)+e._domain+v.substring(b)))}}else v.includes("rpx")&&(v=v.replace(/[0-9.]*rpx/g,(function(t){return parseFloat(t)*d/750+"px"})));v.includes("-webkit")||v.includes("-moz")||v.includes("-ms")||v.includes("-o")||v.includes("safe")?r+=";".concat(g,":").concat(v):c[g]&&!v.includes("import")&&c[g].includes("import")||(c[g]=v)}}for(var g in"img"==t.name&&c.width&&c.width.includes("%")&&parseInt(c.width)>d&&(c.height="auto !important"),c)r+=";".concat(g,":").concat(c[g]);r=r.substr(1),r&&(i.style=r),e._useAnchor&&i.id&&f(e)},trustAttrs:n,trustTags:a,blockTags:o,ignoreTags:s,selfClosingTags:c,blankChar:u,userAgentStyles:h,screenWidth:d}},def7:function(t,e,i){"use strict";i.r(e);var r=i("5bc5"),n=i("fafb");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("4a37");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"74d02768",null,!1,r["a"],o);e["default"]=l.exports},fafb:function(t,e,i){"use strict";i.r(e);var r=i("1fc5"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a}}]);