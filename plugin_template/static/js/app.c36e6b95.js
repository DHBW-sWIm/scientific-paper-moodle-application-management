(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21ef2c":"2313b8fb","chunk-2d22d3f5":"277704d8"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mod/spam/static/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=(n("9537"),n("ab8b"),n("3e48"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"progress"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loadingShow,expression:"loadingShow"}],ref:"loadingBar",staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"95%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]),n("Navbar",{attrs:{"logged-in":e.loggedIn},on:{loginCheck:e.checkLoginToken}}),n("router-view",e._b({on:{loading:e.loading,ajaxerror:function(t){return e.$refs.ajerror.open()}}},"router-view",e.routeProps,!1)),n("Ajaxerror",{ref:"ajerror"})],1)}),r=[],s=(n("b0c0"),n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light mb-3"},[n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[e._v(" Anlage ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/manage"}},[e._v(" Manager ")])],1)]),e.loggedIn?e._e():n("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){e.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"User","aria-label":"User"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.psw,expression:"psw"}],staticClass:"form-control mr-sm-2",attrs:{type:"password",id:"psw",placeholder:"Password"},domProps:{value:e.psw},on:{input:function(t){t.target.composing||(e.psw=t.target.value)}}}),n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:e.getToken}},[e.loginLoading?n("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.loginLoading?n("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e(),e._v(" Login ")])]),e.loggedIn?n("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){e.preventDefault()}}},[n("button",{staticClass:"btn btn-outline-danger my-2 my-sm-0",attrs:{type:"submit"},on:{click:e.logout}},[e._v(" Logout ")])]):e._e()])])])}),i=[],l=(n("a9e3"),n("bc3a")),c=n.n(l),u={name:"Navbar",props:{page:{type:Number,default:1},loggedIn:Boolean},data:function(){return{user:"",psw:"",loginLoading:!1}},methods:{click:function(e){this.$emit("click",e)},logout:function(){document.cookie="wstoken=;Max-Age=-99999999;path=/",this.$emit("loginCheck")},getToken:function(){var e=this;this.loginLoading=!0,c.a.get((Object({NODE_ENV:"production",BASE_URL:"/mod/spam/static/"}).VUE_APP_MOODEL_URL||"")+"/login/token.php",{params:{username:this.user,password:this.psw,service:"serviceweb"}}).then((function(t){var n=new Date;n.setTime(n.getTime()+864e5);var o="expires="+n.toUTCString();document.cookie="wstoken="+t.data.token+";"+o+";path=/",e.$emit("loginCheck"),e.loginLoading=!1})).catch((function(t){console.log(t),e.loginLoading=!1}))}}},d=u,p=n("2877"),m=Object(p["a"])(d,s,i,!1,null,null,null),g=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade",attrs:{id:"modalAjax",tabindex:"-1",role:"dialog","aria-labelledby":"modalStudents","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[e._v(" Verbindungsfehler. ")])]),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"container"},[e._v(" Bei der Verbindung mit Ihrem Webservice ist ein Fehler aufgetreten. ")])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v(" Schließen ")])])])])])}],h=n("1157"),b=n.n(h),w={name:"Ajaxerror",props:{},data:function(){return{}},methods:{open:function(){b()("#modalAjax").modal("show")}}},k=w,y=Object(p["a"])(k,f,v,!1,null,null,null),C=y.exports,_={name:"App",components:{Navbar:g,Ajaxerror:C},computed:{routeProps:function(){return"Manage"===this.$route.name?{courses:this.courses,token:this.token}:(this.$route.name,{})}},data:function(){return{loggedIn:!1,token:"",courses:[],loadingShow:!1}},mounted:function(){this.checkLoginToken()},methods:{loading:function(e,t){var n=this;this.loadingShow=!0,this.$refs.loadingBar.style.width=e,t&&setTimeout((function(){return n.loadingShow=!1}),1e3)},checkLoginToken:function(){console.log(document.cookie);var e=document.cookie,t=e.split(";"),n=!1;if(t.length>1)for(var o=0;o<t.length;o++)"wstoken"==t[o].substring(1,8)&&(n=!0,this.loggedIn=!0,this.token=t[o].substring(9));else 1==t.length&&"wstoken"==t[0].substring(0,7)&&(n=!0,this.loggedIn=!0,this.token=t[0].substring(8));n||(this.loggedIn=!1)}}},x=_,j=(n("034f"),Object(p["a"])(x,a,r,!1,null,null,null)),O=j.exports,L=(n("d3b7"),n("8c4f"));o["a"].use(L["a"]);var P=new L["a"]({routes:[{path:"/",redirect:"/create"},{path:"/create",name:"Create",component:function(){return n.e("chunk-2d21ef2c").then(n.bind(null,"d879"))}},{path:"/manage",name:"Manage",component:function(){return n.e("chunk-2d22d3f5").then(n.bind(null,"f74b"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:P,render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.c36e6b95.js.map