(this["webpackJsonpliliana-player"]=this["webpackJsonpliliana-player"]||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"j",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return i})),n.d(t,"h",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return b}));var a=n(25);function r(e){return document.getElementById(e)}function o(e){return document.getElementsByClassName(e)[0]}function l(e){return parseFloat(e.toFixed(3))}function c(e){return e&&"string"===typeof e?(t=e.match(/\[(\d+):(\d+):(\d+\.\d+)\]/))&&4===t.length?parseFloat((60*parseInt(t[1])*60+60*parseInt(t[2])+parseFloat(t[3])).toFixed(3)):(t=e.match(/\[(\d+):(\d+\.\d+)\]/))&&3===t.length?parseFloat((60*parseInt(t[1])+parseFloat(t[2])).toFixed(3)):0:0;var t}function u(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=document.createElement(e);if(t&&"string"===typeof t&&r.setAttribute("id",t),n&&"string"===typeof n&&r.setAttribute("class",n),a&&"object"===typeof a)for(var o=0;o<Object.keys(a).length;o++)r.setAttribute(Object.keys(a)[o],a[Object.keys(a)[o]]);return r}function i(e,t){var n;localStorage&&localStorage.getItem("LILIANA_SETTINGS")?(n=JSON.parse(localStorage.getItem("LILIANA_SETTINGS")))[e]=t:n=Object(a.a)({},e,t),localStorage.setItem("LILIANA_SETTINGS",JSON.stringify(n))}function s(e){return localStorage&&localStorage.getItem("LILIANA_SETTINGS")?JSON.parse(localStorage.getItem("LILIANA_SETTINGS"))[e]:null}function d(e,t,n){var a,r,o,l;for(a=n.toUpperCase(),r=document.getElementById(e).getElementsByTagName("tr"),l=0;l<r.length;l++)(o=r[l].getElementsByTagName("td")[t])&&((o.textContent||o.innerText).toUpperCase().indexOf(a)>-1?r[l].style.display="":r[l].style.display="none")}function m(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e}var f=function(e){return e.startsWith("http")?e:"https://ducdongyyen.com/laravel/public"+e},h=function(e){return e instanceof Date&&!isNaN(e)},b=function(e){return e.toLocaleDateString("vi-VN",{year:"numeric",month:"numeric"})}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(27),r=n(0),o=n.n(r),l=n(8),c=n(13),u={theme:l.l,setTheme:function(){}},i=o.a.createContext(u),s=function(e){var t=e.children,n=Object(r.useState)(l.l),u=Object(a.a)(n,2),s=u[0],d=u[1];Object(r.useEffect)((function(){var e=Object(c.h)(l.i);d(e||l.l)}),[]);return o.a.createElement(i.Provider,{value:{theme:s,updateTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.l;d(e),Object(c.k)(l.i,e)}}},t)}},29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),c=(n(34),n(17)),u=n(18),i=n(20),s=n(19),d=n(21),m=n(2),f=n(22),h=n(10),b=(n(36),function(e){var t=e.show,n=e.fullscreen,a=void 0===n||n?"loading-fs":"";return t?r.a.createElement("div",{className:a},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))):null}),p=function(e){return e.error?r.a.createElement("div",null,"Error! ",r.a.createElement("button",{onClick:e.retry},"Retry")):e.timedOut?r.a.createElement("div",null,"Taking a long time... ",r.a.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?r.a.createElement(b,{show:!0}):null},E=Object(h.a)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,110))}),{fallback:p({pastDelay:!0,error:!1,timedOut:!1})}),g=Object(h.a)((function(){return n.e(7).then(n.bind(null,111))}),{fallback:p({pastDelay:!0,error:!1,timedOut:!1})}),y=Object(h.a)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,113))}),{fallback:p({pastDelay:!0,error:!1,timedOut:!1})}),v=(Object(h.a)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,114))}),{fallback:p({pastDelay:!0,error:!1,timedOut:!1})}),Object(h.a)((function(){return n.e(8).then(n.bind(null,112))}),{fallback:p({pastDelay:!0,error:!1,timedOut:!1})})),I=n(23),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={userInfo:null},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.userInfo;return r.a.createElement(d.a,null,r.a.createElement(I.b,null,r.a.createElement("div",{className:"app"},r.a.createElement(E,{userInfo:e}),r.a.createElement("div",{className:"app-content"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/bai-hat"})),r.a.createElement(m.b,{exact:!0,path:"/bai-hat",component:y}),r.a.createElement(m.b,{exact:!0,path:"/bai-hat/:id",component:y}),r.a.createElement(m.b,{exact:!0,path:"/about",component:g}),r.a.createElement(m.b,{path:"",component:v}))))),r.a.createElement(f.a,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(41);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"j",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"l",(function(){return h})),n.d(t,"k",(function(){return b}));var a="access_token",r="USER",o=[{name:"Lili Player",path:"/bai-hat",key:"home",level:1,enabled:!0,subItems:null},{name:"About",path:"/about",key:"about",level:1,enabled:!0,subItems:null}],l={"/book":[r],"/staff":["STORE_MANAGER"],"/fetch-demo":[r]},c="appTheme",u="SEQUENCE",i="SHUFFLE",s="REPEAT_ONE",d="Sorry! This song has no lyric yet! You can contribute lyric by\n  sending it to me:<br/><a href='mailto:taanhtu95@gmail.com'>Mail</a><br/>\n  <a href='https://fb.com/anhtuta95' target='_blank'>FB</a>",m="Fetching lyric, please wait...",f="Lyric doesn't exist!",h="light",b="dark"}},[[29,2,3]]]);