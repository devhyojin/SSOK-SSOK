(function(t){function e(e){for(var n,c,i=e[0],l=e[1],s=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",{staticClass:"bg"},[a("router-view")],1)],1)},o=[],c=(a("7d05"),{name:"App",data:function(){return{}}}),i=c,l=a("2877"),s=a("6544"),u=a.n(s),p=a("7496"),f=a("f6c4"),m=Object(l["a"])(i,r,o,!1,null,null,null),v=m.exports;u()(m,{VApp:p["a"],VMain:f["a"]});var d=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"font-color"},[t._v("MainPage")]),a("v-btn",{on:{click:t.moveToSC}},[t._v("Smart Camera")]),a("v-btn",{on:{click:t.back}},[t._v("back")])],1)},b=[],g={name:"MainPage",methods:{moveToSC:function(){this.$router.push({name:"SmartCamera"})},back:function(){this.$router.push({name:"WelcomPage"})}}},y=g,_=a("8336"),w=Object(l["a"])(y,h,b,!1,null,null,null),S=w.exports;u()(w,{VBtn:_["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"font-color"},[t._v("Smart Camera")]),a("button",{staticClass:"font-color",on:{click:t.back}},[t._v("back")]),a("div",[a("dashboard",{attrs:{uppy:t.uppy,plugins:["Webcam"]}})],1)])},O=[],P=a("4e2c"),k=a("b880"),j=a.n(k),x=a("0a72"),M=a.n(x),V=(a("37cc"),a("bdc9"),{name:"SmartCamera",components:{Dashboard:P["a"]},computed:{uppy:function(){return(new j.a).use(M.a,{})}},beforeDestroy:function(){this.uppy.close()},methods:{back:function(){this.$router.push({name:"MainPage"})}}}),$=V,T=Object(l["a"])($,C,O,!1,null,null,null),E=T.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-0":"",fluid:"","fill-height":"","bg-img":""}},[n("v-toolbar",{staticStyle:{"background-color":"rgba( 255, 255, 255, 0 )"},attrs:{elevation:0,height:"100%",width:"100%"}},[n("v-avatar",{staticClass:"mr-2",attrs:{size:"75"}},[n("img",{attrs:{src:a("9090"),alt:"welcome-icon"}})]),n("h1",{staticClass:"font-color display-2"},[t._v("SSOK SSOK")]),n("v-spacer"),n("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:t.moveToMainPage}},[n("v-icon",{attrs:{color:"white",size:"75"}},[t._v("mdi-google-controller")])],1)],1),n("v-row",{staticClass:"mx-7",staticStyle:{"min-height":"85vh"},attrs:{fluid:"","fill-height":"",align:"center"}},[n("div",{staticStyle:{width:"auto"}},[n("h1",{staticClass:"font-color display-3"},[t._v(" 다양한 언어를 "),n("br"),t._v(" 재밌게 배워보아요! ")]),n("v-btn",[t._v("구글에서 준 디자인")])],1)])],1)},A=[],z={name:"WelcomePage",methods:{moveToMainPage:function(){this.$router.push({name:"MainPage"})}}},B=z,D=a("8212"),J=a("a523"),K=a("132d"),I=a("0fd9"),R=a("2fa4"),q=a("71d9"),F=Object(l["a"])(B,W,A,!1,null,null,null),G=F.exports;u()(F,{VAvatar:D["a"],VBtn:_["a"],VContainer:J["a"],VIcon:K["a"],VRow:I["a"],VSpacer:R["a"],VToolbar:q["a"]}),n["a"].use(d["a"]);var H=[{path:"/",name:"WelcomPage",component:G},{path:"/main",name:"MainPage",component:S},{path:"/smartcamera",name:"SmartCamera",component:E}],L=new d["a"]({routes:H}),N=L,Q=a("2f62");n["a"].use(Q["a"]);var U=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=a("f309");n["a"].use(X["a"]);var Y=new X["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:N,store:U,vuetify:Y,render:function(t){return t(v)}}).$mount("#app")},"7d05":function(t,e,a){},9090:function(t,e,a){t.exports=a.p+"img/welcome-icon.d5ccf999.png"}});
//# sourceMappingURL=app.0895afa6.js.map