(function(e){function t(t){for(var o,u,i=t[0],a=t[1],f=t[2],d=0,l=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(t);while(l.length)l.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"007f":function(e,t,n){"use strict";n.r(t);var o=n("f90a"),r=n.n(o);for(var c in n.d(t,"default",(function(){return r.a})),o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c)},"0613":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("5502");t.default=o.createStore({state:{},mutations:{},actions:{},modules:{}})},"061a":function(e,t,n){},"0cdb":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("7a23"),r=Object(o["withScopeId"])("data-v-c230866c"),c=r((function(e,t,n,r,c,u){var i=Object(o["resolveComponent"])("Constitution");return Object(o["openBlock"])(),Object(o["createBlock"])(i)}))},"2bb6":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("7a23");function r(e,t,n,r,c,u){return Object(o["openBlock"])(),Object(o["createBlock"])("p",{onContextmenu:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.onContextMenu(t)}),["prevent"]))},Object(o["toDisplayString"])(e.preamble),33)}},"2c0a":function(e,t,n){"use strict";n.r(t);var o=n("98e9"),r=n.n(o);for(var c in n.d(t,"default",(function(){return r.a})),o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c)},"3dfd":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={id:"nav"},c=Object(o["createTextVNode"])("Home"),u=Object(o["createTextVNode"])(" | "),i=Object(o["createTextVNode"])("Learn");function a(e,t,n,a,f,s){var d=Object(o["resolveComponent"])("router-link"),l=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])(d,{to:"/"},{default:Object(o["withCtx"])((function(){return[c]})),_:1}),u,Object(o["createVNode"])(d,{to:"/learn"},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]),Object(o["createVNode"])(l)],64)}n("9cdc");const f={};f.render=a;t["default"]=f},"7f49":function(e,t,n){"use strict";n.r(t);var o=n("2bb6"),r=n("2c0a");for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);r["default"].render=o["a"],t["default"]=r["default"]},"98e9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7a23");t.default=o.defineComponent({name:"Constitution",setup:function(){var e=o.ref("We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.");function t(e){var t=document.getSelection();t&&console.log(t)}return{preamble:e,onContextMenu:t}}})},"9cdc":function(e,t,n){"use strict";n("d673")},afbc:function(e,t,n){"use strict";n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0});var o=n("9ab4"),r=n("6c02"),c=o.__importDefault(n("bb51")),u=[{path:"/",name:"Home",component:c.default},{path:"/about",name:"About",component:function(){return Promise.resolve().then((function(){return o.__importStar(n("f820"))}))}}],i=r.createRouter({history:r.createWebHistory("/"),routes:u});t.default=i},bb3e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("9483");o.register("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},bb51:function(e,t,n){"use strict";n.r(t);var o=n("0cdb"),r=n("007f");for(var c in r)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n("e9d2");r["default"].render=o["a"],r["default"].__scopeId="data-v-c230866c",t["default"]=r["default"]},cd49:function(e,t,n){"use strict";n("e260"),n("e6cf"),n("cca6"),n("a79d"),Object.defineProperty(t,"__esModule",{value:!0});var o=n("9ab4"),r=n("7a23"),c=o.__importDefault(n("3dfd"));n("bb3e");var u=o.__importDefault(n("afbc")),i=o.__importDefault(n("0613"));r.createApp(c.default).use(i.default).use(u.default).mount("#app")},d673:function(e,t,n){},e9d2:function(e,t,n){"use strict";n("061a")},f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"about"},c=Object(o["createVNode"])("h1",null,"This is an about page",-1);function u(e,t,n,u,i,a){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[c])}const i={};i.render=u;t["default"]=i},f90a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("9ab4"),r=n("7a23"),c=o.__importDefault(n("7f49"));t.default=r.defineComponent({name:"Home",components:{Constitution:c.default}})}});
//# sourceMappingURL=app.cfbb5eeb.js.map