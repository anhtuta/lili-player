(this["webpackJsonpliliana-player"]=this["webpackJsonpliliana-player"]||[]).push([[6],{110:function(e,t,a){"use strict";a.r(t);var n=a(56),r=a(17),o=a(18),s=a(20),i=a(19),c=a(0),u=a.n(c),l=a(21),m=a(2),f=a(8),g=a(47),d=a(23),p=(a(98),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleLogout=function(){g.a.logout()},e.getActiveMenuItems=function(t,a){a.forEach((function(a,n){a.subItems?e.getActiveMenuItems(t,a.subItems):g.a.rolesHasPermission(t,a.path)||(a.enabled=!1)}))},e.generateMenu=function(t){var a=e.props.location.pathname;return t.map((function(t){var n="menu-item"+(t.path===a?" active-menu":"");return null===t.path&&(t.path="#"),t.subItems?u.a.createElement("li",{key:t.key,className:n+" menu-parent level"+t.level},u.a.createElement(l.b,{to:t.path},t.name," ",u.a.createElement("i",{className:"caret fas "+(t.level>1?"fa-caret-right":"fa-caret-down")})),u.a.createElement("ul",{key:t.key,className:n+" sub-menu level"+(t.level+1)},e.generateMenu(t.subItems))):t.enabled&&u.a.createElement("li",{key:t.key,className:n+" level"+t.level},u.a.createElement(l.b,{to:t.path},t.name))}))},e.toggleDarkMode=function(){var t=e.context,a=t.theme,n=t.updateTheme;a===f.l?n(f.k):n(f.l)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.userInfo,t=e?e.roleArray:[],a=Object(n.a)(f.d),r=this.context.theme;return this.getActiveMenuItems(t,a),u.a.createElement("nav",{className:"custom-navbar"},u.a.createElement("ul",{className:"nav-wrapper"},this.generateMenu(a)),u.a.createElement("div",{className:"userinfo-wrapper"},u.a.createElement("div",{className:"div-header"},u.a.createElement("span",{className:"btn_dark_mode",title:r===f.l?"Toggle Dark mode":"Toggle Light mode",onClick:this.toggleDarkMode,role:"img","aria-label":"emoji"},r===f.l?"\ud83c\udf1c":"\ud83c\udf1e"))))}}]),a}(c.Component));p.contextType=d.a,t.default=Object(m.g)(p)},46:function(e,t,a){"use strict";var n=a(22),r=(a(54),{position:n.b.POSITION.TOP_RIGHT,autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),o={info:function(e){n.b.info(e,r)},success:function(e){n.b.success(e,r)},warn:function(e){n.b.warn(e,r)},error:function(e){var t;t=e.data&&e.data.message?e.data.message:e?e.toString():"Error: unexpected error occurred!",n.b.error(t,r)}};t.a=o},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(18),r=a(17),o=a(8),s=a(48),i=a(46),c=new(Object(n.a)((function e(){Object(r.a)(this,e),this.isAuthenticated=function(){return!!localStorage.getItem(o.a)},this.login=function(e,t,a){var n={username:e.username,password:e.password};s.a.post("/signin",n).then((function(e){localStorage.setItem(o.a,e[o.a]),t()})).catch((function(e){a(e.data?e.data:e)}))},this.logout=function(){s.a.post("/signout").then((function(e){localStorage.removeItem(o.a),window.location="/"})).catch((function(e){console.log(e),i.a.error(e)}))},this.getMe=function(){return s.a.get("/api/user/me")},this.redirectToLoginPage=function(){i.a.info("You need to login first!"),localStorage.removeItem(o.a),window.location.hash="/login"},this.rolesHasPermission=function(e,t){if(!o.g[t])return!0;for(var a=0;a<e.length;a++)if(o.g[t].includes(e[a]))return!0;return!1},this.userInfo=null})))},48:function(e,t,a){"use strict";var n=a(49),r=a(50),o=a.n(r),s=a(52),i=a.n(s),c=a(8),u=a(47);o.a.interceptors.request.use((function(e){var t=Object(n.a)(Object(n.a)({},e),{},{paramsSerializer:function(e){return i.a.stringify((t=e,Object.keys(t).forEach((function(e){null!==t[e]&&void 0!==t[e]||delete t[e]})),t),{arrayFormat:"repeat"});var t},baseURL:"https://ducdongyyen.com/laravel/public",headers:Object(n.a)(Object(n.a)({},e.headers),{},{Pragma:"no-cache"})});return localStorage.getItem(c.a)&&(t.headers.Authorization="Bearer ".concat(localStorage.getItem(c.a))),t}),(function(e){return console.log(e),Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){return e.response&&e.response.status?(401===e.response.status&&u.a.redirectToLoginPage(),Promise.reject(e.response)):Promise.reject(e)})),t.a=o.a},56:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(15);var r=a(24);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},98:function(e,t,a){}}]);