!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=21)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-cookie")},function(e,t){e.exports=require("react-router-redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("redux-promise")},function(e,t){e.exports=require("hapi")},function(e,t){e.exports=require("bounce")},function(e,t){e.exports=require("hapi-auth-cookie")},function(e,t){e.exports=require("inert")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("universal-cookie")},function(e,t){e.exports=require("redux-immutable-state-invariant")},function(e,t){e.exports=require("history/createMemoryHistory")},function(e,t){e.exports={data:[{name:"one"},{name:"two"},{name:"three"},{name:"four"},{name:"five"}]}},function(e,t){e.exports=require("react-router")},function(e,t,n){n(22),e.exports=n(25)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("history/createBrowserHistory")},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",function(){return ae}),n.d(r,"getAccount",function(){return ce}),n.d(r,"logout",function(){return se});var o=n(10),i=n.n(o),u=n(11),a=n.n(u),c=n(12),s=n.n(c),f=n(13),l=n.n(f),p=(n(23),n(0)),y=n.n(p),b=n(1),h=n(14),m=n(5),d=n(3),v=n(15),g=n.n(v),O=n(16),w=n.n(O);function j(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}var x=function(){var e=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){j(i,r,o,u,a,"next",e)}function a(e){j(i,r,o,u,a,"throw",e)}u(void 0)})}}(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.headers.cookie||"",t.server.app.universalCookies=new w.a(r),t.server.app.universalCookies.addChangeListener(function(e){if(n.state&&t.response)if(void 0===e.value)n.unstate(e.name,e.options);else{var r=Object.assign({},e.options);r.maxAge&&e.options&&e.options.maxAge&&(r.maxAge=1e3*e.options.maxAge),n.state(e.name,e.value,r)}});case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();function S(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function P(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){S(i,r,o,u,a,"next",e)}function a(e){S(i,r,o,u,a,"throw",e)}u(void 0)})}}var _={"jon.ortiz@me.com":{first_name:"Jonny",username:"J0NNYZER0",email:"jon.ortiz@me.com"}},E={Api:{Login:function(){var e=P(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=JSON.parse(t.payload),t.info.remoteAddress,"",o={},"post"!==t.method){e.next=8;break}return r.email?o=_[r.email]||{}:"Missing email",i=String(1),e.next=7,t.server.app.cache.set(i,o,0);case 7:t.cookieAuth.set({sid:i});case 8:if("get"!==t.method){e.next=18;break}if(!t.state.hasOwnProperty("sid")){e.next=16;break}return e.next=13,t.server.app.cache.get(t.state.sid.sid);case 13:e.t0=e.sent,e.next=17;break;case 16:e.t0={};case 17:o=e.t0;case 18:return e.abrupt("return",n.response({status:200,data:o}));case 19:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),Logout:function(){var e=P(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.server.app.cache.drop(t.state.sid.sid),t.cookieAuth.clear(),e.abrupt("return",n.response({status:200,data:{}}));case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}},k=n(2),R=(n(17),n(8)),C=n.n(R),T=n(9),I=n.n(T),q=(n(24),n(18)),A=n.n(q),L=n(4),N={LOGIN:{SUCCESS:"LOGIN_SUCCESS"}},G={API:{LOGIN:"/api/v1/login",LOGOUT:"/api/v1/logout"}},D={account:{}};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.account,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.LOGIN.SUCCESS:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){U(e,t,n[t])})}return e}({},t.data);default:return e}},W=Object(k.combineReducers)({routing:L.routerReducer,account:M}),H=A()(),z=function(e){var t=Object(L.routerMiddleware)(H),n=[C.a,I.a,t];return Object(k.createStore)(W,e,Object(k.compose)(k.applyMiddleware.apply(void 0,n)))};function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,Y(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,p["Component"]),function(e,t,n){t&&B(e.prototype,t),n&&B(e,n)}(t,[{key:"render",value:function(){return y.a.createElement("div",null,"Home page")}}]),t}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,$(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,p["Component"]),function(e,t,n){t&&V(e.prototype,t),n&&V(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.onChange,r=e.placeholder,o=e.value;return y.a.createElement("input",{className:"text-input",name:t,onChange:n,placeholder:r,type:"text",value:o})}}]),t}(),ne=n(6),re=n.n(ne);function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&oe(e.prototype,t),n&&oe(e,n)}(e,null,[{key:"login",value:function(e){return new Promise(function(t,n){var r=encodeURI("".concat(G.API.LOGIN));re()(r,{credentials:"include",headers:{Accept:"application/json"},method:"POST",body:JSON.stringify(e)}).then(function(e){return t(e.json())}).catch(function(e){return n(e)})})}},{key:"getAccount",value:function(e){return new Promise(function(e,t){var n=encodeURI("".concat(G.API.LOGIN));re()(n,{credentials:"include",method:"GET"}).then(function(t){return e(t.json())}).catch(function(e){return t(e)})})}},{key:"logout",value:function(){return new Promise(function(e,t){var n=encodeURI("".concat(G.API.LOGOUT));re()(n,{credentials:"include",method:"POST"}).then(function(t){return e(t.json())}).catch(function(e){return t(e)})})}}]),e}(),ue=function(e){return{type:N.LOGIN.SUCCESS,data:e}},ae=function(e){return function(t){return ie.login(e).then(function(e){t(ue(e.data))}).catch(function(e){throw e})}},ce=function(){return function(e){return ie.getAccount().then(function(t){e(ue(t.data))}).catch(function(e){throw e})}},se=function(){return function(e){return ie.logout().then(function(t){e(ue(t.data))}).catch(function(e){throw e})}};function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var he=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?be(e):t}(this,pe(t).call(this,e))).state={form:{email:""}},n.handleSubmit=n.handleSubmit.bind(be(be(n))),n.handleOnChange=n.handleOnChange.bind(be(be(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,p["Component"]),function(e,t,n){t&&le(e.prototype,t),n&&le(e,n)}(t,[{key:"handleOnChange",value:function(e){this.state.form[e.target.name]=e.target.value,this.setState({form:this.state.form})}},{key:"handleSubmit",value:function(e){var t=this.props,n=t.actions;t.loginCallback;e.preventDefault(),n.login(this.state.form)}},{key:"render",value:function(){this.props.formData;return y.a.createElement("form",null,y.a.createElement(te,{name:"email",onChange:this.handleOnChange,placeholder:"email",value:this.state.form.email}),y.a.createElement("br",null),y.a.createElement("br",null),y.a.createElement("button",{onClick:this.handleSubmit},"Submit"))}}]),t}();function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var we=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ve(this,ge(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,p["Component"]),function(e,t,n){t&&de(e.prototype,t),n&&de(e,n)}(t,[{key:"render",value:function(){(this.props.location.state||{from:{pathname:"/"}}).from;var e=this.props.account;return 0!==Object.keys(e).length?y.a.createElement(b.Redirect,{to:"/account"}):y.a.createElement("div",null,"Login",y.a.createElement(he,this.props))}}]),t}();function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ee=function(e){function t(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==je(t)&&"function"!=typeof t?_e(e):t}(this,Se(t).call(this,e)),r=e.staticContext,n.state={loading:!r||!r.hasOwnProperty("data"),widgets:r},n.fetchWidgets=n.fetchWidgets.bind(_e(_e(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,p["Component"]),function(e,t,n){t&&xe(e.prototype,t),n&&xe(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.loading;e.widgets;t&&this.fetchWidgets()}},{key:"fetchWidgets",value:function(){var e=this,t=this.props.fetchInitialData;this.setState(function(){return{loading:!0}}),t().then(function(t){return e.setState({loading:!1,widgets:t})})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.widgets;return!0===t?y.a.createElement("p",null,"'Loading...'"):y.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},n.data.map(function(e){var t=e.name;return y.a.createElement("li",{key:t,style:{margin:30}},y.a.createElement("ul",null,y.a.createElement("li",null,t)))}))}}]),t}(),ke=n(19),Re=n.n(ke);function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Te=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&Ce(e.prototype,t),n&&Ce(e,n)}(e,null,[{key:"load",value:function(){return new Promise(function(e){setTimeout(function(){return e(Re.a)},0)})}}]),e}();function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t){return!t||"object"!==Ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ge(e,t){return(Ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var De=[{path:"/",exact:!0,component:K},{path:"/widgets",component:Ee,fetchInitialData:function(){return new Promise(function(e,t){return e(Te.load())})}},{path:"/login",component:we},{path:"/account",component:function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Le(this,Ne(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ge(e,t)}(t,p["Component"]),function(e,t,n){t&&Ae(e.prototype,t),n&&Ae(e,n)}(t,[{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){qe(e,t,n[t])})}return e}({},this.props.account);return 0!==Object.keys(e).length?y.a.createElement("div",null,"Hello ",e.first_name,"!",y.a.createElement("br",null),y.a.createElement("br",null),"Username: ",e.username,y.a.createElement("br",null),"Email: ",e.email,y.a.createElement("br",null)):y.a.createElement(b.Redirect,{to:"/login"})}}]),t}(),isPrivate:!0}],Ue=n(20),Me=n(7);function We(e){return(We="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function He(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ze(e,t){return!t||"object"!==We(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Je(e){return(Je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Be(e,t){return(Be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Fe=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ze(this,Je(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Be(e,t)}(t,p["Component"]),function(e,t,n){t&&He(e.prototype,t),n&&He(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.actions,r=0!==Object.keys(t).length;return y.a.createElement("ul",null,[{exact:!0,name:"Home",path:"/"},{name:"Widgets",path:"/widgets"},{name:"Account",path:"/account"}].map(function(e){e.exact;var t=e.name,n=e.path;return y.a.createElement("li",{key:n},y.a.createElement(b.NavLink,{exact:!0,activeStyle:{fontWeight:"bold"},to:"".concat(n)},t))}),y.a.createElement("li",null,r?y.a.createElement("a",{href:"",onClick:n.logout},"Logout"):y.a.createElement(b.NavLink,{activeStyle:{fontWeight:"bold"},to:"/login"},"Login")))}}]),t}();function Ye(e){return(Ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ke(e,t){return!t||"object"!==Ye(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Qe(e){return(Qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Xe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ke(this,Qe(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(t,p["Component"]),function(e,t,n){t&&Ze(e.prototype,t),n&&Ze(e,n)}(t,[{key:"render",value:function(){return y.a.createElement("div",null,"Page Not Found")}}]),t}();function $e(e){return($e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function tt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function nt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rt(e,t){return!t||"object"!==$e(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ot(e){return(ot=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function it(e,t){return(it=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ut=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=rt(this,ot(t).call(this,e));var r=e.account;return n.state={accountIsInSession:0!==Object.keys(r).length,account:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&it(e,t)}(t,p["Component"]),function(e,t,n){t&&nt(e.prototype,t),n&&nt(e,n)}(t,[{key:"render",value:function(){var e=this,t=this.state;t.accountIsInSession,t.account;return y.a.createElement("div",null,y.a.createElement(Fe,this.props),y.a.createElement(b.Switch,null,De.map(function(t){var n=t.path,r=(t.exact,t.component),o=(t.isPrivate,tt(t,["path","exact","component","isPrivate"]));return y.a.createElement(b.Route,{key:n,path:n,exact:!0,render:function(t){return y.a.createElement(r,et({},t,o,e.props))}})}),y.a.createElement(b.Route,{render:function(e){return y.a.createElement(Xe,e)}})))}}]),t}();ut.propTypes={account:Me.PropTypes.object.isRequired,cookies:Object(Me.instanceOf)(d.Cookies).isRequired,actions:Me.PropTypes.object.isRequired};var at=Object(Ue.withRouter)(Object(d.withCookies)(Object(m.connect)(function(e){return{account:e.account}},function(e){return{actions:Object(k.bindActionCreators)(r,e)}})(ut)));function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){st(e,t,n[t])})}return e}function st(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function lt(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function u(e){ft(i,r,o,u,a,"next",e)}function a(e){ft(i,r,o,u,a,"throw",e)}u(void 0)})}}var pt=i.a.server({host:"0.0.0.0",port:Object({__isBrowser__:!1}).PORT||3e3,state:{ignoreErrors:!0}}),yt=pt.cache({segment:"sessions",expiresIn:2592e5});pt.app.cache=yt;var bt=function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r,o,i,u,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t,n);case 3:if(e.sent,!t.state.hasOwnProperty("sid")){e.next=11;break}return e.next=8,yt.get(t.state.sid.sid);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0={};case 12:if(e.t0,!(r=De.find(function(e){return Object(b.matchPath)(t.url.path,e)})||{}).fetchInitialData){e.next=20;break}return e.next=17,r.fetchInitialData();case 17:e.t1=e.sent,e.next=21;break;case 20:e.t1={};case 21:return o=e.t1,i=ct({},o),u=z(),console.log("context",i),c=Object(h.renderToString)(y.a.createElement(m.Provider,{store:u},y.a.createElement(b.StaticRouter,{location:t.url.path,context:i},y.a.createElement(d.CookiesProvider,{cookies:t.server.app.universalCookies},y.a.createElement(at,null))))),console.log("context",i),e.abrupt("return","<!DOCTYPE html>\n      <html>\n        <head>\n          <title>Hapi React SSR</title>\n        </head>\n        <body>\n          <div id='app'>".concat(c,"</div>\n          <script type='text/javascript' src='/assets/bundle.js' defer><\/script>\n          <script>window.__INITIAL_DATA__ = ").concat(g()(i),"<\/script>\n        </body>\n      </html>"));case 30:e.prev=30,e.t2=e.catch(0),a.a.rethrow(e.t2,"system");case 33:case"end":return e.stop()}},e,this,[[0,30]])}));return function(t,n){return e.apply(this,arguments)}}();function ht(){return(ht=lt(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pt.register([l.a,s.a]);case 3:return pt.auth.strategy("session","cookie",{password:"a1276d5c-24fc-4d40-b4b5-4134f51e",cookie:"sid",redirectTo:"/login",isSecure:!1,isHttpOnly:!1,validateFunc:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yt.get(n.sid);case 2:return r=e.sent,(o={valid:!!r}).valid&&(o.credentials=r),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),pt.auth.default("session"),pt.ext({type:"onPreResponse",method:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.response.statusCode,e.t0=r,e.next=404===e.t0?4:403===e.t0?6:401===e.t0?8:302===e.t0?10:12;break;case 4:return console.log("not found"),e.abrupt("break",12);case 6:case 8:return console.log("unauthorized"),e.abrupt("break",12);case 10:return console.log("redirect"),e.abrupt("break",12);case 12:return e.abrupt("return",n.continue);case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}),pt.route([{method:"GET",path:"/assets/{param*}",options:{auth:!1,handler:{directory:{path:"assets"}}}},{method:"GET",path:"/",options:{auth:!1,pre:[{method:bt,assign:"m1"}],handler:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pre.m1;case 2:return r=e.sent,e.abrupt("return",n.response(r));case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}},{method:"GET",path:"/login",options:{auth:{mode:"try"},pre:[{method:bt,assign:"m1"}],handler:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pre.m1;case 2:return r=e.sent,e.abrupt("return",n.response(r));case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}},{method:"GET",path:"/account",options:{auth:!1,pre:[{method:bt,assign:"m1"}],handler:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pre.m1;case 2:return r=e.sent,e.abrupt("return",n.response(r));case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}},{method:"GET",path:"/api/v1/login",handler:E.Api.Login,options:{auth:!1,pre:[{method:bt,assign:"m1"}],cors:{origin:["*"],credentials:!0}}},{method:"POST",path:"/api/v1/login",handler:E.Api.Login,options:{auth:!1,cors:{origin:["*"],credentials:!0}}},{method:"POST",path:"/api/v1/logout",handler:E.Api.Logout,options:{auth:!1,cors:{origin:["*"],credentials:!0}}},{method:"*",path:"/{p*}",options:{auth:!1,pre:[{method:bt,assign:"m1"}],handler:function(){var e=lt(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.pre.m1;case 2:return r=e.sent,e.abrupt("return",n.response(r));case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}}]),e.next=9,pt.start();case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),process.exit(1);case 15:console.log("Server running at:",pt.info.uri);case 16:case"end":return e.stop()}},e,this,[[0,11]])}))).apply(this,arguments)}!function(){ht.apply(this,arguments)}()}]);