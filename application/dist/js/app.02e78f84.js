(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],r[n]&&d.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-1ae7ca24":"7918e190","chunk-5ceeda87":"bb9d0fc0"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-1ae7ca24":1,"chunk-5ceeda87":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-1ae7ca24":"fc5e0e52","chunk-5ceeda87":"69c61525"}[t]+".css",r=o.p+s,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.request=s,delete n[t],f.parentNode.removeChild(f),a(i)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){n[t]=0}));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");i.type=s,i.request=n,a[1](i)}r[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";var s=a("b6fa"),n=a.n(s);n.a},"249e":function(t,e,a){},"355a":function(t,e,a){"use strict";var s=a("b8d8"),n=a.n(s);n.a},4641:function(t,e,a){"use strict";var s=a("6143"),n=a.n(s);n.a},"49d7":function(t,e,a){},"4b24":function(t,e,a){"use strict";var s=a("49d7"),n=a.n(s);n.a},"4e15":function(t,e,a){"use strict";var s=a("c04f"),n=a.n(s);n.a},5452:function(t,e,a){"use strict";var s=a("5ab3"),n=a.n(s);n.a},"56a8":function(t,e,a){"use strict";var s=a("249e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",class:t.routeName+"-page",attrs:{id:"app"}},[a("Header"),a("router-view")],1)},r=[],i=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:"img/logo.png",alt:""}})]),a("div",{staticClass:"player-container"},[a("HeaderSearch"),a("HeaderPlayer")],1)],1)}),c=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-player"},[a("button",{staticClass:"play-btn",on:{click:function(e){t.playPauseTrigger()}}},[t.playPause?a("svg",{attrs:{width:"15",height:"20",viewBox:"0 0 15 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("line",{attrs:{x1:"1.5",y1:"1.5",x2:"1.5",y2:"18.5",stroke:"#647588","stroke-width":"3","stroke-linecap":"round"}}),a("line",{attrs:{x1:"13.5",y1:"1.5",x2:"13.5",y2:"18.5",stroke:"#647588","stroke-width":"3","stroke-linecap":"round"}})]):t._e(),t.playPause?t._e():a("svg",{attrs:{width:"17",height:"24",viewBox:"0 0 17 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M16.7509 11.549L0.869612 0.59638C0.701489 0.48083 0.483532 0.468782 0.303908 0.562427C0.123737 0.657168 0.0109253 0.843363 0.0109253 1.04708V22.9524C0.0109253 23.1561 0.123737 23.3428 0.303908 23.4376C0.383863 23.4792 0.471484 23.5 0.558557 23.5C0.667536 23.5 0.775967 23.4671 0.869612 23.4031L16.7509 12.4504C16.8994 12.348 16.9875 12.1799 16.9875 11.9997C16.9875 11.8196 16.8988 11.6514 16.7509 11.549Z",fill:"#647588"}})])]),a("div",{staticClass:"track-progress"},[a("div",{staticClass:"track-name"},[t._v("\n      radio t - 619\n    ")]),a("range-slider",{staticClass:"slider",attrs:{min:"0",max:"100",step:"2"},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"track-img"},[a("img",{attrs:{src:"img/content/podcasts/podcast-4/small.png",alt:"radio t - 619"}})])}],u=a("c7e3"),d=a.n(u),f={name:"HeaderPlayer",components:{RangeSlider:d.a},data:function(){return{playPause:!1,sliderValue:22}},methods:{playPauseTrigger:function(){this.playPause=!this.playPause}}},v=f,p=(a("4e15"),a("2877")),h=Object(p["a"])(v,o,l,!1,null,null,null);h.options.__file="HeaderPlayer.vue";var m=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container",class:{active:t.isSearcActive}},[a("button",{staticClass:"search-btn"},[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M19.8248 18.98L14.9645 14.1197C16.2683 12.6208 17.0576 10.6652 17.0576 8.52772C17.0576 3.82262 13.2306 0 8.52994 0C3.82484 0 0.00222778 3.82705 0.00222778 8.52772C0.00222778 13.2284 3.82928 17.0554 8.52994 17.0554C10.6674 17.0554 12.6231 16.2661 14.122 14.9623L18.9823 19.8226C19.0976 19.9379 19.2528 20 19.4035 20C19.5543 20 19.7095 19.9424 19.8248 19.8226C20.0554 19.592 20.0554 19.2106 19.8248 18.98ZM1.19513 8.52772C1.19513 4.48337 4.48559 1.19734 8.5255 1.19734C12.5698 1.19734 15.8559 4.4878 15.8559 8.52772C15.8559 12.5676 12.5698 15.8625 8.5255 15.8625C4.48559 15.8625 1.19513 12.5721 1.19513 8.52772Z",fill:"#647588"}})])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-field",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchValue},on:{focus:function(e){t.isSearcActive=!0},blur:function(e){t.isSearcActive=!1},input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t.showSearchResults?a("div",{staticClass:"search-results"},[a("div",{staticClass:"results-number"},[t._v("\n        Number of results: "),a("b",[t._v(t._s(t.searchResults.length))])]),t._m(0),t._l(t.searchResults,function(e){return a("a",{key:e.id,staticClass:"result-item",attrs:{href:e.href}},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"category"},[t._v(t._s(e.category))]),a("div",{staticClass:"number"},[t._v(t._s(e.trackNumber))])])})],2):t._e()])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result-item head"},[a("div",{staticClass:"name"},[t._v("\n          Name\n        ")]),a("div",{staticClass:"category"},[t._v("\n          Category\n        ")]),a("div",{staticClass:"number"},[t._v("\n          Tracks\n        ")])])}],C={name:"HeaderSearch",data:function(){return{searchValue:"",isSearcActive:!1,searchResults:[{id:1,name:"African basketball",trackNumber:10,category:"Sport",href:"#"},{id:2,name:"BMW - is the best car",trackNumber:18,category:"Cars",href:"#"},{id:3,name:"Vue.js as framework",trackNumber:145,category:"IT",href:"#"}]}},computed:{showSearchResults:function(){return this.searchValue.length>2}},methods:{}},_=C,b=(a("e2d4"),Object(p["a"])(_,g,y,!1,null,null,null));b.options.__file="HeaderSearch.vue";var w=b.exports,k={name:"Header",components:{HeaderPlayer:m,HeaderSearch:w}},x=k,S=(a("5452"),Object(p["a"])(x,i,c,!1,null,null,null));S.options.__file="Header.vue";var P=S.exports,E={name:"App",components:{Header:P},computed:{routeName:function(){return this.$root._route.name}}},j=E,O=(a("5c0b"),Object(p["a"])(j,n,r,!1,null,null,null));O.options.__file="App.vue";var T=O.exports,$=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("CategoryMain"),a("div",{staticClass:"category-conatainer"},[a("CategoryList"),a("CategoryFavourite"),a("Copyright")],1)],1)},M=[],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-category",staticStyle:{"background-image":"url('img/content/podcasts/podcast-1/eerik-sandstrom-567001-unsplash.png')"}},[a("div",{staticClass:"main-content"},[a("a",{staticClass:"category-title",attrs:{href:"#"}},[t._v("mountain bike racing")]),a("div",{staticClass:"category-description"},[t._v("Mountain bike racing (shortened MTB or ATB racing) is the\n      "),a("br"),t._v("competitive cycle sport discipline of mountain biking held on\n      "),a("br"),t._v("off-road terrain. The Union Cycliste Internationale (UCI)\n      "),a("br"),t._v("recognised the discipline relatively late in 1990, when it\n      "),a("br"),t._v("sanctioned the world championships in Durango, Colorado.\n    ")]),a("div",{staticClass:"category-buttons"},[a("a",{staticClass:"btn btn-white circle",attrs:{href:"#"}},[a("span",[a("i",{staticClass:"icons icon-star"})])]),a("a",{staticClass:"btn btn-white",attrs:{href:"#"}},[a("span",[t._v("\n          start listen\n          "),a("i",{staticClass:"icons icon-play"})])])])])])}],B={name:"CategoryMain",props:{msg:String}},V=B,L=(a("4b24"),Object(p["a"])(V,N,H,!1,null,null,null));L.options.__file="CategoryMain.vue";var R=L.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-list"},[a("router-link",{staticClass:"list-title",attrs:{to:"/categories"}},[t._v("Categories")]),t._m(0)],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-items"},[a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",[a("i",{staticClass:"icons icon-diy"}),a("span",[t._v("diy")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-music"}),a("span",[t._v("Music")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",[a("i",{staticClass:"icons icon-pc"}),a("span",[t._v("it")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-innovation"}),a("span",[t._v("science")])])]),a("a",{staticClass:"category-item active",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-medal"}),a("span",[t._v("spоrt")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-translation"}),a("span",[t._v("Language")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-intelligence"}),a("span",[t._v("Productivity")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-intelligence"}),a("span",[t._v("Productivity")])])]),a("a",{staticClass:"category-item",attrs:{href:"#"}},[a("div",{staticStyle:{"text-align":"center"}},[a("i",{staticClass:"icons icon-intelligence"}),a("span",[t._v("Productivity")])])])])}],Z={name:"CategoryList"},q=Z,J=(a("56a8"),Object(p["a"])(q,F,I,!1,null,null,null));J.options.__file="CategoryList.vue";var U=J.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-favourite"},[a("div",{staticClass:"favourite-item",staticStyle:{"background-image":"url('img/content/podcasts/podcast-3/tommy-bebo-600358-unsplash.png')"}},[a("a",{staticClass:"category-title",attrs:{href:"#"}},[t._v("BAsketball")])]),a("div",{staticClass:"favourite-item",staticStyle:{"background-image":"url('img/content/podcasts/podcast-2/neonbrand-428982-unsplash.png')"}},[a("a",{staticClass:"category-title",attrs:{href:"#"}},[t._v("fights")])]),a("div",{staticClass:"favourite-item",staticStyle:{"background-image":"url('img/content/podcasts/podcast-3/tommy-bebo-600358-unsplash.png')"}},[a("a",{staticClass:"category-title",attrs:{href:"#"}},[t._v("BAsketball")])]),a("div",{staticClass:"favourite-item see-more",staticStyle:{"background-image":"url('img/content/bg/jeffrey-lin-691549-unsplash.png')"}},[a("a",{staticClass:"see-more-shadow",attrs:{href:"#"}},[a("span",[t._v("see\n        "),a("br"),t._v("more\n      ")]),a("span",[a("i",{staticClass:"icons icon-arrow-left"})])])])])}],z={name:"CategoryFavourite",props:{msg:String}},G=z,K=(a("4641"),Object(p["a"])(G,D,W,!1,null,null,null));K.options.__file="CategoryFavourite.vue";var Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("© 2018 Podcaster. All Rights Reserved")])},Y=[],tt={name:"copyright"},et=tt,at=(a("355a"),Object(p["a"])(et,X,Y,!1,null,"2b6e1e2f",null));at.options.__file="Copyright.vue";var st=at.exports,nt={name:"home",components:{CategoryMain:R,CategoryList:U,CategoryFavourite:Q,Copyright:st}},rt=nt,it=(a("21bb"),Object(p["a"])(rt,A,M,!1,null,null,null));it.options.__file="Home.vue";var ct=it.exports;s["a"].use($["a"]);var ot=new $["a"]({routes:[{path:"/",name:"home",component:ct},{path:"/categories",name:"categories",component:function(){return a.e("chunk-1ae7ca24").then(a.bind(null,"58c2"))}},{path:"/create-podcast",name:"CreatePodacast",component:function(){return a.e("chunk-5ceeda87").then(a.bind(null,"da2d"))}}]}),lt=a("2f62");s["a"].use(lt["a"]);var ut=new lt["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:ot,store:ut,render:function(t){return t(T)}}).$mount("#app")},"5ab3":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("8fba"),n=a.n(s);n.a},6143:function(t,e,a){},"8fba":function(t,e,a){},b6fa:function(t,e,a){},b8d8:function(t,e,a){},c04f:function(t,e,a){},d157:function(t,e,a){},e2d4:function(t,e,a){"use strict";var s=a("d157"),n=a.n(s);n.a}});
//# sourceMappingURL=app.02e78f84.js.map